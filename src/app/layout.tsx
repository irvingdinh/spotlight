import '@/styles/tailwind.css'

import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

export const metadata: Metadata = {
  title: {
    template: '%s — Irving Dinh',
    default:
      'Irving Dinh — Software engineer, designer, and amateur photographer',
  },
  description:
    'I’m Irving, a software engineer and designer based in Ho Chi Minh City, Viet Nam.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
