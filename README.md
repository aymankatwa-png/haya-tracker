# Haya Training Tracker

A single-page Arabic training tracker used by two people from different devices:
**Haya** (trainee) marks tasks done → they appear as *pending*; the **mentor** approves them.
Progress syncs between devices through a shared secret GitHub Gist.

## Live page

https://aymankatwa-png.github.io/haya-tracker/

## Setup (once per device)

1. Open the live page.
2. Go to **إعدادات الحفظ**.
3. Paste the shared **Gist ID** and a **personal access token with only the `gist` scope**.
4. Save & connect.

Both the Gist ID and the token are stored in that device's `localStorage` only. They are
never committed to this repo. See [DEPLOY.md](DEPLOY.md) for how to create the gist and token.

## How sync works

- On load, every 60s, and on **مزامنة الآن**: `GET` the gist — the newest `updatedAt` wins.
- On any task change: `PATCH` the gist after a 1.5s debounce.
- Offline: changes stay in `localStorage` and push on the next successful sync.

## Layout

| Path | What it is |
| --- | --- |
| `index.html` | The whole app (declarative-component template + logic) |
| `support.js` | Generated runtime that renders the template — do not edit by hand |
| `assets/` | Logos and avatar |
| `_ds/` | Moomken design system: tokens, styles, fonts |

## Security

The token grants gist access only, but treat it as a secret: it must never be committed or
pasted anywhere public. If it leaks, revoke it at
[github.com/settings/tokens](https://github.com/settings/tokens) and issue a new one.

## Fonts

`_ds/assets/fonts/` contains Gotham and Dahab Arabic ITF, which are commercially licensed.
They are included here for the Moomken team's own use — do not redistribute them separately.
