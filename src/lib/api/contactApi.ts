// 연락처 폼 API 함수

export interface ContactFormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  purpose: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const submitContactForm = async (formData: ContactFormData): Promise<ContactApiResponse> => {
  try {
    // 실제 API 엔드포인트로 교체 필요
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: true,
      message: '문의가 성공적으로 전송되었습니다.',
      data: result,
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : '문의 전송 중 오류가 발생했습니다.',
    };
  }
};
