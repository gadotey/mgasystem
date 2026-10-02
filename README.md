# MGAS starter — Phase 1

Initial multi-family data model and Next.js shell. **Not production ready.** No login, payment processing, receipt delivery, offline sync, or donation API yet.

## Local setup
1. Install Node.js 22 and Docker.
2. `npm install`
3. Copy `.env.example` to `.env`; set `DATABASE_URL` password to the same strong value as `POSTGRES_PASSWORD` and add `POSTGRES_PASSWORD=...`.
4. `docker compose up -d db`
5. `npm run db:migrate -- --name init`
6. `npm run dev` and visit http://localhost:3000; health endpoint: `/api/health`.

## Data safeguards planned
Enforce family/event access server-side; generate receipt numbers server-side; never treat a QR payment redirect as confirmation; confirm via provider webhook or officer reconciliation; queue offline entries with unique clientSubmissionId; require explicit consent for thank-you messages. Anonymous donor identity must never appear on public receipts or exports.

## Repository
`git remote add origin git@github.com:gadotey/mgasystem.git` (only if no origin exists), then commit and push once Git SSH access is configured.
