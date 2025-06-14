# Context-aware Learning Interface

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.6-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

고급 언어 학습을 위한 컨텍스트 인지형 대화 인터페이스입니다. 사용자의 언어 학습 상황에 맞춘 대화형 튜터링과 실시간 피드백을 제공합니다.

## 🌟 주요 기능

- **대화형 AI 튜터**: 자연스러운 대화를 통한 언어 학습
- **음성 인식 및 합성**: 실시간 음성 녹음 및 텍스트 변환
- **TTS(Text-to-Speech)**: AI 응답 및 피드백의 음성 재생
- **자동화된 피드백 시스템**: 맥락 기반 언어 사용 분석 및 개선점 제시
- **한국어 지원**: 한국어 학습에 최적화된 인터페이스

## 🏗️ 아키텍처

이 애플리케이션은 최신 React 아키텍처 및 패턴을 따릅니다:

- **컴포넌트 기반 설계**: 재사용 가능한 UI 컴포넌트
- **Context API**: 효율적인 상태 관리
- **타입 안전성**: 엄격한 TypeScript 타입 시스템
- **서비스 계층**: 오디오 처리 등 비즈니스 로직 분리
- **반응형 디자인**: 모든 기기에서 최적화된 사용자 경험

## 📁 프로젝트 구조

```
src/
├── assets/          # 이미지 및 아이콘 리소스
├── components/      # 재사용 가능한 UI 컴포넌트
│   ├── chat/        # 채팅 관련 컴포넌트
│   ├── common/      # 공통 UI 요소
│   ├── feedback/    # 피드백 관련 컴포넌트
│   └── layout/      # 레이아웃 컴포넌트
├── context/         # React Context 정의
├── hooks/           # 커스텀 React 훅
├── services/        # 비즈니스 로직 및 API 호출
├── styles/          # 글로벌 스타일 및 테마
├── types/           # TypeScript 타입 정의
└── utils/           # 유틸리티 함수
```

## 🚀 시작하기

### 사전 요구사항

- Node.js (v16 이상)
- npm (v7 이상) 또는 yarn (v1.22 이상)

### 설치

```bash
# 저장소 복제
git clone https://your-repository-url/learning-interface.git
cd learning-interface

# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 서버 실행

```bash
npm start
# 또는
yarn start
```

애플리케이션은 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 빌드

```bash
npm run build
# 또는
yarn build
```

## 💻 개발 가이드

### 코드 스타일

이 프로젝트는 ESLint와 Prettier를 사용하여 일관된 코드 스타일을 유지합니다:

```bash
# 린트 검사
npm run lint

# 자동 포맷팅
npm run format
```

### 커밋 컨벤션

커밋 메시지는 다음 형식을 따릅니다:

```
<type>(<scope>): <subject>

<body>

<footer>
```

예시:
```
feat(chat): 음성 인식 기능 추가

- 웹 오디오 API를 사용한 음성 녹음 구현
- 녹음된 오디오 처리 로직 추가

Resolves: #123
```

## 📱 사용 방법

애플리케이션은 네 가지 주요 단계로 구성됩니다:

1. **초기 화면**: AI 튜터가 사용자를 맞이하고 학습 상황 선택을 안내합니다.
2. **음성 입력**: 사용자는 마이크 버튼을 사용하여 발화할 수 있습니다.
3. **AI 응답**: AI 튜터가 맥락에 맞는 응답을 제공합니다.
4. **피드백**: 시스템이 사용자의 언어 사용에 대한 자동화된 피드백을 제공합니다.

## 🔧 기술 스택

- **프론트엔드**: React, TypeScript, TailwindCSS
- **상태 관리**: React Context API
- **애니메이션**: Framer Motion
- **UI 컴포넌트**: Headless UI
- **오디오 처리**: Web Audio API
- **음성 합성**: Web Speech API

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.
