export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* TODO 为什么这里用div包裹会出现水合错误 */}
        marketing layout
        {children}
      </body>
    </html>
  )
}

