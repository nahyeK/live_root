"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("STUDENT");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user = { email, name, role };
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/profile");
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">로그인 / 회원가입</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700">이름 (선택)</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-sm text-gray-700">이메일</label>
            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full px-3 py-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-sm text-gray-700">역할</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-3 py-2 border rounded-md">
              <option value="STUDENT">학생</option>
              <option value="HOST">농가(호스트)</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">로그인/가입</button>
          </div>
        </form>
      </div>
    </main>
  );
}

