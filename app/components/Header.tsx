"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type User = {
  name?: string;
  email?: string;
  role?: string;
};

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
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

  return (
    <header className="w-full border-b bg-white/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">대학생-농촌 플랫폼</Link>

        <nav className="flex items-center gap-3">
          <Link href="/tasks" className="text-sm text-gray-700">작업</Link>
          <Link href="/map" className="text-sm text-gray-700">지도</Link>
          <Link href="/messages" className="text-sm text-gray-700">메시지</Link>

          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="px-3 py-1 rounded-full bg-gray-100 text-sm">{user.name ?? user.email}</Link>
              <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded-md text-sm">로그아웃</button>
            </div>
          ) : (
            <Link href="/auth" className="px-4 py-2 bg-green-600 text-white rounded-md">로그인</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
