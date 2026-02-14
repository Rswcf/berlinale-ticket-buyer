<div align="center">

# 🎬 Berlinale Ticket Buyer

**ベルリン国際映画祭の自動チケット購入ツール**

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](../LICENSE)

[English](../README.md) | [中文](README_zh.md) | [Français](README_fr.md) | [Deutsch](README_de.md) | [Español](README_es.md) | [Português](README_pt.md) | **日本語** | [한국어](README_ko.md)

</div>

---

ベルリナーレのチケットは**上映3日前の中央ヨーロッパ時間10:00に発売**されます。人気作品は数秒で売り切れます。このツールは：

- **全プログラム閲覧** &mdash; 25セクション、340作品以上をタイトル検索・日付フィルター付きで閲覧
- **リアルタイムチケット状況** &mdash; WebSocket経由のライブ更新：購入可能 / 発売前 / 売り切れ
- **精密な購入スケジューリング** &mdash; ブラウザを事前起動、30秒前にページを開き、発売の瞬間にリフレッシュ
- **売り切れ監視** &mdash; 5-15秒ごとにポーリング、チケットが戻った瞬間に自動購入
- **永続セッション** &mdash; Eventimに一度ログインすれば再起動後も有効

## クイックスタート

```bash
git clone https://github.com/Rswcf/berlinale-ticket-buyer.git
cd berlinale-ticket-buyer
pip install -r requirements.txt
playwright install chromium
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000
```

**http://localhost:8000** を開く &rarr; **Login Eventim** をクリック &rarr; ログイン &rarr; 映画を閲覧 &rarr; **Schedule Grab** をクリック。

## ヒント

- 前日の夜にEventimにログインしてタスクを設定
- 売り切れの映画にはWatchモードを使用 &mdash; 上映30-60分前にチケットが戻ることが多い
- 1上映につき最大2枚（Generationセクションは5枚）

## 免責事項

> **重要：ご使用前にお読みください。**

本ソフトウェアは、映画ファンがベルリナーレの上映チケットを入手するための**オープンソースの個人利用ツール**です。**教育および個人的な目的**に限り提供されています。

**利用規約について：** サードパーティのウェブサイトへの自動アクセスは、当該サイトの利用規約に違反する可能性があります。特に、Eventimの利用規約は「ロボット、スパイダー、その他の自動化デバイス」の使用を明示的に禁止しています。本ツールを使用することにより、以下を了承するものとします：

- Eventimアカウントが**停止または解約**される可能性があること
- 自動化により購入したチケットが**キャンセル**される可能性があること
- 本ソフトウェアの使用から生じるすべての結果について**全責任を負う**こと

**転売禁止：** 本ツールは個人観覧用のチケット購入のみを目的としています。チケットの転売、商業的再販、または[EU包括指令（2019/2161）](https://eur-lex.europa.eu/eli/dir/2019/2161/oj)もしくは適用される国内法に違反する行為には**使用できません**。

**無関係声明：** 本プロジェクトは、ベルリン国際映画祭（Berlinale）、連邦文化事業有限会社（KBB）、CTS Eventim AG、またはそれらの関連会社とは**一切関係がなく、承認も提携もされていません**。

**無保証：** 本ソフトウェアは「現状のまま」提供され、いかなる種類の保証も伴いません。作者および貢献者は、本ソフトウェアの使用に起因する損害、損失、アカウント措置、または法的結果について**一切の責任を負いません**。

**ご自身の責任：** 本ソフトウェアをダウンロード、インストール、または使用することにより、お住まいの法域における適用法令およびサードパーティの利用規約の遵守はすべてご自身の責任であることに同意するものとします。ご不明な点がある場合は、Berlinale/Eventimの公式チャネルから手動でチケットをご購入ください。

詳細な法的情報については [LEGAL.md](../LEGAL.md) をご覧ください。

## ライセンス

[MIT](../LICENSE)
