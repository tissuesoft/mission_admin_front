import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

// 대시보드 페이지 컴포넌트 - 로그인 후 이동하는 메인 페이지
function Dashboard() {
  // React Router의 useNavigate 훅 - 페이지 이동을 위해 사용
  const navigate = useNavigate()

  // 메뉴 클릭 핸들러 함수
  const handleMenuClick = (menuName: string) => {
    if (menuName === '등록된 가게 관리') {
      // 등록된 가게 관리 클릭 시 가게 관리 페이지로 이동
      navigate('/store-management')
    } else if (menuName === '공지사항 관리') {
      // 공지사항 관리 클릭 시 공지사항 관리 페이지로 이동
      navigate('/notice-management')
    } else {
      // 다른 메뉴들은 아직 구현되지 않음을 알림
      alert(`${menuName} 메뉴는 준비 중입니다.`)
      console.log(`${menuName} 메뉴 클릭됨`)
    }
  }

  return (
    <div className="dashboard-container">
      {/* 대시보드 메인 콘텐츠 */}
      <main className="dashboard-main">
        {/* 메뉴 버튼들 */}
        <div className="menu-buttons">
          {/* 등록된 가게 관리 메뉴 */}
          <button
            className="menu-button"
            onClick={() => handleMenuClick('등록된 가게 관리')}
          >
            등록된 가게 관리
          </button>

          {/* 등록된 광고 관리 메뉴 */}
          <button
            className="menu-button"
            onClick={() => handleMenuClick('등록된 광고 관리')}
          >
            등록된 광고 관리
          </button>

          {/* 공지사항 관리 메뉴 */}
          <button
            className="menu-button"
            onClick={() => handleMenuClick('공지사항 관리')}
          >
            공지사항 관리
          </button>
        </div>

        {/* 하단 버전 정보 */}
        <footer className="dashboard-footer">
          <p>Admin Dashboard v1.0</p>
        </footer>
      </main>
    </div>
  )
}

export default Dashboard