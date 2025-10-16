"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = { name?: string; email?: string; role?: string } | null;

export default function ProfilePage() {
  const [user, setUser] = useState<User>(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      setUser(null);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  }

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl p-6 text-center">
          <h1 className="text-2xl font-bold mb-4">로그인이 필요합니다</h1>
          <p className="text-gray-600">로그인 후 프로필을 확인하세요.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">내 프로필</h1>
        <p className="text-gray-700">이름: {user.name ?? '-'}</p>
        <p className="text-gray-700">이메일: {user.email}</p>
        <p className="text-gray-700">역할: {user.role}</p>

        <div className="mt-4 flex gap-3">
          <button onClick={() => router.push('/tasks')} className="px-4 py-2 bg-green-600 text-white rounded-md">작업 보기</button>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md">로그아웃</button>
        </div>
      </div>
    </main>
  );
}

