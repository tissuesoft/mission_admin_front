import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

// 로그인 페이지 컴포넌트
function Login() {
  // React Router의 useNavigate 훅 - 페이지 이동을 위해 사용
  const navigate = useNavigate()

  // 이메일(아이디) 상태 관리
  const [email, setEmail] = useState('')
  // 비밀번호 상태 관리
  const [password, setPassword] = useState('')

  // 로그인 폼 제출 처리 함수
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // 페이지 새로고침 방지

    // 로그인 버튼 클릭 시 바로 대시보드로 이동 (검증 없이)
    console.log('로그인 시도:', { email, password })
    navigate('/dashboard') // 대시보드 페이지로 리다이렉트
  }

  return (
    <div className="login-container">
      {/* 로그인 폼 */}
      <form className="login-form" onSubmit={handleSubmit}>
        {/* 이메일(아이디) 입력 필드 */}
        <input
          type="email"
          placeholder="이메일(아이디)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        {/* 비밀번호 입력 필드 */}
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />

        {/* 로그인 버튼 */}
        <button type="submit" className="login-button">
          로그인
        </button>

        {/* 안내 문구 */}
        <p className="demo-info">
          로그인 버튼을 클릭하면 대시보드로 이동합니다.
        </p>
      </form>
    </div>
  )
}

export default Login