import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import { darkTheme } from '@/utils/Themes';
import AuthProvider from './authProvider';

const inter = Inter({ subsets: ['latin'] })

export const meta: Metadata = {
  title: 'Next.js + MUI',
  description: 'Next.js + MUI',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={darkTheme}>
        <AuthProvider>
          <CssBaseline />
          <body className={inter.className}>

            <NavBar />
            <div className="md:mr-[5%] md:ml-[5%] mb-[10%]">{children}</div>
            <Footer />

          </body>
        </AuthProvider>
      </ThemeProvider>
    </html>
  )
}
