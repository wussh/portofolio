import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daud Herlangga Andrianata - DevOps Engineer',
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
  metadataBase: new URL('https://daudherlangga.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Daud Herlangga Andrianata - DevOps Engineer',
    description: 'Experienced DevOps Engineer with expertise in CI/CD pipelines, containerization, and cloud infrastructure.',
    url: 'https://daudherlangga.dev',
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
    title: 'Daud Herlangga Andrianata - DevOps Engineer',
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
