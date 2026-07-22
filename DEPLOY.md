# Deploying Haya's Training Tracker — instructions for Claude Code

## What this is
A single-page training tracker (`Haya Training Tracker.dc.html` + `assets/` + `_ds/`).
Two people use it from different devices: **Haya** (trainee) marks tasks done → they show
as "pending"; the **mentor** approves them. Progress must be shared across devices.

## 1. Host on GitHub Pages
1. Create a public repo (e.g. `haya-tracker`).
2. Copy the whole project folder in (keep relative paths: `assets/`, `_ds/`).
3. Rename `Haya Training Tracker.dc.html` → `index.html` (or add an `index.html`
   that redirects to it). Spaces in filenames are fine but `index.html` is cleaner.
4. Settings → Pages → deploy from `main` branch root.

## 2. Create the shared storage (GitHub Gist)
The page reads/writes progress to a Gist file via the GitHub API.

1. As the mentor's GitHub account, create a **secret gist** at gist.github.com with
   one file `haya-progress.json` containing:
   ```json
   { "statuses": {}, "updatedAt": 0 }
   ```
2. Note the gist ID (the hash in its URL).
3. Create a **fine-grained or classic personal access token** with ONLY the `gist`
   scope: github.com/settings/tokens → "Generate new token (classic)" → check `gist`.
4. On BOTH devices (Haya's and the mentor's), open the deployed page →
   **إعدادات الحفظ** → paste the Gist ID and token → Save & connect.
   The config is stored in each device's localStorage; progress syncs through the gist.

## 3. How sync works (already implemented in the page)
- On load + every 60s + on "مزامنة الآن": GET the gist, newest `updatedAt` wins.
- On any task change: PATCH the gist after 1.5s debounce.
- Offline/power cut: changes stay in localStorage and push on next successful sync.

## Security note
The token only grants gist access, but it sits in localStorage on two trusted laptops
and must NOT be committed to the repo. Never hardcode it in index.html. If it leaks,
revoke it at github.com/settings/tokens and issue a new one.

## Optional hardening (if asked)
- Use two tokens (one per device) so either can be revoked independently.
- Or replace the gist with a tiny Cloudflare Worker + KV for a token-free URL.
