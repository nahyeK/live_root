# API 엔드포인트 초안 (REST 스타일)

아래는 MVP 기능에 필요한 주요 엔드포인트 초안입니다. 인증은 JWT 또는 세션 기반(NextAuth)으로 전제합니다.

## 인증
- POST /api/auth/register -> { email, password, name, role }
- POST /api/auth/login -> { email, password } -> { token/session }
- GET /api/auth/me -> 현재 사용자 정보

## 사용자
- GET /api/users/:id -> 사용자 프로필(공개 정보)

## 작업(Tasks)
- POST /api/tasks -> 작업 생성 (host 권한)
  - body: { title, description, date, location, lat, lng, capacity, rewardPoints }
- GET /api/tasks -> 작업 리스트 (쿼리: ?lat=&lng=&radius=&date=&role=)
- GET /api/tasks/:id -> 작업 상세
- PUT /api/tasks/:id -> 작업 수정 (host 권한)
- DELETE /api/tasks/:id -> 작업 삭제 (host 권한)

## 신청(Application)
- POST /api/tasks/:id/apply -> 작업 신청 (student)
- GET /api/tasks/:id/applications -> 호스트가 신청자 목록 확인
- POST /api/applications/:id/accept -> 호스트 승인
- POST /api/applications/:id/reject -> 호스트 거절

## 메시지
- POST /api/messages -> { fromId, toId, content }
- GET /api/messages?conversationWith=:userId -> 대화 조회

## 리뷰
- POST /api/tasks/:id/review -> 활동 완료 후 리뷰 작성

## 포인트 & 리워드
- GET /api/users/:id/points -> 포인트 조회
- POST /api/rewards/redeem -> 포인트로 리워드 교환

## 운영자(관리자)
- GET /api/admin/stats -> 플랫폼 통계(호스트/학생/작업/완료수)

### 비고
- 권한 체크(호스트만 특정 작업을 수정/삭제 가능 등)
- 입력 검증(스키마 검증, 날짜/위치 포맷)
- 안심을 위해 활동 참여 전 동의서/보험 정보 요구 가능
