# Clay & Calm (Luxe Storefront)

Modern, high-end pottery storefront built with **Vite + React + Tailwind**.

## Run locally
```bash
npm install
npm run dev
```

## Build / preview
```bash
npm run build
npm run preview
```

## Deploy
### Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: already included via `public/_redirects`

### Payments
Checkout is wired with **placeholders** for Stripe / PayPal.
- Stripe: create an endpoint `/api/create-checkout-session`
- PayPal: add PayPal Buttons on `src/pages/Checkout.jsx`


## No-code Admin (Decap CMS)
- Visit `/admin` after deploy.
- In Netlify: enable **Identity** + **Git Gateway**.
- Create an admin user under Identity.
- Then edit products visually.
