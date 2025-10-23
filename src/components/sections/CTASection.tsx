'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { validateForm, FormData, FormErrors } from '@/lib/validation/formValidation';
import { submitContactForm } from '@/lib/api/contactApi';
import { pulseAnimation } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';

const CTASection: React.FC = () => {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    purpose: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
  const [fieldValidation, setFieldValidation] = useState<{[key: string]: {isValid: boolean, message: string}}>({});

  // 성공 메시지 자동 사라짐 처리
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setSubmitMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // 각 필드별 검증 함수들
  const validateField = (name: string, value: string) => {
    let isValid = true;
    let message = '';

    switch (name) {
      case 'company':
        if (value.trim().length < 2) {
          isValid = false;
          message = t.cta.form.validation.companyMinLength;
        }
        break;
      
      case 'name':
        if (value.trim().length < 2) {
          isValid = false;
          message = t.cta.form.validation.nameMinLength;
        } else if (!/^[가-힣a-zA-Z\s]+$/.test(value.trim())) {
          isValid = false;
          message = t.cta.form.validation.nameInvalidFormat;
        }
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          isValid = false;
          message = t.cta.form.validation.emailInvalid;
        }
        break;
      
      case 'phone':
        const phoneRegex = /^(010-\d{4}-\d{4}|0[2-9]\d{0,1}-\d{3,4}-\d{4})$/;
        if (!phoneRegex.test(value.trim())) {
          isValid = false;
          message = t.cta.form.validation.phoneInvalid;
        }
        break;
      
      case 'purpose':
        if (value.trim().length < 10) {
          isValid = false;
          message = t.cta.form.validation.purposeMinLength;
        }
        break;
    }

    return { isValid, message };
  };

  // 모든 필드가 채워지고 검증을 통과했는지 확인하는 함수
  const isFormValid = () => {
    const allFieldsFilled = formData.company.trim() !== '' &&
                           formData.name.trim() !== '' &&
                           formData.email.trim() !== '' &&
                           formData.phone.trim() !== '' &&
                           formData.purpose.trim() !== '' &&
                           isPrivacyAgreed;
    
    const allFieldsValid = Object.values(fieldValidation).every(field => field.isValid);
    
    return allFieldsFilled && allFieldsValid && Object.keys(fieldValidation).length === 5;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 실시간 유효성 검사
    if (value.trim() !== '') {
      const validation = validateField(name, value);
      setFieldValidation(prev => ({
        ...prev,
        [name]: validation
      }));
    } else {
      // 빈 값일 때는 검증 상태 제거
      setFieldValidation(prev => {
        const newValidation = { ...prev };
        delete newValidation[name];
        return newValidation;
      });
    }

    // 기존 오류 제거
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handlePrivacyToggle = () => {
    setIsPrivacyAgreed(prev => !prev);
  };

  // 폼 초기화 함수
  const resetForm = () => {
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      purpose: ''
    });
    setIsPrivacyAgreed(false);
    setFieldValidation({});
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 유효성 검사
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus('idle');

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(t.cta.form.successMessage);
        resetForm(); // 성공 후 폼 초기화
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || t.cta.form.errorMessage);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(t.cta.form.networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#d8effa] px-4 sm:px-6 lg:px-8 xl:px-28 py-12 sm:py-16 lg:py-20 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* 모바일: 세로 레이아웃, 데스크톱: 가로 레이아웃 */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-2xl">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight lg:leading-[44px] tracking-[-0.025em] mb-4 lg:mb-6">
              <span className="text-gray-900">{t.cta.title.part1}</span>
              <span className="text-blue-600">{t.cta.title.part2}</span>
              <span className="text-gray-900">{t.cta.title.part3}</span>
            </h2>

            {/* Description */}
            <p className="text-black text-sm sm:text-base lg:text-lg font-semibold leading-5 sm:leading-6 lg:leading-7 mb-4 lg:mb-6">
              {t.cta.description}
            </p>

            {/* Features List */}
            <div className="text-gray-700 text-xs sm:text-sm lg:text-base font-medium leading-5 sm:leading-6 lg:leading-7">
              {t.cta.features.map((feature, index) => (
                <div key={index}>· {feature}</div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="flex-1 lg:max-w-[464px] xl:max-w-[500px]">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Company Name & Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder={t.cta.form.placeholders.company}
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg sm:rounded-xl bg-white/90 px-3 sm:px-4 py-3 sm:py-4 text-gray-900 text-sm sm:text-base font-medium leading-5 sm:leading-6 lg:leading-7 placeholder:text-gray-300 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[44px] ${
                      fieldValidation.company && !fieldValidation.company.isValid 
                        ? 'border-red-500' 
                        : fieldValidation.company && fieldValidation.company.isValid
                        ? 'border-green-500'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  <AnimatePresence>
                    {fieldValidation.company && !fieldValidation.company.isValid && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-xs sm:text-sm mt-1"
                      >
                        {fieldValidation.company.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.cta.form.placeholders.name}
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg sm:rounded-xl bg-white/90 px-3 sm:px-4 py-3 sm:py-4 text-gray-900 text-sm sm:text-base font-medium leading-5 sm:leading-6 lg:leading-7 placeholder:text-gray-300 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[44px] ${
                      fieldValidation.name && !fieldValidation.name.isValid 
                        ? 'border-red-500' 
                        : fieldValidation.name && fieldValidation.name.isValid
                        ? 'border-green-500'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  <AnimatePresence>
                    {fieldValidation.name && !fieldValidation.name.isValid && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-xs sm:text-sm mt-1"
                      >
                        {fieldValidation.name.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.cta.form.placeholders.email}
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg sm:rounded-xl bg-white/90 px-3 sm:px-4 py-3 sm:py-4 text-gray-900 text-sm sm:text-base font-medium leading-5 sm:leading-6 lg:leading-7 placeholder:text-gray-300 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[44px] ${
                      fieldValidation.email && !fieldValidation.email.isValid 
                        ? 'border-red-500' 
                        : fieldValidation.email && fieldValidation.email.isValid
                        ? 'border-green-500'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  <AnimatePresence>
                    {fieldValidation.email && !fieldValidation.email.isValid && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-xs sm:text-sm mt-1"
                      >
                        {fieldValidation.email.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t.cta.form.placeholders.phone}
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg sm:rounded-xl bg-white/90 px-3 sm:px-4 py-3 sm:py-4 text-gray-900 text-sm sm:text-base font-medium leading-5 sm:leading-6 lg:leading-7 placeholder:text-gray-300 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[44px] ${
                      fieldValidation.phone && !fieldValidation.phone.isValid 
                        ? 'border-red-500' 
                        : fieldValidation.phone && fieldValidation.phone.isValid
                        ? 'border-green-500'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  <AnimatePresence>
                    {fieldValidation.phone && !fieldValidation.phone.isValid && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-xs sm:text-sm mt-1"
                      >
                        {fieldValidation.phone.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Purpose */}
              <div>
                <textarea
                  name="purpose"
                  placeholder={t.cta.form.placeholders.purpose}
                  value={formData.purpose}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={4}
                  className={`w-full h-20 sm:h-24 lg:h-[124px] rounded-lg sm:rounded-xl bg-white/90 px-3 sm:px-4 py-3 sm:py-4 text-gray-900 text-sm sm:text-base font-medium leading-5 sm:leading-6 lg:leading-7 placeholder:text-gray-300 resize-none shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    fieldValidation.purpose && !fieldValidation.purpose.isValid 
                      ? 'border-red-500' 
                      : fieldValidation.purpose && fieldValidation.purpose.isValid
                      ? 'border-green-500'
                      : 'border-gray-200 hover:border-gray-300'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                />
                <AnimatePresence>
                  {fieldValidation.purpose && !fieldValidation.purpose.isValid && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    >
                      {fieldValidation.purpose.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Privacy Notice and Submit */}
              <div className="space-y-3">
                {/* Privacy Notice */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrivacyToggle}
                    className={`min-w-[20px] max-w-[20px] min-h-[20px] max-h-[20px] rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                      isPrivacyAgreed
                        ? 'bg-blue-600 border-blue-600'
                        : 'bg-white border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ width: '20px', height: '20px' }}
                    aria-label={t.cta.form.privacyLabel}
                  >
                    {isPrivacyAgreed && (
                      <svg
                        className="text-white"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                  <span className="text-gray-600 text-xs sm:text-sm font-medium leading-5">
                    {t.cta.form.privacyLabel}
                  </span>
                </div>

                {/* Success/Error Message */}
                <AnimatePresence>
                  {submitStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-3 sm:p-4 rounded-lg text-xs sm:text-sm text-center ${
                        submitStatus === 'success'
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : 'bg-red-100 text-red-700 border border-red-300'
                      }`}
                    >
                      {submitMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button - 터치 친화적 크기 (최소 44px) */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className={`w-full rounded-lg sm:rounded-xl px-4 py-3 sm:py-4 text-sm sm:text-base font-medium leading-5 sm:leading-6 lg:leading-7 text-center transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md min-h-[44px] ${
                    isSubmitting
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
                      : isFormValid()
                      ? 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600 hover:border-blue-700'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200 hover:border-gray-300 cursor-not-allowed'
                  }`}
                  whileHover={!isSubmitting && isFormValid() ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && isFormValid() ? { scale: 0.98 } : {}}
                  animate={!isSubmitting && isFormValid() ? pulseAnimation : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      {t.cta.form.submittingButton}
                    </>
                  ) : (
                    t.cta.form.submitButton
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
