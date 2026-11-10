# Twilio-koppling för Demonrösten — steg för steg

## 1. Skapa konto (du gör själv)
1. Gå till https://www.twilio.com/try-twilio
2. Registrera dig (mejl + lösenord), verifiera mejlen och ditt mobilnummer.
3. Säg till Claude när du är inne i konsolen (console.twilio.com).

## 2. Ladda kontot (krävs för riktiga bus)
- Trial-läget spelar upp "this is a trial account" före varje samtal och kan bara
  ringa nummer du verifierat. Döda pranket = ladda konto:
  Console → Billing → Add funds → ~20 USD.

## 3. API-nyckel (du klistrar in hemligheterna själv)
1. Console → Account → API keys & tokens → Create API key (namn: demonrosten).
2. SPARA SID + Secret — Secret visas bara en gång.

## 4. TwiML App
1. Console → Voice → TwiML Apps → Create new (namn: demonrosten).
2. Voice Request URL fylls i efter steg 5 (Function-URL + /voice).
3. Spara appens SID.

## 5. Functions (serverkoden)
1. Console → Functions & Assets → Services → Create Service (namn: demonrosten).
2. Add Function: /token → klistra in innehållet i token.js (public).
3. Add Function: /voice → klistra in innehållet i voice.js (public).
4. Environment variables (under Settings):
   - APP_PIN       = valfri pinkod du hittar på
   - API_KEY_SID   = från steg 3
   - API_KEY_SECRET= från steg 3
   - TWIML_APP_SID = från steg 4
   - CALLER_ID     = numret samtalet ska visa (steg 6)
   (ACCOUNT_SID finns automatiskt)
5. Dependencies: inga extra behövs. Tryck Deploy All.
6. Kopiera servicens URL (https://demonrosten-XXXX.twil.io) och gå tillbaka
   till steg 4: sätt Voice Request URL = den URL:en + /voice (HTTP POST).

## 6. Nummer att ringa från (välj ett)
- Köp nummer: Console → Phone Numbers → Buy a number (Sverige, Voice).
- ELLER verifiera ditt eget mobilnummer: Phone Numbers → Verified Caller IDs →
  Add → följ verifieringen. Då ser det ut som att DU ringer.
- Sätt CALLER_ID-variabeln (steg 5.4) till det valda numret i +46-format.

## 7. Koppla appen
- Öppna Demonrösten → kortet "Ring på riktigt" → fyll i Function-URL
  (https://demonrosten-XXXX.twil.io) och din PIN. Sparas i mobilen.
- Slå ett nummer och tryck RING. Prata i luren — offret hör valt röstläge.

## Noteringar
- Snackbrädans repliker går INTE in i samtalet (talsyntesen kan inte routas
  dit) — i samtal är det din egen röst som förvrängs.
- Panik-mute funkar även i samtal.
- Kostnad: ~1 kr/min till svenska mobiler + ev. månadskostnad för nummer.
