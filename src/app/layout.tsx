"use client";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "../components/navBar";

const inter = Inter({ subsets: ['latin'] })

export const meta: Metadata = {
  title: 'Next.js + MUI',
  description: 'Next.js + MUI',
  viewport: 'width=device-width, initial-scale=1.0',
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body className={inter.className}>
          <NavBar />
          <div>{children}</div></body>
      </ThemeProvider>
    </html>
  )
}
