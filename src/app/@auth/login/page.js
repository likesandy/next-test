'use client'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div className="w-[200px] h-[100px] bg-red-500 fixed top-20 left-[220px]">
      <span onClick={() => router.back()}>关闭弹窗</span>
      <h1>Login</h1>
    </div>
  )
}

