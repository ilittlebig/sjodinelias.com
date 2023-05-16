import React, { ReactNode } from "react"
import Navbar from "@/app/components/modules/navbar"
import "./globals.css"

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto px-4 lg:px-0">
		<Navbar />
	    <main>{children}</main>
	  </body>
    </html>
  )
}
