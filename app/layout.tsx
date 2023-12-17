import './css/style.css'

// import { Inter, Architects_Daughter } from './node_modules/next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

/* const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
}) */

export const metadata = {
  title: 'Concept2Company',
  description: 'Turn Your Concept Into a Company',
}
//${inter.variable} ${architects_daughter.variable}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}
 