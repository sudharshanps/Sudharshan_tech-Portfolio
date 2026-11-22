-- SUDHARSHAN_TECH enquiry storage
-- Run once in Supabase SQL Editor. Keep the service-role key on the Node server only.

create table if not exists public.inquiries (
  reference_id text primary key,
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  company text,
  service_type text,
  budget_range text,
  timeline text,
  project_details text,
  estimator_brief text,
  status text not null default 'new'
    check (status in ('new', 'reviewing', 'contacted', 'quoted', 'in_progress', 'completed', 'closed')),
  email_notification_status text not null default 'pending'
    check (email_notification_status in ('pending', 'sent', 'failed', 'not_configured')),
  whatsapp_notification_status text not null default 'pending'
    check (whatsapp_notification_status in ('pending', 'sent', 'failed', 'not_configured')),
  notification_updated_at timestamptz,
  raw_json jsonb not null default '{}'::jsonb
);

create index if not exists inquiries_created_at_idx
  on public.inquiries (created_at desc);
create index if not exists inquiries_email_idx
  on public.inquiries (lower(email));
create index if not exists inquiries_status_idx
  on public.inquiries (status);

-- Browser clients must not access enquiries directly.
alter table public.inquiries enable row level security;
revoke all on table public.inquiries from anon, authenticated;
-- The Node backend uses the Supabase service-role key and bypasses RLS.
