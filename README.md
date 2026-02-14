<div align="center">

# 🎬 Berlinale Ticket Buyer

**Automated ticket sniper for the Berlin International Film Festival**

Never miss a Berlinale screening again.

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

**English** | [中文](docs/README_zh.md) | [Fran&ccedil;ais](docs/README_fr.md) | [Deutsch](docs/README_de.md) | [Espa&ntilde;ol](docs/README_es.md) | [Portugu&ecirc;s](docs/README_pt.md) | [日本語](docs/README_ja.md) | [한국어](docs/README_ko.md)

</div>

---

## Why This Exists

Berlinale tickets go on sale **3 days before each screening at exactly 10:00 CET**. Popular films sell out in seconds. This tool:

1. **Monitors** the entire festival programme in real-time
2. **Schedules** ticket grabs to fire at the exact sale moment
3. **Automates** the Eventim checkout flow via browser automation
4. **Watches** sold-out screenings and auto-grabs when tickets return

No more alarm clocks. No more refreshing pages. Just pick your films and let it run.

---

## Features

- **Full Programme Browser** &mdash; Browse all 340+ films across 25 sections, search by title, filter by date
- **Real-time Ticket Status** &mdash; Live updates via WebSocket, see available / pending / sold-out at a glance
- **Precision Grab Scheduling** &mdash; Pre-heats the browser, opens the page 30s early, refreshes at the exact sale second
- **Sold-out Watching** &mdash; Polls every 5-15s, auto-triggers grab when tickets reappear (accredited returns, quota reallocation)
- **Persistent Browser Session** &mdash; Log into Eventim once, stays logged in across restarts
- **Sale Countdown Timers** &mdash; Live countdown to each screening's ticket sale time
- **Dark Theme UI** &mdash; Clean, responsive single-page app

<div align="center">

```
┌─────────────────────────────────────────────────────┐
│  Berlinale 2026                     [Login Eventim] │
├─────────────────────────────────────────────────────┤
│  Today On Sale │ All Films │ Feb 12 │ ... │ Feb 22  │
│  🔍 Search films by title...                        │
├─────────────────────────────────────────────────────┤
│  ● COMPETITION                                      │
│  ┌───────────────────────────────────────────────┐  │
│  │ Dust                              Dir: Blondé │  │
│  │ Sun Feb 15 · 21:30 · Berlinale Palast         │  │
│  │ [SOLD OUT]                          [Watch]   │  │
│  │ Mon Feb 16 · 18:45 · Music Hall               │  │
│  │ [AVAILABLE]            [Buy Now] [Schedule]   │  │
│  └───────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────┐  │
│  │ Rose                            Dir: Abbasi   │  │
│  │ Sale in 2h 15m 30s                            │  │
│  │ [PENDING]                       [Schedule]    │  │
│  └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

</div>

## Prerequisites

You need a free **[Eventim.de](https://www.eventim.de)** account to purchase tickets:

1. Go to [eventim.de/myAccount](https://www.eventim.de/myAccount) and create an account (or use an existing one)
2. Add your **payment method** (credit card / PayPal / SEPA) in your Eventim account settings
3. That's it &mdash; no Berlinale account needed, no API keys, no configuration files

> **Note:** This tool does NOT store your Eventim credentials. It opens a real browser window where you log in manually. Your session is saved locally in `data/browser_profile/` (git-ignored) and persists across restarts.

## Quick Start

```bash
# 1. Clone
git clone https://github.com/Rswcf/berlinale-ticket-buyer.git
cd berlinale-ticket-buyer

# 2. Install dependencies
pip install -r requirements.txt
playwright install chromium

# 3. Run
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Open **http://localhost:8000** &rarr; Click **Login Eventim** &rarr; Sign in with your Eventim account &rarr; Browse films &rarr; Click **Schedule Grab**.

> **macOS:** Double-click `Start Berlinale.command` in Finder for one-click launch.

## How It Works

```
  You pick films          App waits            10:00:00 CET
       │                     │                      │
       ▼                     ▼                      ▼
  ┌─────────┐         ┌───────────┐          ┌───────────┐
  │ Browse  │────────►│ Schedule  │─────────►│   GRAB!   │
  │ Films   │         │ & Preheat │          │ Add to    │
  └─────────┘         └───────────┘          │ Cart      │
       │                                     └─────┬─────┘
       │              ┌───────────┐                │
       └─────────────►│  Watch    │◄───────────────┘
        (sold out)    │  & Poll   │   (if failed,
                      └───────────┘    keep trying)
```

### Grab Flow (Browser Mode)

1. **T-60s** &mdash; Launch browser, load Eventim session
2. **T-30s** &mdash; Navigate to event page, dismiss cookie banner
3. **T-0s** &mdash; Refresh page, set quantity, click "Add to Cart"
4. **Retry** &mdash; Up to 3 attempts with 2s delay on failure

### Watch Flow (Sold-out Screenings)

1. Poll `/10am/10am_ticket_en.js` every 15s (5s in golden hour)
2. Detect `sold_out` &rarr; `available` transition
3. Extract new Eventim URL
4. Auto-trigger grab immediately

## Architecture

```
Frontend (Vanilla JS)        Backend (FastAPI)              External
┌──────────────┐    REST    ┌──────────────────┐    HTTP    ┌─────────────────┐
│ index.html   │◄──────────►│ main.py          │◄─────────►│ Berlinale API   │
│ app.js       │  WebSocket │ berlinale_api.py │           │ 344+ films      │
│ style.css    │◄──────────►│ scheduler.py     │           │ 1087 tickets    │
└──────────────┘            │ monitor.py       │           └─────────────────┘
                            │ grabber.py       │  Playwright  ┌──────────────┐
                            │ storage.py       │◄────────────►│ Eventim.de   │
                            └──────────────────┘   Browser    └──────────────┘
```

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/programme` | Full programme (all films, all days) |
| `GET` | `/api/programme/{day}` | Programme for a specific date |
| `GET` | `/api/today-on-sale` | Films on sale today |
| `GET` | `/api/ticket-status` | Real-time ticket status for all screenings |
| `GET` | `/api/tasks` | List all grab tasks |
| `POST` | `/api/tasks` | Create a grab/watch task |
| `DELETE` | `/api/tasks/{id}` | Cancel a task |
| `POST` | `/api/tasks/{id}/run` | Trigger immediate grab |
| `POST` | `/api/browser/login` | Open Eventim login page |
| `GET` | `/api/browser/status` | Check browser session |
| `WS` | `/ws/status` | Real-time updates (ticket status, task progress) |

## Configuration

All settings are in `app/config.py`:

| Setting | Default | Description |
|---------|---------|-------------|
| `SALE_ADVANCE_DAYS` | `3` | Days before screening that tickets go on sale |
| `SALE_TIME_HOUR` | `10` | Sale time (10:00 CET) |
| `GRAB_RETRY_COUNT` | `3` | Retry attempts per grab |
| `PRE_SALE_WARMUP` | `60` | Seconds before sale to start browser |
| `PRE_SALE_OPEN_PAGE` | `30` | Seconds before sale to open event page |
| `MONITOR_POLL_INTERVAL` | `15` | Seconds between ticket status polls |
| `MONITOR_FAST_POLL_INTERVAL` | `5` | Poll interval during golden hour |
| `MONITOR_GOLDEN_HOUR_MINUTES` | `60` | Minutes before screening = golden hour |

## Tech Stack

| Component | Technology |
|-----------|------------|
| Backend | Python 3.9+, FastAPI, uvicorn |
| Browser Automation | Playwright (persistent Chromium context) |
| Scheduling | APScheduler (async, Europe/Berlin timezone) |
| HTTP Client | httpx (async) |
| Data Models | Pydantic v2 |
| Frontend | Vanilla JS, CSS (dark theme) |
| Data Storage | JSON file-based |

## Tips for Best Results

- **Log into Eventim early** &mdash; The browser session persists, so log in once and keep the server running
- **Schedule grabs the night before** &mdash; Pick your films, set up tasks, go to sleep
- **Use Watch mode for sold-out films** &mdash; Tickets frequently return 30-60 min before screenings
- **Max 2 tickets per screening** &mdash; Eventim enforces this (5 for Generation section)
- **Keep the browser visible** &mdash; Runs in non-headless mode to avoid detection

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Browser won't start | Delete `data/browser_profile/SingletonLock` |
| "Not connected" status | Click "Login Eventim" and sign in |
| Grab fails immediately | Check if Eventim session expired, re-login |
| No films showing | Check your internet connection; Berlinale API may be down |
| Wrong sale times | Ensure system timezone is correct (uses Europe/Berlin) |

## Disclaimer

> **Important: Please read before use.**

This software is an **open-source, personal-use tool** designed to help individual film enthusiasts attend Berlinale screenings. It is provided strictly for **educational and personal purposes**.

**Terms of Service:** Automated interaction with third-party websites may violate their Terms of Service. In particular, [Eventim's Terms of Use](https://www.eventim.de/help/terms-of-use/) prohibit the use of "any robot, spider or other automated device" to access their platform. By using this tool, you acknowledge that:

- Your Eventim account may be **suspended or terminated**
- Tickets purchased through automation may be **cancelled**
- You assume **full responsibility** for any consequences arising from your use of this software

**Not for resale:** This tool is intended solely for purchasing tickets for personal attendance. It must **not** be used for ticket scalping, commercial resale, or any activity that violates the [EU Omnibus Directive (2019/2161)](https://eur-lex.europa.eu/eli/dir/2019/2161/oj) or applicable national laws prohibiting the resale of tickets acquired through automated means.

**No affiliation:** This project is **not affiliated with, endorsed by, or connected to** the Berlinale (Berlin International Film Festival), Kulturveranstaltungen des Bundes in Berlin GmbH (KBB), CTS Eventim AG & Co. KGaA, or any of their subsidiaries.

**No warranty:** This software is provided "as is", without warranty of any kind, express or implied. The authors and contributors assume **no liability** for any damages, losses, account actions, or legal consequences resulting from the use of this software. See [LICENSE](LICENSE) for full terms.

**Your responsibility:** By downloading, installing, or using this software, you agree that you are solely responsible for ensuring your use complies with all applicable laws and third-party terms of service in your jurisdiction. When in doubt, purchase tickets manually through the official Berlinale/Eventim channels.

For detailed legal information, see [LEGAL.md](LEGAL.md).

## License

[MIT](LICENSE)

---

<div align="center">

**If this tool helped you get Berlinale tickets, consider giving it a star!**

Made with late nights and love for cinema.

</div>
