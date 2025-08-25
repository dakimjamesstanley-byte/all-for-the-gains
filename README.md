
# All For The Gains — Next.js (Vercel Ready)

This is your live-ready site. It matches the code in our canvas, wired for:
- **Calendly** bookings (`/30min`)
- **Formspree** submissions (auto Thank You section)
- **Stripe** links currently point to Calendly (swap to live Payment Links later)

## Quick Deploy (Vercel)

1. Go to https://vercel.com (sign up with **dakimdjs@yahoo.com** or continue with GitHub if easier).
2. Click **New Project → Deploy** and choose **“Import... → Upload”**.
3. Drag & drop this entire folder (or the ZIP) into Vercel.
4. Wait for build to finish; Vercel gives you a URL like `https://all-for-the-gains.vercel.app`.
5. Connect your domain (**allforthegains.com**) in **Settings → Domains** and follow their steps (add DNS records at your registrar).

## Stripe (when ready)
- Replace the `stripeLinks` in `app/page.tsx` with your **LIVE** Payment Links:
  ```ts
  const stripeLinks = {
    four: "https://buy.stripe.com/XXX",
    eight: "https://buy.stripe.com/YYY",
    twelve: "https://buy.stripe.com/ZZZ"
  };
  ```

## Formspree
- Endpoint already set to **https://formspree.io/f/xvgbpvpy**.
- You will receive emails per submission. You can add a redirect or extra fields in your Formspree dashboard.

## Edit content
- Main page: `app/page.tsx`
- Global styles: `app/styles/globals.css`
- Images: `public/hero.jpg` and `public/about.jpg`

## Local dev (optional)
```bash
npm i
npm run dev
# open http://localhost:3000
```
