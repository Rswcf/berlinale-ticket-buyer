<div align="center">

# 🎬 Berlinale Ticket Buyer

**Automatisches Ticket-Tool f&uuml;r die Internationalen Filmfestspiele Berlin**

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](../LICENSE)

[English](../README.md) | [中文](README_zh.md) | [Français](README_fr.md) | **Deutsch** | [Español](README_es.md) | [Português](README_pt.md) | [日本語](README_ja.md) | [한국어](README_ko.md)

</div>

---

Berlinale-Tickets gehen **3 Tage vor der Vorstellung um 10:00 Uhr MEZ** in den Verkauf. Beliebte Filme sind in Sekunden ausverkauft. Dieses Tool:

- **Gesamtes Programm durchsuchen** &mdash; 340+ Filme in 25 Sektionen, Titelsuche, Datumsfilter
- **Echtzeit-Ticketstatus** &mdash; Live-Updates via WebSocket: verf&uuml;gbar / ausstehend / ausverkauft
- **Pr&auml;ziser Ticketkauf** &mdash; Browser wird vorgeheizt, Seite 30s vorher ge&ouml;ffnet, exakter Refresh zur Verkaufszeit
- **Ausverkauft-&Uuml;berwachung** &mdash; Abfrage alle 5-15s, automatischer Kauf bei R&uuml;ckgaben
- **Persistente Sitzung** &mdash; Einmal bei Eventim anmelden, bleibt &uuml;ber Neustarts erhalten

## Schnellstart

```bash
git clone https://github.com/Rswcf/berlinale-ticket-buyer.git
cd berlinale-ticket-buyer
pip install -r requirements.txt
playwright install chromium
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

&Ouml;ffnen Sie **http://localhost:8000** &rarr; Klicken Sie auf **Login Eventim** &rarr; Anmelden &rarr; Filme durchsuchen &rarr; **Schedule Grab** klicken.

## Tipps

- Melden Sie sich abends vorher bei Eventim an und richten Sie Aufgaben ein
- Nutzen Sie den Watch-Modus f&uuml;r ausverkaufte Filme &mdash; 30-60 Min. vor Vorstellungsbeginn werden oft Tickets zur&uuml;ckgegeben
- Maximal 2 Tickets pro Vorstellung (5 f&uuml;r die Sektion Generation)

## Haftungsausschluss

> **Wichtig: Bitte vor der Nutzung lesen.**

Diese Software ist ein **quelloffenes Tool f&uuml;r den pers&ouml;nlichen Gebrauch**, das Filmbegeisterten helfen soll, Tickets f&uuml;r Berlinale-Vorstellungen zu erwerben. Sie wird ausschlie&szlig;lich zu **Bildungs- und privaten Zwecken** bereitgestellt.

**Nutzungsbedingungen:** Die automatisierte Interaktion mit Drittanbieter-Webseiten kann deren Nutzungsbedingungen verletzen. Insbesondere untersagen die AGB von Eventim die Nutzung von &laquo;Robots, Spidern oder anderen automatisierten Verfahren&raquo; f&uuml;r den Zugriff auf ihre Plattform. Mit der Nutzung dieses Tools erkennen Sie an, dass:

- Ihr Eventim-Konto **gesperrt oder gek&uuml;ndigt** werden kann
- Durch Automatisierung erworbene Tickets **storniert** werden k&ouml;nnen
- Sie die **volle Verantwortung** f&uuml;r alle Folgen der Nutzung &uuml;bernehmen

**Kein Weiterverkauf:** Dieses Tool dient ausschlie&szlig;lich dem Erwerb von Tickets zum pers&ouml;nlichen Besuch. Es darf **nicht** f&uuml;r Ticket-Scalping, gewerblichen Weiterverkauf oder Aktivit&auml;ten verwendet werden, die gegen die [EU-Omnibus-Richtlinie (2019/2161)](https://eur-lex.europa.eu/eli/dir/2019/2161/oj), das Gesetz gegen den unlauteren Wettbewerb (UWG) oder sonstige geltende Gesetze versto&szlig;en.

**Keine Verbindung:** Dieses Projekt steht in **keiner Verbindung zu** den Internationalen Filmfestspielen Berlin (Berlinale), der Kulturveranstaltungen des Bundes in Berlin GmbH (KBB), der CTS Eventim AG & Co. KGaA oder deren Tochtergesellschaften und wird von diesen **weder unterst&uuml;tzt noch genehmigt**.

**Keine Gew&auml;hrleistung:** Diese Software wird &laquo;wie besehen&raquo; (as is) ohne jegliche ausdr&uuml;ckliche oder stillschweigende Gew&auml;hrleistung bereitgestellt. Die Autoren &uuml;bernehmen **keinerlei Haftung** f&uuml;r Sch&auml;den, Verluste, Kontoma&szlig;nahmen oder rechtliche Konsequenzen, die aus der Nutzung dieser Software entstehen.

**Ihre Verantwortung:** Mit dem Herunterladen, Installieren oder Verwenden dieser Software erkl&auml;ren Sie sich damit einverstanden, dass Sie selbst f&uuml;r die Einhaltung aller geltenden Gesetze und Nutzungsbedingungen Dritter in Ihrem Rechtsgebiet verantwortlich sind. Im Zweifelsfall erwerben Sie Ihre Tickets manuell &uuml;ber die offiziellen Berlinale/Eventim-Kan&auml;le.

Ausf&uuml;hrliche rechtliche Informationen finden Sie in [LEGAL.md](../LEGAL.md).

## Lizenz

[MIT](../LICENSE)
