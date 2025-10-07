# Portfolio Website - Next.js

A modern, high-performance portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases DevOps engineering expertise with smooth animations, responsive design, and optimized performance.

## 🚀 Features

### Modern Tech Stack
- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

### Performance Optimizations
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic code splitting for better performance
- **Lazy Loading** - Components load as they come into view
- **Bundle Optimization** - Optimized package imports
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards

### Design Features
- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Framer Motion powered animations
- **Modern UI** - Clean, professional design
- **Dark/Light Theme Ready** - Easy theme switching capability
- **Accessibility** - WCAG compliant design

### Interactive Elements
- **Smooth Scrolling** - Native smooth scrolling between sections
- **Hover Effects** - Interactive hover animations
- **Mobile Navigation** - Responsive hamburger menu
- **Scroll Animations** - Elements animate as they enter viewport
- **Contact Form** - Interactive contact form (demo)

## 📁 Project Structure

```
portfolio-nextjs/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Portfolio.tsx        # Portfolio projects
│   ├── Experience.tsx       # Work experience timeline
│   ├── Skills.tsx           # Technical skills
│   ├── Education.tsx        # Education section
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer component
├── lib/
│   ├── data.ts              # Portfolio data
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update your personal information in `lib/data.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  location: "Your Location",
  phone: "Your Phone",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  about: "Your about text..."
}
```

### Portfolio Projects
Add your projects in `lib/data.ts`:

```typescript
export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Project Title",
    description: "Project description...",
    githubUrl: "https://github.com/yourusername/project",
    goals: ["Goal 1", "Goal 2"],
    challenges: ["Challenge 1", "Challenge 2"],
    solution: ["Solution 1", "Solution 2"],
    results: ["Result 1", "Result 2"],
    technologies: ["Tech 1", "Tech 2"]
  }
]
```

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `app/globals.css`
- **Animations**: Customize animations in `tailwind.config.js`

### SEO & Metadata
Update metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description...',
  // ... other metadata
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Build for Production
```bash
npm run build
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

### Framer Motion Features
- **Page Transitions**: Smooth page load animations
- **Scroll Animations**: Elements animate as they enter viewport
- **Hover Effects**: Interactive hover animations
- **Stagger Animations**: Sequential element animations

### Performance Considerations
- Animations respect `prefers-reduced-motion`
- Optimized for 60fps performance
- Lazy loading for better initial load times

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Quality
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **Prettier** - Code formatting (recommended)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS