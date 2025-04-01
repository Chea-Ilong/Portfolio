import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"

export const metadata: Metadata = {
  title: "Chea Ilong | Software Engineer",
  description: "Personal portfolio of Chea Ilong, Software Engineering Student",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

