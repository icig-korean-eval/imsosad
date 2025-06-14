import React from 'react';
import './styles/globals.css';
import './styles/learningInterface.css';
import { LearningProvider } from './context/LearningContext';
import MainLayout from './components/layout/MainLayout';

/**
 * 애플리케이션의 최상위 컴포넌트
 * 모든 컨텍스트 및 레이아웃을 포함합니다
 */
const App: React.FC = () => {
  return (
    <LearningProvider>
      <MainLayout />
    </LearningProvider>
  );
};

export default App;
