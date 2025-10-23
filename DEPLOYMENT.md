# HashDam GitHub Pages 배포 가이드

## 배포 방법

### 1. 저장소 준비

프로젝트를 GitHub 저장소에 푸시합니다:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

### 2. 프로덕션 빌드

GitHub Actions를 사용하여 자동 배포를 설정하거나, 로컬에서 빌드 후 배포할 수 있습니다.

#### 방법 A: GitHub Actions 사용 (권장)

`.github/workflows/deploy.yml` 파일을 생성합니다:

```yaml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 방법 B: 로컬 빌드 후 배포

```bash
# 빌드
npm run build

# out 폴더 생성 확인
ls out

# gh-pages 브랜치로 배포
npx gh-pages -d out
```

### 3. GitHub Pages 설정

1. GitHub 저장소 페이지로 이동
2. Settings > Pages 메뉴 클릭
3. Source를 "GitHub Actions"로 선택 (방법 A 사용 시)
   또는 "Deploy from a branch"에서 gh-pages 브랜치 선택 (방법 B 사용 시)
4. Save 클릭

### 4. 배포 확인

배포가 완료되면 다음과 같은 URL에서 사이트를 확인할 수 있습니다:

```
https://<username>.github.io/<repository-name>/
```

또는 커스텀 도메인을 설정한 경우:

```
https://hashdam.io
```

## 주의사항

1. **환경 변수**: `.env` 파일은 배포되지 않으므로, 필요한 환경 변수는 GitHub Secrets에 설정하세요.

2. **이미지 경로**: `next.config.js`의 `basePath` 옵션을 저장소 이름에 맞게 설정해야 할 수 있습니다:

```javascript
const nextConfig = {
  basePath: '/repository-name',
  output: 'export',
  // ...
}
```

3. **API Route**: Next.js API Route는 정적 export에서 사용할 수 없습니다. 필요한 경우 별도의 백엔드 서버를 사용하세요.

## 문제 해결

### 이미지가 표시되지 않는 경우

`next.config.js`에 다음 설정을 추가:

```javascript
assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
```

### 스타일이 적용되지 않는 경우

빌드 후 `out` 폴더의 파일 경로를 확인하고, 필요시 `.nojekyll` 파일을 생성:

```bash
touch out/.nojekyll
```

## 참고 자료

- [Next.js GitHub Pages 배포](https://nextjs.org/docs/deployment#github-pages)
- [GitHub Actions](https://docs.github.com/en/actions)
- [gh-pages 패키지](https://github.com/tschaub/gh-pages)

