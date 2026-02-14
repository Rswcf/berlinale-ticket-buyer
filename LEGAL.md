# Legal Notice

**Berlinale Ticket Buyer -- Legal Information and User Responsibilities**

*Last updated: February 2026*

---

## 1. Purpose and Scope

Berlinale Ticket Buyer is an open-source software tool that automates the process of purchasing tickets for the Berlin International Film Festival (Berlinale) through the Eventim ticketing platform. It is designed as a **personal cinema companion** for individual film enthusiasts who wish to attend festival screenings.

This tool is distributed as source code under the MIT License for **educational, research, and personal use**. It is not a commercial product, and no fees are charged for its use.

This document outlines the legal context, risks, and responsibilities associated with using this software. **It does not constitute legal advice.** If you have specific legal concerns, consult a qualified attorney in your jurisdiction.

---

## 2. Third-Party Terms of Service

### 2.1 CTS Eventim AG & Co. KGaA

Eventim is the official ticketing partner for the Berlinale. Their [Terms of Use](https://www.eventim.de/help/terms-of-use/) contain provisions relevant to automated access:

> Eventim's terms prohibit the use of "any robot, spider or other automated device, process or means to access the Website for any purpose, including monitoring or copying any of the material on the Website."

**Risk assessment:** Use of this software to interact with the Eventim platform likely constitutes a violation of these terms. Potential consequences include:

- Temporary or permanent suspension of your Eventim account
- Cancellation of tickets purchased through automated means
- Blocking of your IP address or browser fingerprint
- Forfeiture of any payments made for cancelled tickets

Eventim may enforce these provisions at their sole discretion and without prior notice.

### 2.2 Berlinale / Kulturveranstaltungen des Bundes in Berlin GmbH (KBB)

KBB operates the Berlinale festival. Their ticketing terms stipulate that tickets are **"exclusively for personal use"** and may not be resold. While KBB's terms do not contain explicit anti-automation provisions, the following applies:

- Tickets are issued for personal attendance only
- KBB reserves the right to cancel tickets obtained in violation of their terms
- Bulk purchasing or purchasing for commercial resale is prohibited
- KBB may cooperate with Eventim to enforce ticketing policies

This tool is designed to respect the personal-use nature of Berlinale tickets by enforcing a maximum of 2 tickets per screening (the same limit applied by Eventim).

---

## 3. Applicable Law

### 3.1 EU Omnibus Directive (Directive 2019/2161)

The [EU Omnibus Directive](https://eur-lex.europa.eu/eli/dir/2019/2161/oj), which amends the Unfair Commercial Practices Directive (2005/29/EC), specifically addresses automated ticket purchasing. Article 3(4) adds to the list of unfair commercial practices:

> "Reselling event tickets to consumers if the trader acquired them by using automated means to circumvent any limit imposed on the number of tickets that a person can buy or any other rules applicable to the purchase of tickets."

**Key distinction:** This provision targets **traders** (commercial resellers) who use bots to **circumvent purchase limits** for the purpose of **resale**. It does not target individuals purchasing tickets for personal attendance within established purchase limits.

This tool respects the Eventim-imposed limit of 2 tickets per screening and is designed for personal use, not resale. However, users should be aware that the line between personal use and commercial activity may be interpreted differently across EU member states.

### 3.2 German Unfair Competition Law (Gesetz gegen den unlauteren Wettbewerb -- UWG)

The German UWG prohibits unfair commercial practices, including:

- **Section 3 (Prohibition of unfair commercial practices):** Applies to business-to-consumer and business-to-business contexts
- **Section 4a (Aggressive commercial practices):** May apply if automation is used to gain an unfair advantage in a commercial context

**Relevance:** The UWG primarily applies to commercial actors ("Unternehmer") engaged in business activities. Personal, non-commercial use of ticket automation tools falls outside the typical scope of UWG enforcement. However, if use of this tool were characterized as a commercial or competitive activity, UWG provisions could become relevant.

### 3.3 German Criminal Law (Strafgesetzbuch -- StGB)

Two provisions of the German Criminal Code are sometimes discussed in the context of web automation:

- **Section 263a StGB (Computer fraud / Computerbetrug):** Prohibits influencing the result of a data processing operation through unauthorized use of data, with the intent to obtain an unlawful pecuniary advantage. Purchasing tickets at face value for personal attendance does not involve an "unlawful pecuniary advantage" and is a poor fit for this provision.

- **Section 202a StGB (Data espionage / Ausspähen von Daten):** Prohibits unauthorized access to data that is specially secured against unauthorized access. Publicly accessible websites that can be accessed via a standard web browser are generally not considered "specially secured" within the meaning of this provision.

**Assessment:** There is no known precedent of criminal prosecution in Germany for the personal-use automation of ticket purchases on publicly accessible websites. However, the legal landscape may evolve, and this assessment does not guarantee immunity from prosecution.

### 3.4 EU General Data Protection Regulation (GDPR)

This software processes personal data in the following ways:

- **Browser profile data:** The Eventim login session is stored locally in `data/browser_profile/`. This data remains on your device and is not transmitted to any third party by this software. It is your responsibility to secure this data.
- **No data collection by the software authors:** This software does not phone home, collect analytics, or transmit any user data. It operates entirely on your local machine.
- **Eventim's data processing:** By logging into Eventim through this tool, you are subject to Eventim's privacy policy regarding their processing of your personal data.

---

## 4. User Responsibilities

By using this software, you acknowledge and agree to the following:

1. **Compliance:** You are solely responsible for ensuring that your use of this software complies with all applicable laws, regulations, and third-party terms of service in your jurisdiction.

2. **Personal use only:** You will use this software exclusively for purchasing tickets for your own personal attendance at Berlinale screenings. You will not use it for commercial resale, scalping, or any other commercial purpose.

3. **Purchase limits:** You will respect all ticket purchase limits imposed by Eventim and the Berlinale (currently a maximum of 2 tickets per person per screening, or 5 for Generation section screenings).

4. **Account security:** You are responsible for the security of your Eventim account and browser session data stored locally. Do not share your `data/browser_profile/` directory with others.

5. **Consequences accepted:** You accept all risks associated with using this software, including but not limited to account suspension, ticket cancellation, financial losses, and potential legal liability.

6. **No circumvention:** You will not modify this software to circumvent purchase limits, bypass security measures, or engage in any activity that would constitute unfair competition or fraud.

7. **Cessation on request:** If you receive a cease-and-desist notice or similar communication from Eventim, KBB, or any other party regarding your use of this software, you should seek legal advice and consider ceasing use immediately.

---

## 5. Risks

Users should be aware of the following risks:

| Risk | Likelihood | Consequence |
|------|-----------|-------------|
| Eventim account suspension | Moderate | Loss of account, inability to purchase tickets |
| Ticket cancellation | Moderate | Loss of purchased tickets and potential loss of payment |
| IP/browser blocking | Low-Moderate | Inability to access Eventim from your network/device |
| Civil legal action (Eventim) | Low | Potential damages claim for ToS violation |
| Criminal prosecution | Very Low | No known precedent for personal use in Germany |
| GitHub takedown (DMCA/similar) | Very Low | Similar projects have operated for years without issue |

---

## 6. Open-Source Distribution Disclaimer

This software is distributed as open-source code under the MIT License. The distribution of source code that *could be used* to interact with third-party services does not, in itself, constitute a violation of those services' terms of use. Terms of service are contractual agreements between the service provider and the individual user -- they do not bind third-party software developers.

The authors and contributors of this software:

- Do not encourage or endorse any violation of third-party terms of service
- Do not assume responsibility for how others choose to use this software
- Provide this software for educational and research purposes
- Make no guarantees about the continued availability or functionality of this software

---

## 7. No Legal Advice

**This document does not constitute legal advice.** It is provided for informational purposes only to help users understand the legal context surrounding the use of ticket automation software.

The authors of this software are not lawyers, and the legal analysis provided here reflects a good-faith understanding of the applicable legal framework as of February 2026. Laws and regulations change, and their interpretation varies by jurisdiction.

If you have questions about the legality of using this software in your specific situation, please consult a qualified legal professional in your jurisdiction.

---

## 8. Contact and Reporting

If you are a representative of CTS Eventim, KBB, or any other organization and have concerns about this software, please open an issue on the project's GitHub repository. We are committed to engaging constructively with rights holders.

---

*This legal notice was last reviewed in February 2026. It may not reflect subsequent changes in law or third-party terms of service.*
