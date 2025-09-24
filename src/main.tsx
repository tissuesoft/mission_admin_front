import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './components/Login.tsx'
import Dashboard from './components/Dashboard.tsx'
import StoreManagement from './components/StoreManagement.tsx'
import NoticeManagement from './components/NoticeManagement.tsx'

// React Router를 사용한 라우팅 설정
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter로 전체 앱을 감싸서 라우팅 기능 활성화 */}
    <Router>
      {/* Routes 컴포넌트 안에 각 경로별 Route 정의 */}
      <Routes>
        {/* 홈 경로 ("/")에서 로그인 페이지 표시 */}
        <Route path="/" element={<Login />} />

        {/* 대시보드 경로 ("/dashboard")에서 대시보드 페이지 표시 */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 가게 관리 경로 ("/store-management")에서 가게 관리 페이지 표시 */}
        <Route path="/store-management" element={<StoreManagement />} />

        {/* 공지사항 관리 경로 ("/notice-management")에서 공지사항 관리 페이지 표시 */}
        <Route path="/notice-management" element={<NoticeManagement />} />
      </Routes>
    </Router>
  </StrictMode>,
)
