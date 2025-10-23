# 배포 완료 가이드

## ✅ 완료된 작업

1. 프로젝트 리팩토링 및 파일 정리 완료
2. Git 저장소 초기화 및 커밋 완료
3. 빌드 성공 (out 폴더 생성됨)
4. GitHub Actions 배포 설정 완료

## 🚀 GitHub Pages 배포 방법

### 방법 1: GitHub Actions 사용 (권장)

1. GitHub에서 새 저장소 생성:
   - https://github.com/new 접속
   - 저장소 이름 입력 (예: hashdam-homepage)
   - Public 또는 Private 선택
   - "Initialize this repository with a README" 체크 해제

2. 로컬 저장소와 연결:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/hashdam-homepage.git
   git branch -M main
   git push -u origin main
   ```

3. GitHub Pages 설정:
   - 저장소 Settings > Pages 메뉴로 이동
   - Source를 "GitHub Actions"로 선택
   - main 브랜치에 푸시하면 자동으로 배포 시작

4. 배포 확인:
   - Actions 탭에서 배포 진행 상황 확인
   - 배포 완료 후 `https://YOUR_USERNAME.github.io/hashdam-homepage/`에서 확인

### 방법 2: 로컬에서 직접 배포

```bash
# gh-pages 패키지 설치 (필요한 경우)
npm install --save-dev gh-pages

# 배포
npm run deploy
```

## 📁 프로젝트 구조

```
hashdam_home_0.2 _backup1.0/
├── .github/workflows/        # GitHub Actions 설정
├── archives/                 # 아카이브된 파일들
├── out/                      # 빌드된 정적 파일 (배포용)
├── public/                   # 정적 파일들
├── src/                      # 소스 코드
├── .gitignore               # Git 무시 파일
├── DEPLOYMENT.md            # 배포 가이드
├── README.md                # 프로젝트 설명
└── package.json             # 프로젝트 설정
```

## 🔧 주요 설정

- **프로덕션 빌드**: 정적 HTML로 빌드 (GitHub Pages 호환)
- **이미지 최적화**: 프로덕션에서 비활성화 (호환성)
- **다국어 지원**: 한국어, 영어, 일본어
- **자동 배포**: GitHub Actions 사용

## 📝 참고사항

- 개발 서버: `npm run dev` (포트 3002)
- 프로덕션 빌드: `npm run build`
- 배포: `npm run deploy`

## 🌐 배포 URL

배포 완료 후 다음 URL에서 확인 가능:
- `https://YOUR_USERNAME.github.io/hashdam-homepage/`

또는 커스텀 도메인을 설정한 경우:
- `https://hashdam.io`

