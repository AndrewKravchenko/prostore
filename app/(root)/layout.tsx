import { ReactNode } from 'react'
import { Footer, Header } from '@/shared'

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  )
}

export default RootLayout
