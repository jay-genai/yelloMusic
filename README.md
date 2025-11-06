# 옐로뮤직 음악학원 웹사이트

옐로뮤직 음악학원의 공식 웹사이트입니다.

## 🎵 프로젝트 정보

- **기술 스택**: React + TypeScript + Vite
- **스타일링**: TailwindCSS
- **라우팅**: React Router v6
- **애니메이션**: Framer Motion
- **배포**: Vercel

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout
│   ├── home/            # 메인 페이지 컴포넌트
│   └── common/          # 공통 컴포넌트
├── pages/
│   ├── Home.tsx         # 메인 홈
│   ├── about/           # 학원소개 (인사말, 강사소개, 갤러리)
│   ├── courses/         # 교육과정 (피아노, 드럼, 바이올린 등)
│   └── inquiry/         # 수강문의 (FAQ, Contact)
├── App.tsx              # 라우팅 설정
└── main.tsx             # 앱 진입점
```

## 🚀 시작하기

### 개발 서버 실행

```bash
npm install
npm run dev
```

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 🌐 배포 (Vercel)

1. GitHub에 레포지토리 생성 및 푸시
2. Vercel에서 Import Project
3. 자동 빌드 및 배포

또는 Vercel CLI 사용:

```bash
npm install -g vercel
vercel
```

## 📄 페이지 구조

### 1. 메인홈 (/)

- 학원 소개 요약
- 주요 교육과정 소개
- CTA 섹션

### 2. 학원소개 (/about)

- 인사말 (/about/greeting)
- 강사소개 (/about/instructors)
- 갤러리 (/about/gallery)

### 3. 교육과정 (/courses)

- 클래식 피아노
- 재즈 피아노
- 교회반주
- 우쿨렐레
- 드럼
- 바이올린
- 작곡&미디

### 4. 수강문의 (/inquiry)

- 자주묻는 질문 (/inquiry/faq)
- 1:1 문의하기 (/inquiry/contact)

## 📱 주요 기능

- ✅ 완전 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 호버 시 드롭다운 메뉴
- ✅ 부드러운 애니메이션
- ✅ 교육과정별 상세 페이지
- ✅ FAQ 아코디언 메뉴
- ✅ 문의 폼

## 🔗 관련 링크

- [네이버 블로그](https://blog.naver.com/yellomusic)
- [유튜브 채널](https://www.youtube.com/@yello_music)

## 📝 라이선스

Copyright © 2025 옐로뮤직 음악학원. All rights reserved.
