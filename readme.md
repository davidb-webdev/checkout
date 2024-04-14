# Checkout

## Beskrivning

Repot innehåller en enkel webbutik, med frontend i React och backend i Node.js.
Fokus har främst legat på att hantera kopplingar mot Stripe, som används för att lista produkter, registrera kunder och genomföra betalningar.


## Funktioner och uppfyllda krav

- Listning av produkter (översikt samt enskilda produktsidor)
- Produkter hämtas från Stripe
- Kundvagnsfunktion med useContext, useReducer och localStorage
- Orderläggning med betalning via Stripe
- Kundregistrering mot backend och Stripe, kryptering av lösenord
- Hantering av inloggad användare med cookie-session
- Användaren måste vara inloggad för att kunna genomföra köp
- Ordrar sparas i JSON-filer i backend
- Kontroll av betalning mot Stripe före order skapas

## Github-länk

https://github.com/davidb-webdev/checkout

## Instruktioner

### client

En .env-fil behöver skapas i client-mappen:

```
VITE_BACKEND_URL=http://localhost:3000
```

Kör:

```
cd client
npm i
npm run dev
```

### server

En .env-fil behöver skapas i server-mappen:

```
STRIPE_SECRET_KEY=[Ange secret key för Stripe]
BACKEND_PORT=3000
FRONTEND_URL=http://localhost:5173
COOKIESESSION_SECRET=[Ange valfri secret för cookie-session]
```

Kör:

```
cd server
npm i
npx nodemon server
```
