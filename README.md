# Sam's Print Studio - Professional Printing Website

A modern, responsive React website for Sam's Print Studio, a professional printing business in Bangalore, India.

## 🎯 Features

- **Hero Section** - Eye-catching landing section with key highlights
- **Why Choose Us** - 6 reason cards showcasing unique selling points
- **Services Grid** - 6 main service categories with icons and descriptions
- **Design Support** - Dedicated section for free design assistance
- **Pricing Table** - Transparent, category-based pricing information
- **How to Order** - 4-step process visualization with WhatsApp integration
- **About Us** - Company story and contact information
- **Footer** - Complete footer with links, contact info, and newsletter signup

## 🚀 Tech Stack

- **React** 18.2.0 - UI library for interactive components
- **Tailwind CSS** 3.3.0 - Utility-first CSS framework
- **Lucide React** 0.263.1 - Beautiful icon library
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixes

## 📦 Installation

1. Clone or download the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Development

To start the development server:

```bash
npm start
```

The website will open at `http://localhost:3000` with hot reload enabled.

## 🔨 Building

To create a production build:

```bash
npm build
```

The build folder will contain the optimized production files.

## 📁 Project Structure

```
sams-print-studio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── DesignSupportSection.jsx
│   │   ├── PricingSection.jsx
│   │   ├── HowToOrderSection.jsx
│   │   ├── AboutUsSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### WhatsApp Integration
Update the WhatsApp numbers in the following components:
- `src/components/Header.jsx`
- `src/components/HeroSection.jsx`
- `src/components/PricingSection.jsx`
- `src/components/HowToOrderSection.jsx`
- `src/components/Footer.jsx`

Replace `+919999999999` with your actual WhatsApp business number.

### Contact Information
Update contact details in `src/components/Footer.jsx`:
- Phone number
- Email address
- Business hours
- Location

### Pricing
Modify pricing tables in `src/components/PricingSection.jsx` to reflect current rates.

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for description and keywords
- Accessible icons and components
- Mobile-first responsive design
- Proper heading hierarchy
- Schema-ready structure

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop screens (1024px and up)

## 🎭 Colors & Branding

Primary Colors:
- **Green**: `#22c55e` (Primary action color)
- **Dark Gray**: `#1f2937` (Secondary text)
- **Orange**: `#f97316` (Accent color)

## 💡 Performance

- Lightweight component structure
- Optimized CSS with Tailwind
- Smooth animations and transitions
- Fast icon rendering with Lucide

## 📝 License

© 2024 Sam's Print Studio. All rights reserved.

## 🤝 Support

For support and inquiries, contact via:
- **WhatsApp**: +91-XXXXXXXXXX
- **Email**: info@samprintstudio.com
- **Hours**: Monday to Saturday, 9 AM - 7 PM

---

**Built with ❤️ for quality printing**
