# SUDHARSHAN_TECH enquiry database and notification setup

This feature keeps the existing React/Vite frontend and Node.js server. Website enquiry forms continue to POST to `/api/contact`; the Node server saves the enquiry to Supabase before attempting notifications.

## 1. Create the Supabase database

1. Create a Supabase project at https://supabase.com/.
2. Open **SQL Editor → New query**.
3. Run `supabase/migrations/202611220001_create_inquiries.sql`.
4. In **Project Settings → API**, copy the Project URL and the server-side `service_role` key.
5. Never put the service-role key in a `VITE_*` variable or frontend code. It belongs only in Render's server environment variables.

The table has a private RLS policy posture: browser roles `anon` and `authenticated` have no direct table privileges. The Node server uses the service-role key.

## 2. Configure the Render web service

In the existing SUDHARSHAN_TECH Render service → **Environment**, add:

- `SUPABASE_URL`: Supabase Project URL
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service-role key
- `TO_EMAIL`: `sudharshantech123@gmail.com`
- `WHATSAPP_RECIPIENT`: `919791495418`
- `RESEND_API_KEY`: Resend API key
- `RESEND_FROM_EMAIL`: sender on a domain verified in Resend, e.g. `SUDHARSHAN_TECH <notifications@your-verified-domain.com>`
- `WHATSAPP_ACCESS_TOKEN`: Meta WhatsApp Cloud API access token
- `WHATSAPP_PHONE_NUMBER_ID`: Meta WhatsApp phone-number ID
- `WHATSAPP_API_VERSION`: current Graph API version in your Meta app, e.g. `vXX.X` (replace with the actual supported version)
- `WHATSAPP_TEMPLATE_NAME`: approved template name `new_website_enquiry`
- `WHATSAPP_TEMPLATE_LANGUAGE`: template language code, e.g. `en_US`
- `ADMIN_SECRET`: a strong random 64-character secret

Do not commit real secrets to GitHub. After setting the variables, deploy/restart the Render service. In production, the contact endpoint returns HTTP 503 rather than claiming success if Supabase is not configured.

## 3. Configure email alerts with Resend

1. Create a Resend account at https://resend.com/.
2. Add and verify a domain you control. A Gmail address such as `@gmail.com` cannot be used as your authenticated sender domain.
3. Publish the DNS records Resend provides (SPF/DKIM, and DMARC where applicable).
4. Create an API key and set `RESEND_API_KEY`.
5. Set `RESEND_FROM_EMAIL` to an address on that verified domain.

Every saved enquiry triggers an email to `TO_EMAIL`. The customer's email is used as Reply-To; it is not used as the From address.

## 4. Configure WhatsApp alerts with Meta Cloud API

1. Set up a Meta app with the WhatsApp product and connect a WhatsApp Business Account and sending phone number.
2. Create and get approval for a **utility** message template named `new_website_enquiry`.
3. Use seven body text variables, in this order:

   1. Enquiry reference
   2. Customer name
   3. Requested service
   4. Customer email
   5. Customer phone
   6. Budget
   7. Project brief

   Suggested template body:

   ```text
   New SUDHARSHAN_TECH website enquiry: {{1}}
   Name: {{2}}
   Service: {{3}}
   Email: {{4}}
   Phone: {{5}}
   Budget: {{6}}
   Brief: {{7}}
   Please review the enquiry and contact the customer.
   ```

4. Add the Meta access token, phone-number ID, Graph API version, template name and language to Render.
5. Ensure the receiving business number is eligible to receive messages from this WhatsApp Business Account. During development, Meta's test number may only message numbers added as test recipients.

The code sends a template message to the company's own number, not to the customer. A WhatsApp message is only sent if the template and credentials are configured.

## 5. Admin API

All admin endpoints require the `x-admin-token: <ADMIN_SECRET>` header or `Authorization: Bearer <ADMIN_SECRET>`.

- `GET /api/inquiries?page=1&limit=50` — paginated enquiry list.
- `PATCH /api/inquiries/:referenceId/status` with JSON `{"status":"reviewing"}` — update status.
- `DELETE /api/inquiries/:referenceId` — delete an enquiry.

Allowed statuses: `new`, `reviewing`, `contacted`, `quoted`, `in_progress`, `completed`, `closed`.

Do not expose the admin secret in browser JavaScript or public pages. The API is intended for authenticated server-side/admin tooling.

## 6. Test checklist

1. Submit one test enquiry from the website.
2. Confirm a row appears in Supabase `public.inquiries`.
3. Confirm the website shows the enquiry reference.
4. Confirm email notification status is `sent` and the message arrives at the company inbox.
5. Confirm WhatsApp notification status is `sent` and the alert arrives at the company number.
6. If a provider is not configured or rejects a message, the enquiry remains saved and the corresponding notification status is `not_configured` or `failed`.
7. Test admin listing and status update with the secret from a trusted terminal, not from public frontend code.

**Important:** A successful database save is separate from notification delivery. The API returns the enquiry reference even when an alert provider is unavailable; inspect the stored notification status and server logs to diagnose delivery.
