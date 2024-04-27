import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'Portfólio | Paulo Victor Torres Silva',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'DevHatt',
    'DevHat',
    'TypeScript',
    'PiluVitu',
    'Pilu Vitu',
    'Paulo Victor',
    'PiluVituDev',
    'Pilu Vitu Dev',
    'Paulo Victor Dev',
    'Paulo Dev',
    'Devopos',
    'PiluTech',
    'TechPilu',
    'Paulo Victor DevOps',
    'Pilu Vitu DevOps',
    'PiluVitu DevOps',
    'Pilu Devopos',
    'Tecnologia',
  ],
  creator: 'Paulo Victor Torres Silva',
  formatDetection: {
    address: false,
    telephone: false,
  },
  publisher: 'PiluTech',
  title: {
    template: '%s | Paulo Victor Torres Silva',
    default: 'Paulo Victor Torres Silva | FullStack Developer',
  },
  description:
    'Programador, capacitado para atender a suas demandas e executar seus projetos. Especializado em TypeScript | React | TailwindCss | Node',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
