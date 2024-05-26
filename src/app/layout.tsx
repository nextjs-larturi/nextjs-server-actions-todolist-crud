import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/navbar'
import { Toaster } from 'sonner'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Next.js Server Actions TodoList',
  description: 'Next.js Server Actions TodoList'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className='px-4'>
            {children} <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
