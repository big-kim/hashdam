# HashDam 프로젝트 새로운 배포 가이드

## 🚀 GitHub 저장소 새로 설정하여 배포하기

### 1단계: 현재 문제 해결 완료 ✅

다음 문제들이 해결되었습니다:
- ✅ 이미지 경로 문제 수정 (`imagePath.ts` 유틸리티 최적화)
- ✅ Next.js basePath 설정 최적화
- ✅ GitHub Actions 워크플로우 개선
- ✅ 프로덕션 빌드 테스트 완료

### 2단계: GitHub 저장소 정리 및 새 배포

#### 옵션 A: 기존 저장소 정리 후 재배포 (권장)

```bash
# 1. 현재 프로젝트 백업 (이미 완료됨)
# 2. 기존 저장소의 모든 파일 삭제 (GitHub 웹에서 수행)
# 3. 새로운 배포 시작

# 로컬에서 새로운 배포 준비
git add .
git commit -m "Fix: 이미지 경로 문제 해결 및 배포 설정 최적화"
git push origin main
```

#### 옵션 B: 완전히 새로운 저장소 생성

```bash
# 1. GitHub에서 새 저장소 생성 (예: hashdam-website)
# 2. 로컬에서 새 원격 저장소 설정
git remote remove origin
git remote add origin https://github.com/big-kim/hashdam-website.git
git branch -M main
git push -u origin main
```

### 3단계: GitHub Pages 설정

1. **GitHub 저장소 페이지로 이동**
2. **Settings > Pages 메뉴 클릭**
3. **Source를 "GitHub Actions"로 선택**
4. **Save 클릭**

### 4단계: 자동 배포 확인

- 코드를 `main` 브랜치에 푸시하면 자동으로 배포됩니다
- GitHub Actions 탭에서 배포 진행 상황을 확인할 수 있습니다
- 배포 완료 후 `https://big-kim.github.io/hashdam/`에서 확인 가능합니다

## 🔧 수정된 주요 설정

### 1. `src/utils/imagePath.ts`
```typescript
// 이전: 하드코딩된 basePath
const basePath = process.env.NODE_ENV === 'production' ? '/hashdam' : '';

// 수정: Next.js basePath 설정 활용
return normalizedPath; // Next.js가 자동으로 basePath 처리
```

### 2. `next.config.js`
```javascript
// GitHub Pages 배포를 위한 최적화된 설정
...(process.env.NODE_ENV === 'production' && {
  output: 'export',
  trailingSlash: true,
  basePath: '/hashdam',
  assetPrefix: '/hashdam',
}),
```

### 3. `.github/workflows/deploy.yml`
- 빌드 검증 단계 추가
- `.nojekyll` 파일 자동 생성
- 더 안정적인 배포 프로세스

## 🎯 배포 후 확인사항

### 1. 이미지 로딩 확인
- 모든 이미지가 올바르게 표시되는지 확인
- 브라우저 개발자 도구에서 404 오류가 없는지 확인

### 2. 페이지 기능 테스트
- 네비게이션 메뉴 작동 확인
- 언어 전환 기능 확인
- 반응형 디자인 확인

### 3. SEO 및 메타데이터
- 페이지 제목과 설명이 올바르게 표시되는지 확인
- Open Graph 이미지 확인

## 🚨 문제 해결

### 이미지가 여전히 로딩되지 않는 경우
1. 브라우저 캐시 삭제
2. GitHub Pages 배포 완료까지 5-10분 대기
3. 이미지 파일 경로 재확인

### 배포가 실패하는 경우
1. GitHub Actions 로그 확인
2. `npm run build` 로컬 테스트
3. Node.js 버전 확인 (20.x 권장)

## 📝 추천 배포 절차

1. **현재 상태 백업 완료** ✅
2. **GitHub 저장소 모든 파일 삭제**
3. **수정된 코드 푸시**
4. **GitHub Pages 설정**
5. **배포 완료 확인**

이제 이미지 로딩 문제가 해결된 상태로 새롭게 배포할 수 있습니다!