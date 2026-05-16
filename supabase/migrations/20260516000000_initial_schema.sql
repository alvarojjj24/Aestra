-- AESTRA initial schema draft (Supabase/Postgres)

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  age int,
  weight_kg numeric,
  height_cm numeric,
  gender text,
  fitness_level text,
  language text not null default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.personal_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  discipline text not null,
  value_seconds int,
  created_at timestamptz not null default now(),
  unique(user_id, discipline)
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  event_date date not null,
  distance_km numeric,
  priority text,
  created_at timestamptz not null default now()
);

create table if not exists public.training_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  session_date date not null,
  sport text not null,
  intensity text not null,
  duration_minutes int not null,
  status text not null default 'planned',
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.readiness_scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  score_date date not null,
  readiness_score int not null,
  fatigue_score int not null,
  adaptation_signal text not null,
  created_at timestamptz not null default now(),
  unique(user_id, score_date)
);

create table if not exists public.nutrition_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  logged_at timestamptz not null default now(),
  meal_type text,
  calories int,
  protein_g int,
  carbs_g int,
  fat_g int,
  photo_path text,
  source text not null default 'rule_based'
);

create table if not exists public.coach_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  role text not null,
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.personal_records enable row level security;
alter table public.events enable row level security;
alter table public.training_sessions enable row level security;
alter table public.readiness_scores enable row level security;
alter table public.nutrition_logs enable row level security;
alter table public.coach_messages enable row level security;

-- RLS policy placeholders (replace with granular production policies)
create policy "profiles owner access" on public.profiles for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "personal_records owner access" on public.personal_records for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "events owner access" on public.events for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "training_sessions owner access" on public.training_sessions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "readiness_scores owner access" on public.readiness_scores for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "nutrition_logs owner access" on public.nutrition_logs for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "coach_messages owner access" on public.coach_messages for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
