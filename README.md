# Faith Mulira Health Care Centre Website

A modern, mobile-first informational website for Faith Mulira Health Care Centre, a Level III health facility in Gayaza, Uganda.

## 🏥 About

Faith Mulira Health Care Centre provides affordable, quality healthcare to the Gayaza and Masooli communities. This website serves as the digital presence for the centre, providing essential information about services, location, operating hours, and more.

## ✨ Features

- **Mobile-First Design**: Optimized for smartphones and low-bandwidth connections
- **7 Core Pages**: Home, About, Services, Team, Facilities, Contact, Patient Info
- **SEO Optimized**: Metadata, sitemap, and schema markup for local search
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **Fast Loading**: Optimized images and minimal JavaScript
- **Responsive**: Works seamlessly on all devices

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: React Icons
- **Deployment**: Vercel
- **Performance**: Static Site Generation (SSG)

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd faithmulirahcc
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
faithmulirahcc/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── facilities/        # Facilities & Equipment page
│   ├── patient-info/      # Patient Information page
│   ├── services/          # Services page
│   ├── team/              # Our Team page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── home/             # Home page sections
│   ├── layout/           # Header & Footer
│   └── ui/               # Reusable UI components
├── data/                  # Data files
│   ├── faq.ts            # FAQ data
│   ├── services.ts       # Services information
│   └── team.ts           # Team members
├── lib/                   # Utility functions
│   ├── constants.ts      # Site-wide constants
│   └── utils.ts          # Helper functions
└── public/               # Static assets

```

## 🎨 Customization

### Update Contact Information

Edit `lib/constants.ts`:

```typescript
export const CONTACT_INFO = {
  phone: "+256 744176221",
  email: "info.faithmulirahcc@gmail.com",
  whatsapp: "https://wa.me/256744176221",
  address: {
    street: "Masooli, Gayaza Road",
    city: "Kampala",
    country: "Uganda",
    full: "Masooli, Gayaza Road, Near Kampala, Uganda",
  },
  coordinates: {
    lat: 0.4259,
    lng: 32.6157,
  },
};
```

### Update Services

Edit `data/services.ts` to add, remove, or modify services.

### Update Team Members

Edit `data/team.ts` to update staff profiles.

### Update FAQ

Edit `data/faq.ts` to add or modify frequently asked questions.

## 🚢 Deployment to Vercel

1. Push your code to GitHub

2. Visit [Vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your GitHub repository

5. Configure project:

   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

6. Click "Deploy"

Your website will be live at: `https://your-project-name.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain (e.g., `faithmulirahealthcare.ug`)
3. Follow DNS configuration instructions

## 📊 Performance Optimization

- Images automatically optimized to WebP format
- Static pages pre-rendered at build time
- Minimal JavaScript bundle size
- TailwindCSS purges unused CSS
- Google Fonts optimized with font-display: swap

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text on all images
- High contrast ratio (4.5:1 minimum)
- Minimum 44px touch targets

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized for 3G connections
- Compressed assets
- Lazy loading images

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type checking
npm run lint
```

## 🌍 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Opera Mini
- UC Browser

## 📝 Content Updates

### Adding Real Photos

1. Add photos to `public/images/`
2. Update image paths in components
3. Ensure images are optimized (< 200KB each)

### Updating Operating Hours

Edit `lib/constants.ts`:

```typescript
export const OPERATING_HOURS = {
  weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
  saturday: "Saturday: 9:00 AM - 5:00 PM",
  sunday: "Sunday: 10:00 AM - 2:00 PM",
  emergency: "24/7 Emergency Services Available",
};
```

## 🆘 Support

For technical issues or questions:

- Create an issue in the repository
- Contact the development team

## 📄 License

This project is proprietary to Faith Mulira Health Care Centre.

## 🙏 Acknowledgments

- Faith Mulira (Founder)
- Faith Mulira Health Care Centre Staff
- Next.js team
- Vercel for hosting

---

**Faith Mulira Health Care Centre** - Quality Healthcare for Our Community

_Website developed with ❤️ for the Gayaza community_
