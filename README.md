# Project PMOT

Dit project heb ik met mijn groepje gebouwd tijdens een Deepdive ik heb de frontend van deze applicatie geschreven en een klein beetje backend.

## Online te vinden op

https://pmot.psww.dev/nl

## Vereisten

- Node.js (versie 12 of hoger)
- npm of yarn

## Installatie

1. **Kloon de repository:**

   ```bash
   git clone https://github.com/gebruikersnaam/repository-naam.git
   cd repository-naam
   ```

2. **Installeer de afhankelijkheden:**

   Met npm:

   ```bash
   npm install
   ```

   Of met yarn:

   ```bash
   yarn install
   ```

3. **Maak een `.env.local` bestand aan:**

   Maak een `.env.local` bestand in de hoofdmap van je project en voeg de benodigde omgevingsvariabelen toe. Bijvoorbeeld:

   ```env
   NEXT_PUBLIC_API_URL=http://api.example.com
   NEXT_PUBLIC_OTHER_VAR=waarde
   ```

   Vervang `NEXT_PUBLIC_API_URL` en `NEXT_PUBLIC_OTHER_VAR` door de daadwerkelijke variabelen die je nodig hebt.

## Scripts

In het `package.json` bestand vind je een aantal scripts die je kunt gebruiken om de applicatie te runnen:

- **Ontwikkelmodus starten:**

  ```bash
  npm run dev
  ```

  Of met yarn:

  ```bash
  yarn dev
  ```

  Dit start de applicatie in ontwikkelmodus. De app zal draaien op [http://localhost:3000](http://localhost:3000).

- **Productie build maken:**

  ```bash
  npm run build
  ```

  Of met yarn:

  ```bash
  yarn build
  ```

  Dit maakt een geoptimaliseerde productie build van de applicatie.

- **Productie build starten:**

  Zorg ervoor dat je eerst een productie build hebt gemaakt met `npm run build` of `yarn build`.

  ```bash
  npm start
  ```

  Of met yarn:

  ```bash
  yarn start
  ```

  Dit start de productie build van de applicatie.

- **Linting uitvoeren:**

  ```bash
  npm run lint
  ```

  Of met yarn:

  ```bash
  yarn lint
  ```

  Dit controleert de code op stijl- en syntaxfouten.

## Deployen

Zie de [Next.js documentatie](https://nextjs.org/docs/deployment) voor instructies over het deployen van je Next.js applicatie.

## Contributie

Voel je vrij om bij te dragen aan dit project. Maak een fork van de repository, maak een nieuwe branch en doe een pull request met je wijzigingen.

## Licentie

Deze applicatie is gelicentieerd onder de MIT-licentie. Zie het [LICENSE](./LICENSE) bestand voor meer informatie.
```

Plaats deze inhoud in een `README.md` bestand in de hoofdmap van je repository. Vergeet niet om de placeholder URL's en variabelen aan te passen naar je eigen projectgegevens.
