import type { Metadata } from 'next'
import { Inter, Poppins, Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import { ScrollProgress } from '@/components/ui'
import { StructuredData } from '@/components/StructuredData'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['700'],
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'HashDam - 클라우드 마이닝 플랫폼 | 비트코인 채굴 서비스',
    template: '%s | HashDam'
  },
  description: 'HashDam은 안전하고 효율적인 클라우드 마이닝 플랫폼입니다. 비트코인, 이더리움 등 다양한 암호화폐 채굴 서비스를 제공합니다.',
  keywords: ['클라우드 마이닝', '비트코인 채굴', '암호화폐', 'HashDam', '해시댐', '마이닝 플랫폼', '해시파워', '암호화폐 리워드', '채굴 보상', 'B2B 리워드', 'API 통합', 'LTC', 'DOGE', '머지마이닝'],
  authors: [{ name: 'HashDam Team', url: 'https://hashdam.io' }],
  creator: 'HashDam',
  publisher: 'HashDam',
  applicationName: 'HashDam',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Business',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hashdam.io/',
    siteName: 'HashDam',
    title: 'HashDam - 클라우드 마이닝 플랫폼 | 비트코인 채굴 서비스',
    description: 'HashDam은 안전하고 효율적인 클라우드 마이닝 플랫폼입니다. 비트코인, 이더리움 등 다양한 암호화폐 채굴 서비스를 제공합니다.',
    images: [
      {
        url: '/images/og-image-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'HashDam - 클라우드 마이닝 플랫폼',
      },
    ],
    countryName: 'South Korea',
    emails: ['contact@hashdam.io'],
    phoneNumbers: ['+82-2-1234-5678'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@HashDam_io',
    creator: '@HashDam_io',
    title: 'HashDam - 클라우드 마이닝 플랫폼 | 비트코인 채굴 서비스',
    description: 'HashDam은 안전하고 효율적인 클라우드 마이닝 플랫폼입니다. 비트코인, 이더리움 등 다양한 암호화폐 채굴 서비스를 제공합니다.',
    images: {
      url: '/images/twitter-image-1200x600.jpg',
      alt: 'HashDam - 클라우드 마이닝 플랫폼',
    },
  },
  alternates: {
    canonical: 'https://hashdam.io/',
    languages: {
      'ko': 'https://hashdam.io/',
      'en': 'https://hashdam.io/en/',
      'x-default': 'https://hashdam.io/',
    },
  },
  other: {
    'theme-color': '#3b4cca',
    'msapplication-TileColor': '#3b4cca',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'HashDam',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=no',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
    other: {
      'naver-site-verification': 'naver-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${poppins.variable} ${notoSansKR.variable}`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Font Preloads for LCP optimization */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "HashDam",
              "url": "https://hashdam.io",
              "logo": "https://hashdam.io/images/logo.png",
              "description": "해시파워 기반의 지속 성장형 리워드 플랫폼",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "email": "contact@hashdam.io",
                "availableLanguage": ["Korean", "English"]
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <StructuredData />
          <ScrollProgress color="#3b4cca" height={3} />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50">
            Skip to content
          </a>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
