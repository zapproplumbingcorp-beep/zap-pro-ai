import './globals.css'
export const metadata = {
  title: 'Zap Pro AI',
  description: 'Zap Pro Plumbing AI Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}