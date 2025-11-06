# Vercel 배포 가이드

## 🚀 Vercel 배포 방법

### 방법 1: GitHub 연동 (권장)

1. **GitHub 레포지토리 생성**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: 옐로뮤직 웹사이트"
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

2. **Vercel 연동**

   - [Vercel](https://vercel.com) 접속 및 로그인
   - "New Project" 클릭
   - GitHub 레포지토리 Import
   - 프로젝트 설정:
     - **Framework Preset**: Vite
     - **Root Directory**: ./
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - "Deploy" 클릭

3. **자동 배포 설정**
   - main 브랜치에 푸시할 때마다 자동 배포됨
   - 프리뷰 배포: PR 생성 시 자동 프리뷰 URL 생성

### 방법 2: Vercel CLI

1. **Vercel CLI 설치**

   ```bash
   npm install -g vercel
   ```

2. **로그인**

   ```bash
   vercel login
   ```

3. **배포**

   ```bash
   vercel
   ```

4. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

## 🌐 커스텀 도메인 설정

1. Vercel 프로젝트 대시보드 접속
2. Settings → Domains
3. 도메인 입력 및 DNS 설정
4. HTTPS 자동 적용

## 📝 환경 변수 (필요시)

Vercel 대시보드에서 Environment Variables 설정:

- Settings → Environment Variables
- 키-값 추가

## ✅ 배포 전 체크리스트

- [x] 빌드 성공 확인 (`npm run build`)
- [x] 로컬 프리뷰 확인 (`npm run preview`)
- [x] vercel.json 설정 완료
- [x] .gitignore 설정 완료
- [ ] 실제 이미지/동영상 추가 (현재는 플레이스홀더)
- [ ] 문의 폼 이메일 연동 (EmailJS, Formspree 등)
- [ ] SEO 메타 태그 추가 (선택사항)

## 🔧 트러블슈팅

### 404 에러

- `vercel.json`에 rewrites 설정이 있는지 확인
- React Router 사용 시 필수

### 빌드 실패

- Node.js 버전 확인 (20.19+ 권장)
- 로컬에서 `npm run build` 성공 여부 확인

### 스타일 미적용

- TailwindCSS 설정 확인
- `tailwind.config.js`와 `postcss.config.js` 확인

## 📱 성능 최적화 (선택사항)

- 이미지 최적화 (WebP, lazy loading)
- 코드 스플리팅
- Lighthouse 점수 확인
