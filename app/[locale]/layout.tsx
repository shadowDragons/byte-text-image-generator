import GoogleAnalytics from '@/app/GoogleAnalytics'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { ThemeProvider } from '@/components/ThemeProvider'
import { siteConfig } from '@/config/site'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import '@/styles/loading.css'
import { Analytics } from '@vercel/analytics/react'
import { Viewport } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  icons: siteConfig.icons,
  metadataBase: siteConfig.metadataBase,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
}
export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
}

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <ThemeProvider attribute='class' defaultTheme={siteConfig.defaultNextTheme} enableSystem>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className='flex flex-col items-center py-6'>{children}</main>
            <Footer />
            <Analytics />
            <TailwindIndicator />
          </NextIntlClientProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'development' ? (
          <></>
        ) : (
          <>
            <GoogleAnalytics />
          </>
        )}
      </body>
    </html>
  )
}
