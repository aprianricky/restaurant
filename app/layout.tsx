
import type { Metadata } from 'next'
import Header from './components/header'
import Sidebar from './components/sidebar'


export const metadata: Metadata = {
  title: 'Restaurant - Ricky',
  description: 'Ambisius Coding Challenge #230916H',
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-4">{children}</main>
        </div>
      </body>
    </html>
  )
}
