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
  metadataBase: new URL('https://hashdam.io'),
  title: {
    default: '해시파워 기반의 새로운 지속 성장 리워드 플랫폼 - HashDam',
    template: '%s | HashDam'
  },
  description: 'HashDam은 해시파워를 활용해 일일 코인 리워드를 제공하는 기업용 리워드 인프라입니다. API 연동으로 서비스에 쉽게 적용하고, 데이터는 투명하게 검증됩니다.',
  keywords: ['해시파워 리워드', '고객 리워드 플랫폼', 'HashDam', '해시댐', 'B2B 리워드', 'API 연동', '코인 리워드', '지속가능 리워드', '멤버십 솔루션', '로열티 프로그램', '데이터 투명성'],
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
    title: '해시파워 기반의 새로운 지속 성장 리워드 플랫폼 - HashDam',
    description: 'HashDam은 해시파워를 활용해 일일 코인 리워드를 제공하는 기업용 리워드 인프라입니다. API 연동으로 서비스에 쉽게 적용하고, 데이터는 투명하게 검증됩니다.',
    images: [
      {
        url: '/images/FullLogo.png',
        width: 1200,
        height: 630,
        alt: 'HashDam - Full Logo',
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
    title: '해시파워 기반의 새로운 지속 성장 리워드 플랫폼 - HashDam',
    description: 'HashDam은 해시파워를 활용해 일일 코인 리워드를 제공하는 기업용 리워드 인프라입니다. API 연동으로 서비스에 쉽게 적용하고, 데이터는 투명하게 검증됩니다.',
    images: {
      url: '/images/FullLogo.png',
      alt: 'HashDam - Full Logo',
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
        
        {/* Favicon Settings */}
        <link rel="icon" type="image/png" href="/images/logo_#.png" />
        <link rel="apple-touch-icon" href="/images/logo_#.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
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
              "logo": "https://hashdam.io/images/Logo.png",
              "description": "HashDam은 해시파워를 활용해 일일 코인 리워드를 제공하는 기업용 리워드 인프라입니다. API 연동으로 서비스에 쉽게 적용하고, 데이터는 투명하게 검증됩니다.",
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
