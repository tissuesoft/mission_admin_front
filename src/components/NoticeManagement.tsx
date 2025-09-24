import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NoticeManagement.css'

// 공지사항 관리 페이지 컴포넌트
function NoticeManagement() {
  const navigate = useNavigate()

  // 제목 상태 관리
  const [title, setTitle] = useState('')
  // 내용 상태 관리
  const [content, setContent] = useState('')

  // 대시보드로 돌아가는 함수
  const handleBackToDashboard = () => {
    navigate('/dashboard')
  }

  // 공지사항 등록 처리 함수
  const handleSubmit = () => {
    // 입력값 검증
    if (!title.trim()) {
      alert('공지사항 제목을 입력해주세요.')
      return
    }

    if (!content.trim()) {
      alert('공지사항 내용을 입력해주세요.')
      return
    }

    // 공지사항 등록 처리 (실제 구현 시에는 서버 API 호출)
    console.log('공지사항 등록:', { title, content })
    alert('공지사항이 성공적으로 등록되었습니다!')

    // 입력 필드 초기화
    setTitle('')
    setContent('')
  }

  return (
    <div className="notice-management-container">
      {/* 헤더 */}
      <header className="notice-header">
        <button className="back-button" onClick={handleBackToDashboard}>
          ← 대시보드로 돌아가기
        </button>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="notice-main">
        {/* 페이지 제목 */}
        <h1 className="notice-page-title">공지사항 작성</h1>

        {/* 공지사항 작성 폼 */}
        <div className="notice-form">
          {/* 제목 섹션 */}
          <div className="form-section">
            <label className="form-label">제목</label>
            <input
              type="text"
              placeholder="공지 제목 입력"
              className="title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* 내용 섹션 */}
          <div className="form-section">
            <label className="form-label">내용</label>
            <textarea
              placeholder="공지 내용을 입력하세요"
              className="content-textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
            />
          </div>

          {/* 등록 버튼 */}
          <button className="submit-button" onClick={handleSubmit}>
            공지사항 등록
          </button>
        </div>
      </main>
    </div>
  )
}

export default NoticeManagement