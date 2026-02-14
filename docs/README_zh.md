<div align="center">

# 🎬 Berlinale 抢票器

**柏林国际电影节自动抢票工具**

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](../LICENSE)

[English](../README.md) | **中文** | [Français](README_fr.md) | [Deutsch](README_de.md) | [Español](README_es.md) | [Português](README_pt.md) | [日本語](README_ja.md) | [한국어](README_ko.md)

</div>

---

柏林电影节的票在放映前3天的上午10:00（柏林时间）准时开售，热门电影几秒内售罄。本工具：

- **浏览全部节目** &mdash; 340+ 部电影，25 个板块，支持搜索和按日期筛选
- **实时票态监控** &mdash; WebSocket 推送，一目了然：可购 / 待售 / 售罄
- **精准定时抢票** &mdash; 提前预热浏览器，精确到秒发起购票
- **售罄监控** &mdash; 每 5-15 秒轮询，退票瞬间自动抢
- **持久会话** &mdash; Eventim 登录一次，重启不丢失

## 快速开始

```bash
git clone https://github.com/Rswcf/berlinale-ticket-buyer.git
cd berlinale-ticket-buyer
pip install -r requirements.txt
playwright install chromium
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

打开 **http://localhost:8000** &rarr; 点击 **Login Eventim** 登录 &rarr; 浏览电影 &rarr; 点击 **Schedule Grab** 设置抢票任务。

## 使用技巧

- 提前一晚登录 Eventim 并设置好任务
- 售罄的电影用 Watch 模式，开场前 30-60 分钟经常有退票
- 每场最多购买 2 张票（Generation 板块最多 5 张）

## 免责声明

> **重要提示：使用前请仔细阅读。**

本软件是一款**开源的个人用途工具**，旨在帮助影迷购买柏林电影节的放映票。仅供**教育和个人目的**使用。

**服务条款：** 自动化访问第三方网站可能违反其服务条款。特别是，Eventim 的使用条款明确禁止使用"任何机器人、爬虫或其他自动化设备"访问其平台。使用本工具即表示您确认：

- 您的 Eventim 账户可能会被**暂停或终止**
- 通过自动化购买的门票可能会被**取消**
- 您**自行承担**使用本软件所产生的一切后果

**禁止转售：** 本工具仅用于购买个人观影门票，**不得**用于黄牛倒票、商业转售或任何违反欧盟《综合指令》(2019/2161) 及相关法律的行为。

**无关联声明：** 本项目与柏林国际电影节（Berlinale）、联邦文化活动有限公司（KBB）、CTS Eventim AG 及其子公司**没有任何关联、背书或合作关系**。

**免责条款：** 本软件按"原样"提供，不附带任何明示或暗示的保证。作者和贡献者对因使用本软件而导致的任何损害、损失、账户处罚或法律后果**不承担任何责任**。

**您的责任：** 下载、安装或使用本软件，即表示您同意自行确保您的使用符合您所在司法管辖区的所有适用法律及第三方服务条款。如有疑问，请通过柏林电影节/Eventim 官方渠道手动购票。

详细法律信息请参阅 [LEGAL.md](../LEGAL.md)。

## 许可证

[MIT](../LICENSE)
