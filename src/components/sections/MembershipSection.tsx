'use client'

import React, { useState, useRef } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface MembershipPlan {
  name: string
  price: string
  period: string
  isRecommended?: boolean
  features: {
    oneTimePurchase: string
    cumulativePurchase: string
    hashPower: string
    oneYear: string
    twoYear: string
    threeYear: string
    projectCount: string
    api: string
    hashWallet: string
  }
}

const membershipPlans: MembershipPlan[] = [
  {
    name: 'Trial',
    price: '1.778',
    period: '/3 years',
    features: {
      oneTimePurchase: '0',
      cumulativePurchase: '0',
      hashPower: '1Mh/s',
      oneYear: '0.711',
      twoYear: '1.304',
      threeYear: '1.778',
      projectCount: '1',
      api: '1',
      hashWallet: '0'
    }
  },
  {
    name: 'Build',
    price: '1.707',
    period: '/3 years',
    features: {
      oneTimePurchase: '49,000Mh/s',
      cumulativePurchase: '70,000Mh/s',
      hashPower: '1Mh/s',
      oneYear: '0.683',
      twoYear: '1.252',
      threeYear: '1.707',
      projectCount: '1',
      api: '1',
      hashWallet: '0'
    }
  },
  {
    name: 'Accelerate',
    price: '1.678',
    period: '/3 years',
    isRecommended: true,
    features: {
      oneTimePurchase: '98,000Mh/s',
      cumulativePurchase: '140,000Mh/s',
      hashPower: '1Mh/s',
      oneYear: '0.671',
      twoYear: '1.231',
      threeYear: '1.678',
      projectCount: '1',
      api: '1',
      hashWallet: '1'
    }
  },
  {
    name: 'Scale',
    price: '1.650',
    period: '/3 years',
    features: {
      oneTimePurchase: '196,000Mh/s',
      cumulativePurchase: '280,000Mh/s',
      hashPower: '1Mh/s',
      oneYear: '0.660',
      twoYear: '1.210',
      threeYear: '1.650',
      projectCount: '2',
      api: '2',
      hashWallet: '1'
    }
  },
  {
    name: 'Business',
    price: '1.622',
    period: '/3 years',
    features: {
      oneTimePurchase: '294,000Mh/s',
      cumulativePurchase: '420,000Mh/s',
      hashPower: '1Mh/s',
      oneYear: '0.649',
      twoYear: '1.189',
      threeYear: '1.622',
      projectCount: '3',
      api: '3',
      hashWallet: '1'
    }
  }
]

type FeatureAccent = 'primary' | 'danger'

const MembershipPlanCardMobile: React.FC<{ plan: MembershipPlan }> = ({ plan }) => {
  const t = useTranslation();

  const getAccentGradient = (planName: string) => {
    switch (planName) {
      case 'Trial':
        return 'from-[#d9ebff]/80 via-white/90 to-[#f1f7ff]/90'
      case 'Build':
        return 'from-[#d9f7e7]/80 via-white/90 to-[#f2fff7]/90'
      case 'Accelerate':
        return 'from-[#e4dcff]/80 via-white/90 to-[#f5f1ff]/90'
      case 'Scale':
        return 'from-[#ffe6d3]/80 via-white/90 to-[#fff4eb]/90'
      case 'Business':
        return 'from-[#ffe1e1]/80 via-white/90 to-[#fff4f4]/90'
      default:
        return 'from-gray-100/80 via-white/90 to-gray-50/90'
    }
  }

  const featureItems: Array<{
    key: string
    label: string
    value: string
    accent?: FeatureAccent
    colSpan?: number
  }> = [
    { key: 'oneTimePurchase', label: t.membership.features.oneTimePurchase, value: plan.features.oneTimePurchase },
    { key: 'cumulativePurchase', label: t.membership.features.cumulativePurchase, value: plan.features.cumulativePurchase },
    { key: 'hashPower', label: t.membership.features.hashPower, value: plan.features.hashPower, accent: 'primary', colSpan: 2 },
    { key: 'oneYear', label: t.membership.features.oneYear, value: plan.features.oneYear },
    { key: 'twoYear', label: t.membership.features.twoYear, value: plan.features.twoYear },
    { key: 'threeYear', label: t.membership.features.threeYear, value: plan.features.threeYear, accent: 'danger', colSpan: 2 },
    { key: 'projectCount', label: t.membership.features.projectCount, value: plan.features.projectCount },
    { key: 'api', label: t.membership.features.api, value: plan.features.api },
    { key: 'hashWallet', label: t.membership.features.hashWallet, value: plan.features.hashWallet }
  ]

  const getItemClass = (accent?: FeatureAccent, colSpan?: number) => {
    const base = 'col-span-1 rounded-2xl border px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col gap-1.5 transition-all duration-200 backdrop-blur-sm'
    const spanClass = colSpan === 2 ? 'col-span-2' : ''

    switch (accent) {
      case 'primary':
        return `${base} ${spanClass} border-blue-200/70 bg-blue-50/80 text-blue-700 shadow-[0_12px_28px_-18px_rgba(37,99,235,0.55)]`
      case 'danger':
        return `${base} ${spanClass} border-rose-200/70 bg-rose-50/80 text-rose-600 font-semibold shadow-[0_12px_28px_-18px_rgba(244,63,94,0.55)]`
      default:
        return `${base} ${spanClass} border-gray-100/80 bg-white/70 text-neutral-700 shadow-[0_14px_32px_-22px_rgba(15,23,42,0.35)]`
    }
  }

  return (
    <div className="relative group w-full max-w-[320px] sm:max-w-[360px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[300px] mx-auto">
      <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${getAccentGradient(plan.name)} opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90`} />
      <div className="relative rounded-3xl border border-white/40 bg-white/90 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.55)] ring-1 ring-black/5 px-6 py-6 sm:px-7 sm:py-8 flex flex-col gap-6 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-neutral-900 font-semibold text-lg sm:text-xl tracking-tight">
              {plan.name}
            </span>
            {plan.isRecommended && (
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-[0_6px_14px_-8px_rgba(59,130,246,0.55)]">
                {t.membership.recommended}
              </span>
            )}
          </div>
          <div className="flex items-end gap-2">
            <span className="text-neutral-900 text-4xl sm:text-[48px] font-black leading-none tracking-tight">
              {plan.price}
            </span>
            <span className="rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-semibold text-neutral-500">
              {plan.period}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
          {featureItems.map((item) => (
            <div key={item.key} className={getItemClass(item.accent, item.colSpan)}>
              <span className="text-[12px] font-medium text-neutral-500">
                {item.label}
              </span>
              <span
                className={`text-base sm:text-lg font-semibold ${
                  item.accent === 'danger'
                    ? 'text-rose-600'
                    : item.accent === 'primary'
                    ? 'text-blue-700'
                    : 'text-neutral-900'
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const MembershipPlanCardDesktop: React.FC<{ plan: MembershipPlan }> = ({ plan }) => {
  const t = useTranslation();

  const getAccentGradient = (planName: string) => {
    switch (planName) {
      case 'Trial':
        return 'from-[#d9ebff]/70 via-white/90 to-[#f1f7ff]/90'
      case 'Build':
        return 'from-[#d9f7e7]/70 via-white/90 to-[#f2fff7]/90'
      case 'Accelerate':
        return 'from-[#e4dcff]/70 via-white/90 to-[#f5f1ff]/90'
      case 'Scale':
        return 'from-[#ffe6d3]/70 via-white/90 to-[#fff4eb]/90'
      case 'Business':
        return 'from-[#ffe1e1]/70 via-white/90 to-[#fff4f4]/90'
      default:
        return 'from-gray-100/70 via-white/90 to-gray-50/90'
    }
  }

  return (
    <div className="relative group w-full max-w-[220px] xl:max-w-[240px] mx-auto">
      <div className={`pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br ${getAccentGradient(plan.name)} opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-90`} />
      <div className="relative rounded-[28px] border border-white/60 bg-white/95 shadow-[0_22px_55px_-30px_rgba(15,23,42,0.6)] ring-1 ring-black/5 px-6 py-7 flex flex-col gap-6 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_32px_70px_-36px_rgba(15,23,42,0.55)]">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-neutral-900 font-semibold text-xl tracking-tight">
              {plan.name}
            </span>
            {plan.isRecommended && (
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-[0_6px_16px_-8px_rgba(59,130,246,0.45)]">
                {t.membership.recommended}
              </span>
            )}
          </div>
          <div className="flex items-end gap-2">
            <span className="text-neutral-900 text-4xl font-black leading-none tracking-tight">
              {plan.price}
            </span>
            <span className="rounded-full bg-neutral-900/5 px-3 py-1 text-xs font-semibold text-neutral-500">
              {plan.period}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-center shadow-[0_12px_28px_-24px_rgba(15,23,42,0.3)]">
            <span className="block text-xs font-medium text-neutral-500">{t.membership.features.oneTimePurchase}</span>
            <span className="block mt-1 text-sm font-semibold text-neutral-900">
              {plan.features.oneTimePurchase}
            </span>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3 text-center shadow-[0_12px_28px_-24px_rgba(15,23,42,0.3)]">
            <span className="block text-xs font-medium text-neutral-500">{t.membership.features.cumulativePurchase}</span>
            <span className="block mt-1 text-sm font-semibold text-neutral-900">
              {plan.features.cumulativePurchase}
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-blue-200/60 bg-blue-50/70 px-5 py-4 text-center shadow-[0_16px_34px_-26px_rgba(37,99,235,0.55)]">
          <span className="block text-xs font-medium text-blue-600">{t.membership.features.hashPower}</span>
          <span className="block mt-1 text-xl font-bold text-blue-700">{plan.features.hashPower}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-center shadow-[0_12px_28px_-24px_rgba(15,23,42,0.25)]">
            <span className="block text-xs font-medium text-neutral-500">{t.membership.features.oneYear}</span>
            <span className="block mt-1 text-sm font-semibold text-neutral-900">
              {plan.features.oneYear}
            </span>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-center shadow-[0_12px_28px_-24px_rgba(15,23,42,0.25)]">
            <span className="block text-xs font-medium text-neutral-500">{t.membership.features.twoYear}</span>
            <span className="block mt-1 text-sm font-semibold text-neutral-900">
              {plan.features.twoYear}
            </span>
          </div>
        </div>

        <div className="rounded-3xl border border-rose-200/70 bg-rose-50/80 px-5 py-4 text-center shadow-[0_16px_34px_-26px_rgba(244,63,94,0.45)]">
          <span className="block text-xs font-semibold text-rose-500">{t.membership.features.threeYear}</span>
          <span className="block mt-1 text-lg font-bold text-rose-600">{plan.features.threeYear}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-center shadow-[0_12px_28px_-24px_rgba(15,23,42,0.25)]">
            <span className="block text-xs font-medium text-neutral-500">{t.membership.features.projectCount}</span>
            <span className="block mt-1 text-sm font-semibold text-neutral-900">
              {plan.features.projectCount}
            </span>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-center shadow-[0_12px_28px_-24px_rgba(15,23,42,0.25)]">
            <span className="block text-xs font-medium text-neutral-500">{t.membership.features.api}</span>
            <span className="block mt-1 text-sm font-semibold text-neutral-900">
              {plan.features.api}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-center shadow-[0_12px_28px_-24px_rgba(15,23,42,0.25)]">
          <span className="block text-xs font-medium text-neutral-500">{t.membership.features.hashWallet}</span>
          <span className="block mt-1 text-sm font-semibold text-neutral-900">
            {plan.features.hashWallet}
          </span>
        </div>
      </div>
    </div>
  )
}

const MembershipSection: React.FC = () => {
  const t = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % membershipPlans.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + membershipPlans.length) % membershipPlans.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const minSwipeDistance = 50
    const swipeDistance = touchStartX.current - touchEndX.current

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="flex flex-col gap-4 sm:gap-6 items-center text-center mb-12 sm:mb-16">
        <h2 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight max-w-4xl">
          {t.membership.title}
        </h2>
        <p className="text-black text-base sm:text-lg lg:text-xl leading-7 max-w-4xl px-4">
          {t.membership.description}
        </p>
      </div>

      <div className="block md:hidden w-full">
        <div className="relative w-full">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {membershipPlans.map((plan, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6">
                  <div className="flex justify-center pb-10">
                    <MembershipPlanCardMobile plan={plan} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-40 rounded-full bg-white/85 p-2 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label={t.membership.navigation.previous}
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === membershipPlans.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-40 rounded-full bg-white/85 p-2 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label={t.membership.navigation.next}
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-4 gap-3">
            {membershipPlans.map((_, index) => (
              <div
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-4 h-4 bg-blue-500' : 'w-4 h-4 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 items-start justify-items-center max-w-7xl w-full px-4">
        {membershipPlans.map((plan, index) => (
          <MembershipPlanCardDesktop key={index} plan={plan} />
        ))}
      </div>
    </section>
  )
}

export default MembershipSection
