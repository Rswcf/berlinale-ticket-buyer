<div align="center">

# 🎬 Berlinale Ticket Buyer

**Herramienta automatizada de compra de entradas para el Festival Internacional de Cine de Berl&iacute;n**

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](../LICENSE)

[English](../README.md) | [中文](README_zh.md) | [Français](README_fr.md) | [Deutsch](README_de.md) | **Español** | [Português](README_pt.md) | [日本語](README_ja.md) | [한국어](README_ko.md)

</div>

---

Las entradas de la Berlinale salen a la venta **3 d&iacute;as antes de cada proyecci&oacute;n a las 10:00 CET**. Las pel&iacute;culas populares se agotan en segundos. Esta herramienta:

- **Explorar el programa completo** &mdash; 340+ pel&iacute;culas en 25 secciones, b&uacute;squeda por t&iacute;tulo, filtro por fecha
- **Estado de entradas en tiempo real** &mdash; Actualizaciones via WebSocket: disponible / pendiente / agotado
- **Compra programada con precisi&oacute;n** &mdash; Precalienta el navegador, abre la p&aacute;gina 30s antes, refresca en el segundo exacto
- **Vigilancia de agotados** &mdash; Consulta cada 5-15s, compra autom&aacute;tica cuando vuelven entradas
- **Sesi&oacute;n persistente** &mdash; Inicia sesi&oacute;n en Eventim una sola vez

## Inicio r&aacute;pido

```bash
git clone https://github.com/Rswcf/berlinale-ticket-buyer.git
cd berlinale-ticket-buyer
pip install -r requirements.txt
playwright install chromium
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Abra **http://localhost:8000** &rarr; Haga clic en **Login Eventim** &rarr; Inicie sesi&oacute;n &rarr; Explore pel&iacute;culas &rarr; Haga clic en **Schedule Grab**.

## Consejos

- Inicie sesi&oacute;n en Eventim la noche anterior y programe sus tareas
- Use el modo Watch para pel&iacute;culas agotadas &mdash; suelen aparecer entradas 30-60 min antes de la proyecci&oacute;n
- M&aacute;ximo 2 entradas por proyecci&oacute;n (5 para la secci&oacute;n Generation)

## Aviso legal

> **Importante: lea antes de usar.**

Este software es una **herramienta de c&oacute;digo abierto para uso personal** dise&ntilde;ada para ayudar a los cin&eacute;filos a adquirir entradas para las proyecciones de la Berlinale. Se proporciona estrictamente con fines **educativos y personales**.

**T&eacute;rminos de servicio:** La interacci&oacute;n automatizada con sitios web de terceros puede violar sus condiciones de uso. En particular, los t&eacute;rminos de Eventim proh&iacute;ben el uso de &laquo;cualquier robot, spider u otro dispositivo automatizado&raquo;. Al utilizar esta herramienta, usted reconoce que:

- Su cuenta de Eventim puede ser **suspendida o cancelada**
- Las entradas adquiridas mediante automatizaci&oacute;n pueden ser **anuladas**
- Usted asume la **total responsabilidad** por cualquier consecuencia derivada del uso de este software

**Prohibida la reventa:** Esta herramienta est&aacute; destinada exclusivamente a la compra de entradas para asistencia personal. **No debe** utilizarse para la reventa especulativa, reventa comercial ni ninguna actividad que infrinja la [Directiva &Oacute;mnibus de la UE (2019/2161)](https://eur-lex.europa.eu/eli/dir/2019/2161/oj) o la legislaci&oacute;n nacional aplicable.

**Sin afiliaci&oacute;n:** Este proyecto **no est&aacute; afiliado, respaldado ni vinculado** a la Berlinale, KBB, CTS Eventim AG ni a ninguna de sus filiales.

**Sin garant&iacute;a:** Este software se proporciona &laquo;tal cual&raquo;, sin garant&iacute;a de ning&uacute;n tipo. Los autores **no asumen responsabilidad alguna** por da&ntilde;os, p&eacute;rdidas o consecuencias legales derivadas de su uso.

**Su responsabilidad:** Al descargar o utilizar este software, usted acepta que es el &uacute;nico responsable de garantizar el cumplimiento de todas las leyes y condiciones de servicio aplicables en su jurisdicci&oacute;n. En caso de duda, adquiera sus entradas manualmente a trav&eacute;s de los canales oficiales.

Para informaci&oacute;n legal detallada, consulte [LEGAL.md](../LEGAL.md).

## Licencia

[MIT](../LICENSE)
