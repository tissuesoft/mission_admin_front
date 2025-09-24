import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './StoreManagement.css'

// 가게 데이터 타입 정의
interface Store {
  id: number // 가게 ID
  name: string // 가게명
  status: '승인대기' | '승인완료' | '반려' // 승인 상태
  businessType: string // 업종
  mission: string // 미션 내용
  businessHours: string // 영업 시간
}

// 가게 관리 페이지 컴포넌트
function StoreManagement() {
  const navigate = useNavigate()

  // 검색어 상태 관리
  const [searchTerm, setSearchTerm] = useState('')

  // 선택된 상태 필터 (전체 상태, 승인 대기, 승인 완료, 반려)
  const [selectedStatus, setSelectedStatus] = useState('전체 상태')

  // 가게 데이터 (실제로는 API에서 가져올 데이터)
  const [stores] = useState<Store[]>([
    {
      id: 1,
      name: '맛있는 피자집',
      status: '승인대기',
      businessType: '피자 러버 적성하기',
      mission: '피자 리뷰 적성하기',
      businessHours: '대기'
    },
    {
      id: 2,
      name: '치킨랩구니',
      status: '승인완료',
      businessType: '치킨 맛집기 미션',
      mission: '치킨 맛집기 미션',
      businessHours: '승인 완료'
    },
    {
      id: 3,
      name: '한식당 고향',
      status: '반려',
      businessType: '전통 한식 체험하기',
      mission: '전통 한식 체험하기',
      businessHours: '반려'
    },
    {
      id: 4,
      name: '카페 모카',
      status: '승인대기',
      businessType: '커피 맛 리뷰 미션',
      mission: '커피 맛 리뷰 미션',
      businessHours: '대기'
    }
  ])

  // 통계 데이터 계산
  const totalStores = stores.length
  const pendingStores = stores.filter(store => store.status === '승인대기').length
  const approvedStores = stores.filter(store => store.status === '승인완료').length
  const rejectedStores = stores.filter(store => store.status === '반려').length

  // 대시보드로 돌아가는 함수
  const handleBackToDashboard = () => {
    navigate('/dashboard')
  }

  // 가게 상태 변경 함수
  const handleStatusChange = (storeId: number, newStatus: '승인완료' | '반려') => {
    alert(`가게 ID ${storeId}의 상태가 ${newStatus}로 변경되었습니다.`)
    console.log(`가게 ${storeId} 상태 변경: ${newStatus}`)
  }

  // 가게 상세보기 함수
  const handleViewDetails = (storeName: string) => {
    alert(`${storeName} 상세 정보를 확인합니다.`)
    console.log(`${storeName} 상세보기 클릭됨`)
  }

  return (
    <div className="store-management-container">
      {/* 헤더 */}
      <header className="store-header">
        <h1 className="store-title">등록된 가게 & 미션 관리</h1>
        <button className="back-button" onClick={handleBackToDashboard}>
          ← 대시보드로 돌아가기
        </button>
      </header>

      {/* 통계 카드 섹션 */}
      <section className="stats-section">
        <div className="stat-card total">
          <div className="stat-info">
            <span className="stat-label">전체 가게</span>
            <span className="stat-number">{totalStores}</span>
          </div>
          <div className="stat-icon blue">🏪</div>
        </div>

        <div className="stat-card pending">
          <div className="stat-info">
            <span className="stat-label">승인 대기</span>
            <span className="stat-number">{pendingStores}</span>
          </div>
          <div className="stat-icon yellow">⏳</div>
        </div>

        <div className="stat-card approved">
          <div className="stat-info">
            <span className="stat-label">승인 완료</span>
            <span className="stat-number">{approvedStores}</span>
          </div>
          <div className="stat-icon green">✅</div>
        </div>

        <div className="stat-card rejected">
          <div className="stat-info">
            <span className="stat-label">반려</span>
            <span className="stat-number">{rejectedStores}</span>
          </div>
          <div className="stat-icon red">❌</div>
        </div>
      </section>

      {/* 검색 및 필터 섹션 */}
      <section className="search-section">
        <select
          className="status-filter"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="전체 상태">전체 상태</option>
          <option value="승인대기">승인 대기</option>
          <option value="승인완료">승인 완료</option>
          <option value="반려">반려</option>
        </select>

        <input
          type="text"
          placeholder="가게명 검색..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="search-button">🔍 검색</button>
      </section>

      {/* 가게 목록 테이블 */}
      <section className="table-section">
        <table className="stores-table">
          <thead>
            <tr>
              <th>가게명</th>
              <th>사업자등록증</th>
              <th>미션 제목</th>
              <th>상태</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.id}>
                <td>{store.name}</td>
                <td>
                  <button className="view-document-button">
                    📄 보기
                  </button>
                </td>
                <td>{store.mission}</td>
                <td>
                  <span className={`status-badge ${store.status}`}>
                    {store.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    {store.status === '승인대기' && (
                      <>
                        <button
                          className="approve-button"
                          onClick={() => handleStatusChange(store.id, '승인완료')}
                        >
                          ✓ 승인
                        </button>
                        <button
                          className="reject-button"
                          onClick={() => handleStatusChange(store.id, '반려')}
                        >
                          ✗ 반려
                        </button>
                      </>
                    )}
                    {store.status === '승인완료' && (
                      <span className="completed-text">승인 완료</span>
                    )}
                    {store.status === '반려' && (
                      <button
                        className="review-button"
                        onClick={() => handleViewDetails(store.name)}
                      >
                        ⓘ 사유
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default StoreManagement