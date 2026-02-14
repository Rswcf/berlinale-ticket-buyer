<div align="center">

# 🎬 Berlinale Ticket Buyer

**Outil d'achat automatique de billets pour le Festival International du Film de Berlin**

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](../LICENSE)

[English](../README.md) | [中文](README_zh.md) | **Français** | [Deutsch](README_de.md) | [Español](README_es.md) | [Português](README_pt.md) | [日本語](README_ja.md) | [한국어](README_ko.md)

</div>

---

Les billets de la Berlinale sont mis en vente **3 jours avant chaque projection &agrave; 10h00 CET**. Les films populaires sont &eacute;puis&eacute;s en quelques secondes. Cet outil :

- **Parcourir le programme complet** &mdash; 340+ films dans 25 sections, recherche par titre, filtre par date
- **Statut des billets en temps r&eacute;el** &mdash; Mises &agrave; jour via WebSocket : disponible / en attente / &eacute;puis&eacute;
- **Achat programm&eacute; avec pr&eacute;cision** &mdash; Pr&eacute;chauffe le navigateur, ouvre la page 30s avant, rafra&icirc;chit &agrave; la seconde exacte
- **Surveillance des &eacute;puis&eacute;s** &mdash; Sondage toutes les 5-15s, achat automatique d&egrave;s qu'un billet redevient disponible
- **Session persistante** &mdash; Connectez-vous &agrave; Eventim une seule fois

## D&eacute;marrage rapide

```bash
git clone https://github.com/Rswcf/berlinale-ticket-buyer.git
cd berlinale-ticket-buyer
pip install -r requirements.txt
playwright install chromium
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Ouvrez **http://localhost:8000** &rarr; Cliquez sur **Login Eventim** &rarr; Connectez-vous &rarr; Parcourez les films &rarr; Cliquez sur **Schedule Grab**.

## Conseils

- Connectez-vous &agrave; Eventim la veille et programmez vos t&acirc;ches
- Utilisez le mode Watch pour les films complets &mdash; des billets reviennent souvent 30-60 min avant la projection
- Maximum 2 billets par projection (5 pour la section Generation)

## Avis de non-responsabilit&eacute;

> **Important : veuillez lire avant utilisation.**

Ce logiciel est un **outil open-source &agrave; usage personnel** con&ccedil;u pour aider les cin&eacute;philes &agrave; obtenir des places pour les projections de la Berlinale. Il est fourni strictement &agrave; des fins **&eacute;ducatives et personnelles**.

**Conditions d'utilisation :** L'interaction automatis&eacute;e avec des sites tiers peut enfreindre leurs conditions d'utilisation. En particulier, les CGU d'Eventim interdisent l'utilisation de &laquo; tout robot, spider ou autre dispositif automatis&eacute; &raquo;. En utilisant cet outil, vous reconnaissez que :

- Votre compte Eventim peut &ecirc;tre **suspendu ou r&eacute;sili&eacute;**
- Les billets achet&eacute;s par automatisation peuvent &ecirc;tre **annul&eacute;s**
- Vous assumez l'**enti&egrave;re responsabilit&eacute;** de toute cons&eacute;quence li&eacute;e &agrave; l'utilisation de ce logiciel

**Pas de revente :** Cet outil est destin&eacute; exclusivement &agrave; l'achat de billets pour une fr&eacute;quentation personnelle. Il ne doit **pas** &ecirc;tre utilis&eacute; pour la revente sp&eacute;culative, la revente commerciale ou toute activit&eacute; contraire &agrave; la [Directive Omnibus europ&eacute;enne (2019/2161)](https://eur-lex.europa.eu/eli/dir/2019/2161/oj) ou aux lois nationales applicables.

**Aucune affiliation :** Ce projet n'est **ni affili&eacute; &agrave;, ni approuv&eacute; par, ni li&eacute; &agrave;** la Berlinale, KBB, CTS Eventim AG, ou l'une de leurs filiales.

**Aucune garantie :** Ce logiciel est fourni &laquo; en l'&eacute;tat &raquo;, sans garantie d'aucune sorte. Les auteurs d&eacute;clinent **toute responsabilit&eacute;** quant aux dommages, pertes ou cons&eacute;quences juridiques r&eacute;sultant de son utilisation.

**Votre responsabilit&eacute; :** En t&eacute;l&eacute;chargeant ou utilisant ce logiciel, vous acceptez d'assurer vous-m&ecirc;me la conformit&eacute; de votre utilisation avec toutes les lois et conditions de service applicables. En cas de doute, achetez vos billets manuellement via les canaux officiels.

Pour plus d'informations juridiques, consultez [LEGAL.md](../LEGAL.md).

## Licence

[MIT](../LICENSE)
