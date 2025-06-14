import React from 'react';
import Header from './Header';
import ChatContainer from '../chat/ChatContainer';
import MicButton from '../common/MicButton';
import FeedbackPanel from '../feedback/FeedbackPanel';

/**
 * 메인 레이아웃 컴포넌트
 * 애플리케이션의 전체 레이아웃 구조를 정의합니다
 */
const MainLayout: React.FC = () => {
  return (
    <div className="v1_248">
      <Header />
      <ChatContainer />
      <MicButton />
      <FeedbackPanel />
    </div>
  );
};

export default MainLayout;
