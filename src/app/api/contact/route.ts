import { NextRequest, NextResponse } from 'next/server';

export interface ContactFormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  purpose: string;
  timestamp?: string;
  userAgent?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // 기본 유효성 검사
    const requiredFields = ['company', 'name', 'email', 'phone', 'purpose'];
    for (const field of requiredFields) {
      if (!body[field as keyof ContactFormData]?.trim()) {
        return NextResponse.json(
          { 
            success: false, 
            message: `${field} 필드가 필요합니다.` 
          },
          { status: 400 }
        );
      }
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: '올바른 이메일 형식을 입력해주세요.' 
        },
        { status: 400 }
      );
    }

    // 실제 이메일 발송 로직이나 데이터베이스 저장 로직을 여기에 구현
    // 예시: 이메일 발송 서비스 (SendGrid, AWS SES 등)
    // 예시: 데이터베이스 저장 (Prisma, MongoDB 등)
    
    console.log('Contact form submission:', {
      ...body,
      ip: request.ip || request.headers.get('x-forwarded-for'),
      timestamp: new Date().toISOString(),
    });

    // 임시로 성공 응답 반환
    // 실제 구현에서는 이메일 발송이나 데이터베이스 저장 결과에 따라 응답 변경
    return NextResponse.json({
      success: true,
      message: '문의가 성공적으로 전송되었습니다.',
      data: {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error('Contact API error:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      },
      { status: 500 }
    );
  }
}
