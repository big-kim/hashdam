import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Vite 관련 요청을 빈 응답으로 처리
  return new NextResponse('', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-store',
    },
  });
}

export async function POST(request: NextRequest) {
  return new NextResponse('', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-store',
    },
  });
}