"use client"

import { useState, useEffect } from "react"
import Button from "@/app/components/elements/button"
import Link from "next/link"
import { IoMdArrowDropdown } from "react-icons/io"
import { Spin as Hamburger } from 'hamburger-react'

interface NavigationItem {
  name: string;
  href: string;
}

const navigations: NavigationItem[] = [
  { name: "Hem", href: "/" },
  { name: "Projekt", href: "/projects" },
  { name: "Kontakta", href: "/contact" },
  { name: "Om", href: "/about" },
]

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
	return () => {
      document.body.style.overflow = "unset"
	}
  }, [isOpen])

  return (
    <nav className="flex gap-8 h-20 items-center">
	  { /* Main title */ }
      <Link href="/" className="flex tracking-widest">
        <p className="font-semibold font-inter text-4xl">ELIAS</p>
        <p className="font-bold font-inter text-purple-700 text-4xl">.</p>
	  </Link>

	  { /* Navigation */ }
      <div className="flex w-full px-4 gap-8">
	    {navigations.map((item, i) => {
          return <Link key={i} href={item.href} className="font-semibold font-inter text-base text-gray-500 hidden lg:block hover:text-gray-700">{item.name}</Link>
	    })}
	  </div>

	  { /* CTA */ }
      <div className="flex items-center gap-4 hidden lg:block">
	    <Link href="/" className="flex items-center p-2.5 gap-1 hidden">
          <p className="font-semibold font-inter text-base text-gray-500">sv</p>
		  <IoMdArrowDropdown color="gray" />
		</Link>
	    <Button text="Kontakta" redirectPath="/contact" />
	  </div>

	  { /* Hamburger Menu */ }
	  <div className="block lg:hidden z-20">
	    <Hamburger size={32} toggled={isOpen} toggle={setOpen} />
	  </div>

	  { /* Mobile Navigation */ }
	  <div className={`${isOpen ? "block" : "hidden"} flex flex-col absolute inset-y-0 right-0 bg-white w-2/3 h-screen z-10 shadow-xl lg:hidden px-4 py-4 justify-between`}>
        <div className="flex flex-col gap-8 z-20 py-28">
	      {navigations.map((item, i) => {
            return <a key={i} href={item.href} className="font-semibold font-inter text-base text-gray-500 hover:text-gray-700">{item.name}</a>
	      })}
	    </div>
	    <Button text="Kontakta" redirectPath="/contact" />
	  </div>
	</nav>
  )
}

export default Navbar
