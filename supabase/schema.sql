create extension if not exists pgcrypto;

create table if not exists public.course_reservations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  teacher_name text not null,
  teacher_school text not null,
  subjects text not null,
  format text not null,
  slot text not null,
  price_eur integer not null,
  study_topics text,
  class_level text,
  origin_school text,
  documents jsonb not null default '[]'::jsonb,
  payment_status text not null default 'prototype_pending'
);

create table if not exists public.teacher_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text,
  last_name text,
  email text,
  school text,
  profile text,
  hourly_rate text,
  availability text,
  has_auto_entrepreneur_status boolean not null default false,
  auto_entrepreneur_identifier text,
  needs_auto_entrepreneur_setup boolean not null default true,
  certificates jsonb not null default '[]'::jsonb,
  status text not null default 'pending_review'
);

alter table public.teacher_applications
add column if not exists has_auto_entrepreneur_status boolean not null default false;

alter table public.teacher_applications
add column if not exists auto_entrepreneur_identifier text;

alter table public.teacher_applications
add column if not exists needs_auto_entrepreneur_setup boolean not null default true;

alter table public.course_reservations enable row level security;
alter table public.teacher_applications enable row level security;

drop policy if exists "Public can create course reservations" on public.course_reservations;
create policy "Public can create course reservations"
on public.course_reservations
for insert
to anon, authenticated
with check (true);

drop policy if exists "Public can create teacher applications" on public.teacher_applications;
create policy "Public can create teacher applications"
on public.teacher_applications
for insert
to anon, authenticated
with check (true);

insert into storage.buckets (id, name, public)
values
  ('course-documents', 'course-documents', false),
  ('teacher-certificates', 'teacher-certificates', false)
on conflict (id) do nothing;

drop policy if exists "Public can upload course documents" on storage.objects;
create policy "Public can upload course documents"
on storage.objects
for insert
to anon, authenticated
with check (bucket_id = 'course-documents');

drop policy if exists "Public can upload teacher certificates" on storage.objects;
create policy "Public can upload teacher certificates"
on storage.objects
for insert
to anon, authenticated
with check (bucket_id = 'teacher-certificates');
