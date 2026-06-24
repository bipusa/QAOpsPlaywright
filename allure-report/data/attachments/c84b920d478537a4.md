# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MoreValidation.spec.js >> visual UI page comparison
- Location: tests\MoreValidation.spec.js:37:6

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  4861 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: landing.png

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: https://about.google/?fg=1&utm_source=google-DE&utm_medium=referral&utm_campaign=hp-header
        - text: Über Google
      - link [ref=e5] [cursor=pointer]:
        - /url: https://store.google.com/DE?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=de-DE
        - text: Store
      - generic [ref=e7]:
        - generic [ref=e8]:
          - link [ref=e10] [cursor=pointer]:
            - /url: https://mail.google.com/mail/&ogbl
            - text: Gmail
          - link [ref=e12] [cursor=pointer]:
            - /url: https://www.google.com/imghp?hl=de&ogbl
            - text: Bilder
        - button [ref=e15] [cursor=pointer]:
          - img [ref=e16]
        - link [ref=e20] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?hl=de&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
          - text: Anmelden
    - generic [ref=e22]:
      - link [ref=e23] [cursor=pointer]:
        - /url: /search?sca_esv=63f38fc62ff74e48&q=Welche+unglaublichen+Torwart-Paraden+haben+WM-Geschichte+geschrieben&udm=50&oi=ddle&noiga=1&ct=460195269&peek_pws=0&aep=84&sa=X&ved=0ahUKEwiS9oiD5Z-VAxUBcvEDHRdkI1AQPQgG
        - img [ref=e25]
      - button [ref=e27]:
        - img [ref=e32] [cursor=pointer]
    - search [ref=e35]:
      - generic [ref=e37]:
        - generic [ref=e39]:
          - button [ref=e42] [cursor=pointer]:
            - img [ref=e44]
          - combobox [ref=e47]
          - generic [ref=e48]:
            - generic [ref=e49]:
              - button [ref=e50] [cursor=pointer]:
                - img [ref=e51]
              - button [ref=e53] [cursor=pointer]:
                - img [ref=e54]
            - link [ref=e56] [cursor=pointer]:
              - generic [ref=e58]:
                - img [ref=e60]
                - generic [ref=e67]: KI‑Modus
        - generic [ref=e69]:
          - button [ref=e70] [cursor=pointer]: Google Suche
          - button [ref=e71] [cursor=pointer]: Auf gut Glück!
    - generic [ref=e74]:
      - text: "Google gibt es auch auf:"
      - link [ref=e75] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_DL_qWCcSsjz_Zruy755lqptAJDQ%3D&hl=en&source=homepage&sa=X&ved=0ahUKEwiS9oiD5Z-VAxUBcvEDHRdkI1AQ2ZgBCDc
        - text: English
    - contentinfo [ref=e77]:
      - generic [ref=e78]: Deutschland
      - generic [ref=e79]:
        - generic [ref=e80]:
          - link [ref=e81] [cursor=pointer]:
            - /url: https://www.google.com/intl/de_de/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
            - text: Werbeprogramme
          - link [ref=e82] [cursor=pointer]:
            - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
            - text: Unternehmen
          - link [ref=e83] [cursor=pointer]:
            - /url: https://google.com/search/howsearchworks/?fg=1
            - text: Wie funktioniert die Google Suche?
        - link [ref=e85] [cursor=pointer]:
          - /url: https://sustainability.google/intl/de/klimaschutz/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=
          - text: "Drei Jahrzehnte Klimaschutz: Jede Entscheidung zählt"
        - generic [ref=e86]:
          - link [ref=e87] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=de&fg=1
            - text: Datenschutzerklärung
          - link [ref=e88] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=de&fg=1
            - text: Nutzungsbedingungen
          - button [ref=e92] [cursor=pointer]:
            - generic [ref=e93]: Einstellungen
  - generic:
    - dialog "Bevor Sie zur Google Suche weitergehen":
      - generic [ref=e100]:
        - generic [ref=e102]:
          - img "Google" [ref=e103]
          - generic [ref=e104]:
            - 'button "Sprache: ‪Deutsch‬" [active] [ref=e106] [cursor=pointer]':
              - generic [ref=e107]:
                - img
                - generic [ref=e108]: de
            - link "Anmelden" [ref=e109] [cursor=pointer]
        - generic [ref=e110]:
          - heading "Bevor Sie zu Google weitergehen" [level=1] [ref=e111]
          - generic [ref=e112]:
            - generic [ref=e113]:
              - text: Wir verwenden
              - link "Cookies" [ref=e114] [cursor=pointer]:
                - /url: https://policies.google.com/technologies/cookies?utm_source=ucbs&hl=de
              - text: und Daten, um
              - list [ref=e115]:
                - listitem [ref=e116]: Google-Dienste zu erbringen und zu betreiben
                - listitem [ref=e117]: Ausfälle zu prüfen und Maßnahmen gegen Spam, Betrug und Missbrauch zu ergreifen
                - listitem [ref=e118]: Daten zu Zielgruppeninteraktionen und Websitestatistiken zu erheben. Mit den gewonnenen Informationen möchten wir verstehen, wie unsere Dienste verwendet werden, und die Qualität dieser Dienste verbessern.
            - generic [ref=e119]:
              - text: Wenn Sie „Alle akzeptieren“ auswählen, verwenden wir Cookies und Daten auch, um
              - list [ref=e120]:
                - listitem [ref=e121]: neue Dienste zu entwickeln und zu verbessern
                - listitem [ref=e122]: Werbung auszuliefern und ihre Effektivität zu messen
                - listitem [ref=e123]: je nach Ihren Einstellungen personalisierte Inhalte anzuzeigen
                - listitem [ref=e124]: personalisierte Werbung anzuzeigen, abhängig von Ihren Einstellungen
              - generic [ref=e125]: Wenn Sie „Alle ablehnen“ auswählen, verwenden wir Cookies nicht für diese zusätzlichen Zwecke.
            - generic [ref=e126]: Nicht personalisierte Inhalte werden u. a. von Inhalten, die Sie sich gerade ansehen, Aktivitäten in Ihrer aktiven Suchsitzung und Ihrem Standort beeinflusst. Nicht personalisierte Werbung wird von den Inhalten, die Sie sich gerade ansehen, und Ihrem allgemeinen Standort beeinflusst. Personalisierte Inhalte und Werbung können auch relevantere Ergebnisse, Empfehlungen und individuelle Werbung enthalten, die auf früheren Aktivitäten in diesem Browser, etwa Suchanfragen bei Google, beruhen. Sofern relevant, verwenden wir Cookies und Daten außerdem, um Inhalte und Werbung altersgerecht zu gestalten.
            - generic [ref=e127]: Wählen Sie „Weitere Optionen“ aus, um sich zusätzliche Informationen anzusehen, einschließlich Details zum Verwalten Ihrer Datenschutzeinstellungen. Sie können auch jederzeit g.co/privacytools besuchen.
        - generic [ref=e128]:
          - generic [ref=e129]:
            - button "Alle ablehnen" [ref=e130] [cursor=pointer]
            - button "Alle akzeptieren" [ref=e131] [cursor=pointer]
          - link "Weitere Optionen für Personalisierungseinstellungen und Cookies" [ref=e133] [cursor=pointer]:
            - generic "Weitere Optionen für Personalisierungseinstellungen und Cookies" [ref=e134]: Weitere Optionen
        - generic [ref=e135]:
          - link "Datenschutz" [ref=e136] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=de&fg=1&utm_source=ucbs
          - generic [ref=e137]: ·
          - link "Nutzungsbedingungen" [ref=e138] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=de&fg=1&utm_source=ucbs
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test')
  2  | 
  3  | test("Popup validations", async({page}) => {
  4  |     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  5  |     //await page.goto('https://google.com');
  6  |     //await page.goBack();
  7  |     //await page.goForward();
  8  |     await expect(page.locator('#displayed-text')).toBeVisible();
  9  |     await page.locator('#hide-textbox').click();
  10 |     await expect(page.locator('#displayed-text')).toBeHidden();
  11 |     await page.pause();
  12 |     await page.locator('#confirmbtn').click();
  13 |     await page.on('dialog', dialog => dialog.accept());   //java popup i.e. when there is no html or css locator for the popup events
  14 |     await page.locator('#mousehover').hover();
  15 |     //switching to child frame located within the main page or frame
  16 |     const framepage = page.frameLocator('#courses-iframe');
  17 |     await framepage.locator("li a[href*='lifetime-access']:visible").click();
  18 |     const textcheck = await framepage.locator('.text h2').textContent();
  19 |     console.log(textcheck.split(' ')[1]);
  20 | 
  21 | 
  22 | })
  23 | 
  24 | test("Screenshot and visual comparison", async({page}) => {
  25 |     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  26 |     //await page.goto('https://google.com');
  27 |     //await page.goBack();
  28 |     //await page.goForward();
  29 |     await expect(page.locator('#displayed-text')).toBeVisible();
  30 |     await page.locator('#displayed-text').screenshot({path: "Elementlabelscreenshot.png"});
  31 |     await page.locator('#hide-textbox').click();
  32 |     await page.screenshot({path: "Screeshot.png"});
  33 |     await expect(page.locator('#displayed-text')).toBeHidden();
  34 | 
  35 | })
  36 | 
  37 | test.only('visual UI page comparison', async({page}) => {
  38 |     await page.goto('https://www.google.com/');
> 39 |     expect (await page.screenshot()).toMatchSnapshot('landing.png');
     |                                      ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | })
```