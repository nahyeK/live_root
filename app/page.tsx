import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white p-8">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold mb-4">대학생과 농촌을 잇는 플랫폼</h1>
        <p className="text-lg text-gray-700 mb-6">
          학생들이 농촌 일손을 돕고 경험을 쌓을 수 있도록, 농가와 학생을 연결하는 서비스입니다. 봉사, 단기 아르바이트, 체험 프로그램 등의 매칭을 간편하게 제공합니다.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <a href="#features" className="px-5 py-3 bg-green-600 text-white rounded-lg">기능 보기</a>
          <a href="#get-started" className="px-5 py-3 border border-green-600 text-green-600 rounded-lg">시작하기</a>
        </div>

        <section id="features" className="text-left bg-white/60 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-3">핵심 기능</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>농가가 작업(일감)을 등록하고 학생이 지원</li>
            <li>지역 기반 탐색 및 지도 보기</li>
            <li>간단한 메시징과 예약/출석 관리</li>
            <li>신뢰를 위한 리뷰와 평점 시스템</li>
          </ul>
        </section>

        <section id="get-started" className="mt-6 text-left">
          <h3 className="text-xl font-medium mb-2">다음 단계</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>인증(회원가입/로그인)과 역할 분기(학생/농가) 구현</li>
            <li>작업 등록 · 신청 · 예약 플로우 개발</li>
            <li>간단한 매칭 알고리즘과 알림 추가</li>
          </ol>
        </section>

        <p className="mt-6 text-sm text-gray-500">(이 프로젝트는 학습 목적의 초기 시제품입니다.)</p>
      </div>
    </main>
  );
}
