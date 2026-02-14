<div align="center">

# 🎬 Berlinale Ticket Buyer

**Ferramenta automatizada de compra de ingressos para o Festival Internacional de Cinema de Berlim**

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](../LICENSE)

[English](../README.md) | [中文](README_zh.md) | [Français](README_fr.md) | [Deutsch](README_de.md) | [Español](README_es.md) | **Português** | [日本語](README_ja.md) | [한국어](README_ko.md)

</div>

---

Os ingressos da Berlinale entram &agrave; venda **3 dias antes de cada exibi&ccedil;&atilde;o &agrave;s 10:00 CET**. Filmes populares esgotam em segundos. Esta ferramenta:

- **Navegar pelo programa completo** &mdash; 340+ filmes em 25 se&ccedil;&otilde;es, busca por t&iacute;tulo, filtro por data
- **Status dos ingressos em tempo real** &mdash; Atualiza&ccedil;&otilde;es via WebSocket: dispon&iacute;vel / pendente / esgotado
- **Compra agendada com precis&atilde;o** &mdash; Pr&eacute;-aquece o navegador, abre a p&aacute;gina 30s antes, atualiza no segundo exato
- **Monitoramento de esgotados** &mdash; Consulta a cada 5-15s, compra autom&aacute;tica quando ingressos retornam
- **Sess&atilde;o persistente** &mdash; Fa&ccedil;a login no Eventim uma &uacute;nica vez

## In&iacute;cio r&aacute;pido

```bash
git clone https://github.com/Rswcf/berlinale-ticket-buyer.git
cd berlinale-ticket-buyer
pip install -r requirements.txt
playwright install chromium
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Abra **http://localhost:8000** &rarr; Clique em **Login Eventim** &rarr; Fa&ccedil;a login &rarr; Navegue pelos filmes &rarr; Clique em **Schedule Grab**.

## Dicas

- Fa&ccedil;a login no Eventim na noite anterior e programe suas tarefas
- Use o modo Watch para filmes esgotados &mdash; ingressos frequentemente retornam 30-60 min antes da exibi&ccedil;&atilde;o
- M&aacute;ximo de 2 ingressos por exibi&ccedil;&atilde;o (5 para a se&ccedil;&atilde;o Generation)

## Aviso legal

> **Importante: leia antes de usar.**

Este software &eacute; uma **ferramenta de c&oacute;digo aberto para uso pessoal** projetada para ajudar cin&eacute;filos a adquirir ingressos para as sess&otilde;es da Berlinale. &Eacute; fornecido estritamente para fins **educacionais e pessoais**.

**Termos de servi&ccedil;o:** A intera&ccedil;&atilde;o automatizada com sites de terceiros pode violar seus termos de uso. Em particular, os termos do Eventim pro&iacute;bem o uso de &laquo;qualquer rob&ocirc;, spider ou outro dispositivo automatizado&raquo;. Ao utilizar esta ferramenta, voc&ecirc; reconhece que:

- Sua conta no Eventim pode ser **suspensa ou encerrada**
- Ingressos adquiridos por automa&ccedil;&atilde;o podem ser **cancelados**
- Voc&ecirc; assume **total responsabilidade** por quaisquer consequ&ecirc;ncias do uso deste software

**Proibida a revenda:** Esta ferramenta destina-se exclusivamente &agrave; compra de ingressos para frequ&ecirc;ncia pessoal. **N&atilde;o deve** ser utilizada para cambismo, revenda comercial ou qualquer atividade que viole a [Diretiva Omnibus da UE (2019/2161)](https://eur-lex.europa.eu/eli/dir/2019/2161/oj) ou a legisla&ccedil;&atilde;o nacional aplic&aacute;vel.

**Sem afilia&ccedil;&atilde;o:** Este projeto **n&atilde;o &eacute; afiliado, endossado ou vinculado** &agrave; Berlinale, KBB, CTS Eventim AG ou qualquer de suas subsidi&aacute;rias.

**Sem garantia:** Este software &eacute; fornecido &laquo;no estado em que se encontra&raquo;, sem garantia de qualquer tipo. Os autores **n&atilde;o assumem responsabilidade** por danos, perdas ou consequ&ecirc;ncias legais decorrentes de seu uso.

**Sua responsabilidade:** Ao baixar ou utilizar este software, voc&ecirc; concorda que &eacute; o &uacute;nico respons&aacute;vel por garantir a conformidade com todas as leis e termos de servi&ccedil;o aplic&aacute;veis em sua jurisdi&ccedil;&atilde;o. Em caso de d&uacute;vida, adquira seus ingressos manualmente pelos canais oficiais.

Para informa&ccedil;&otilde;es legais detalhadas, consulte [LEGAL.md](../LEGAL.md).

## Licen&ccedil;a

[MIT](../LICENSE)
