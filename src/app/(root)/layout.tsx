import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from 'next/font/google'

import '../globals.css'
import LeftSidebar from "@/components/shared/LeftSidebar"
import RightSidebar from "@/components/shared/RightSidebar"
import Bottombar from "@/components/shared/Bottombar"
import TopBar from "@/components/shared/Topbar"

export const metadata = {
  title: 'Threads',
  description: 'A Next JS 14 Meta Threads Application'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar/>

          <main className="flex flex-row">
            <LeftSidebar/>

            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>

            <RightSidebar/>
          </main>

          <Bottombar/>
        </body>
      </html>
    </ClerkProvider>
  )
}