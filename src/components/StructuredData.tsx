'use client';

import Script from 'next/script';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HashDam",
    "alternateName": "해시댐",
    "url": "https://big-kim.github.io/hashdam",
    "logo": "https://big-kim.github.io/hashdam/images/FullLogo.png",
    "description": "HashDam은 해시파워를 활용해 일일 코인 리워드를 제공하는 기업용 리워드 인프라입니다. API 연동으로 서비스에 쉽게 적용하고, 데이터는 투명하게 검증됩니다.",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+82-2-1234-5678",
      "contactType": "customer service",
      "email": "contact@hashdam.io",
      "availableLanguage": ["Korean", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR",
      "addressRegion": "Seoul"
    },
    "sameAs": [
      "https://twitter.com/HashDam_io",
      "https://linkedin.com/company/hashdam",
      "https://github.com/hashdam"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HashDam",
    "url": "https://big-kim.github.io/hashdam",
    "description": "해시파워 기반의 새로운 지속 성장 리워드 플랫폼 - HashDam",
    "publisher": {
      "@type": "Organization",
      "name": "HashDam"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://big-kim.github.io/hashdam/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "해시파워 리워드 서비스",
    "description": "해시파워를 활용한 일일 코인 리워드 인프라",
    "provider": {
      "@type": "Organization",
      "name": "HashDam"
    },
    "serviceType": "리워드 플랫폼",
    "areaServed": {
      "@type": "Country",
      "name": "South Korea"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "마이닝 플랜",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "1년 플랜"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "2년 플랜"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "3년 플랜"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "무제한 플랜"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://big-kim.github.io/hashdam"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Features",
        "item": "https://big-kim.github.io/hashdam#features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Calculator",
        "item": "https://big-kim.github.io/hashdam#calculator"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Pricing",
        "item": "https://big-kim.github.io/hashdam#pricing"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "HashDam이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HashDam은 안전하고 효율적인 클라우드 마이닝 플랫폼으로, 비트코인, 이더리움 등 다양한 암호화폐 채굴 서비스를 제공합니다."
        }
      },
      {
        "@type": "Question",
        "name": "어떤 암호화폐를 채굴할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "비트코인(BTC), 이더리움(ETH), 라이트코인(LTC), 도지코인(DOGE) 등 다양한 암호화폐를 채굴할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "클라우드 마이닝은 안전한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HashDam은 투명한 데이터 기반으로 운영되며, 보안이 검증된 시설에서 마이닝을 진행합니다."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}