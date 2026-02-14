<div align="center">

# 🎬 Berlinale Ticket Buyer

**베를린 국제영화제 자동 티켓 구매 도구**

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](../LICENSE)

[English](../README.md) | [中文](README_zh.md) | [Français](README_fr.md) | [Deutsch](README_de.md) | [Español](README_es.md) | [Português](README_pt.md) | [日本語](README_ja.md) | **한국어**

</div>

---

베를리날레 티켓은 **상영 3일 전 중앙유럽시간 10:00에 판매 시작**됩니다. 인기 영화는 몇 초 만에 매진됩니다. 이 도구는:

- **전체 프로그램 탐색** &mdash; 25개 섹션, 340편 이상의 영화를 제목 검색 및 날짜 필터로 탐색
- **실시간 티켓 상태** &mdash; WebSocket을 통한 실시간 업데이트: 구매 가능 / 대기 중 / 매진
- **정밀한 구매 스케줄링** &mdash; 브라우저 사전 준비, 30초 전 페이지 오픈, 판매 시작 정각에 새로고침
- **매진 모니터링** &mdash; 5-15초 간격 폴링, 티켓 반환 즉시 자동 구매
- **영구 세션** &mdash; Eventim 한 번 로그인으로 재시작 후에도 유지

## 빠른 시작

```bash
git clone https://github.com/Rswcf/berlinale-ticket-buyer.git
cd berlinale-ticket-buyer
pip install -r requirements.txt
playwright install chromium
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

**http://localhost:8000** 열기 &rarr; **Login Eventim** 클릭 &rarr; 로그인 &rarr; 영화 탐색 &rarr; **Schedule Grab** 클릭.

## 팁

- 전날 밤에 Eventim에 로그인하고 작업을 설정하세요
- 매진된 영화에는 Watch 모드를 사용하세요 &mdash; 상영 30-60분 전에 티켓이 자주 반환됩니다
- 상영당 최대 2매 구매 가능 (Generation 섹션은 5매)

## 면책 조항

> **중요: 사용 전 반드시 읽어주세요.**

본 소프트웨어는 영화 애호가들이 베를리날레 상영 티켓을 구매할 수 있도록 돕는 **오픈소스 개인 사용 도구**입니다. **교육 및 개인적 목적**으로만 제공됩니다.

**이용약관:** 제3자 웹사이트에 대한 자동화된 상호작용은 해당 사이트의 이용약관을 위반할 수 있습니다. 특히 Eventim의 이용약관은 "로봇, 스파이더 또는 기타 자동화된 장치"의 사용을 명시적으로 금지하고 있습니다. 본 도구를 사용함으로써 다음 사항을 인정하는 것입니다:

- Eventim 계정이 **정지 또는 해지**될 수 있습니다
- 자동화를 통해 구매한 티켓이 **취소**될 수 있습니다
- 본 소프트웨어 사용으로 인한 모든 결과에 대해 **전적으로 책임**을 집니다

**전매 금지:** 본 도구는 개인 관람을 위한 티켓 구매만을 목적으로 합니다. 암표 매매, 상업적 재판매 또는 [EU 옴니버스 지침(2019/2161)](https://eur-lex.europa.eu/eli/dir/2019/2161/oj)이나 해당 국내법을 위반하는 활동에 사용해서는 **안 됩니다**.

**무관계 선언:** 본 프로젝트는 베를린 국제영화제(Berlinale), 연방문화행사유한회사(KBB), CTS Eventim AG 또는 그 자회사와 **어떠한 제휴, 보증, 연관 관계도 없습니다**.

**무보증:** 본 소프트웨어는 어떠한 종류의 보증 없이 "있는 그대로" 제공됩니다. 저자와 기여자는 본 소프트웨어 사용으로 인한 손해, 손실, 계정 조치 또는 법적 결과에 대해 **어떠한 책임도 지지 않습니다**.

**사용자 책임:** 본 소프트웨어를 다운로드, 설치 또는 사용함으로써, 귀하의 관할권에서 적용되는 모든 법률 및 제3자 이용약관의 준수는 전적으로 귀하의 책임임에 동의하는 것입니다. 확실하지 않은 경우 공식 Berlinale/Eventim 채널을 통해 수동으로 티켓을 구매하세요.

자세한 법적 정보는 [LEGAL.md](../LEGAL.md)를 참조하세요.

## 라이선스

[MIT](../LICENSE)
