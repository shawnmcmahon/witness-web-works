# Witness Web Works

Denver Web Design & E-Commerce website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Contact Form**: Integrated with Resend for email functionality
- **SEO Optimized**: Proper metadata, semantic HTML, and fast loading
- **Beautiful UI**: Custom design with Cormorant Garamond and Open Sans fonts

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── services/page.tsx     # Services & pricing
│   ├── meet-the-team/page.tsx # Team page
│   ├── contact/page.tsx      # Contact page
│   └── api/contact/route.ts  # Contact form API
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   ├── PricingCard.tsx       # Pricing plan cards
│   ├── AddonCard.tsx         # Addon service cards
│   └── ContactForm.tsx       # Contact form component
└── lib/
    └── email.ts              # Resend email configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy the environment example file:
```bash
cp env.example .env.local
```

3. Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=re_your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📧 Email Setup (Resend)

1. Create an account at [resend.com](https://resend.com)
2. Verify your domain (witnesswebworks.com)
3. Generate an API key
4. Add the API key to your environment variables

The contact form sends emails to:
- shawn@witnesswebworks.com
- demetri@integratedimpact.co
- demetri@witnesswebworks.com

## 🚀 Deployment (Vercel)

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com/new)
3. Add environment variables:
   - `RESEND_API_KEY`: Your Resend API key
4. Deploy!

### Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for email functionality |

## 🎨 Design System

### Colors

- **Primary (Dark Teal)**: `#2D4A53`
- **Accent (Gold)**: `#C9A227`
- **Background (Cream)**: `#FAF7F2`
- **Text**: `#1A1A1A`

### Typography

- **Headings**: Cormorant Garamond (serif)
- **Body**: Open Sans (sans-serif)

## 📱 Pages

- **Home** (`/`): Hero section, features, CTA
- **Services** (`/services`): Pricing plans, addons, included features
- **Meet the Team** (`/meet-the-team`): Company story, team members, values
- **Contact** (`/contact`): Contact form, contact info, FAQ

## 📄 License

© 2025 Witness Web Works. All rights reserved.
