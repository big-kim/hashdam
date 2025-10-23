// 폼 유효성 검사 함수들

export interface FormErrors {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  purpose?: string;
}

export interface FormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  purpose: string;
}

export const validateForm = (data: FormData): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};

  // 회사명 검증
  if (!data.company.trim()) {
    errors.company = '회사명을 입력해주세요.';
  } else if (data.company.length < 2) {
    errors.company = '회사명은 2글자 이상 입력해주세요.';
  }

  // 담당자명 검증
  if (!data.name.trim()) {
    errors.name = '담당자 성명을 입력해주세요.';
  } else if (data.name.length < 2) {
    errors.name = '담당자 성명은 2글자 이상 입력해주세요.';
  }

  // 이메일 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = '이메일을 입력해주세요.';
  } else if (!emailRegex.test(data.email)) {
    errors.email = '올바른 이메일 형식을 입력해주세요.';
  }

  // 연락처 검증
  const phoneRegex = /^[0-9-+\s()]+$/;
  if (!data.phone.trim()) {
    errors.phone = '연락처를 입력해주세요.';
  } else if (!phoneRegex.test(data.phone) || data.phone.length < 8) {
    errors.phone = '올바른 연락처 형식을 입력해주세요.';
  }

  // 문의내용 검증
  if (!data.purpose.trim()) {
    errors.purpose = '도입목적 및 문의사항을 입력해주세요.';
  } else if (data.purpose.length < 10) {
    errors.purpose = '문의사항은 10글자 이상 입력해주세요.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
