import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children, team, analytics, auth }) {
  return (
    <html>
      <body>
        <Link href="/login">去登录</Link>
        <br />
        <Link href="/">返回首页</Link>
        {children}
        {team}
        {analytics}
        {auth}
      </body>
    </html>
  )
}
