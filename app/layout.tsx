import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Get environment variables with fallbacks
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://daudherlangga.dev'
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Daud Herlangga Andrianata - DevOps Engineer'
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'andrianta.321@gmail.com'

export const metadata: Metadata = {
  title: siteName,
  description: 'Experienced DevOps Engineer with expertise in CI/CD pipelines, containerization, cloud infrastructure, Docker, Kubernetes, Jenkins, and monitoring solutions.',
  keywords: ['DevOps', 'Kubernetes', 'Docker', 'CI/CD', 'Cloud Infrastructure', 'Automation', 'Terraform', 'AWS', 'Azure', 'GCP'],
  authors: [{ name: 'Daud Herlangga Andrianata' }],
  creator: 'Daud Herlangga Andrianata',
  publisher: 'Daud Herlangga Andrianata',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteName,
    description: 'Experienced DevOps Engineer with expertise in CI/CD pipelines, containerization, and cloud infrastructure.',
    url: siteUrl,
    siteName: 'Daud Herlangga Andrianata Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Daud Herlangga Andrianata - DevOps Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: 'Experienced DevOps Engineer with expertise in CI/CD pipelines, containerization, and cloud infrastructure.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
