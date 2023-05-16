"use client"

import redirect from "@/app/utils/redirect"

interface ButtonProps {
  onClick?: () => void,
  text: string,
  textColor?: string,
  icon?: JSX.Element,
  className?: string,
  redirectPath?: string,
  outline?: boolean
}

const Button = ({
  onClick,
  text,
  textColor,
  icon,
  className,
  redirectPath,
  outline
}: ButtonProps) => {
  return (
    <button onClick={(event) => {
	  onClick && onClick()
	  redirectPath && redirect(redirectPath)
	}} className={`
	  font-semibold
	  font-inter
	  text-base
	  rounded-lg
	  inline-flex
	  items-center
	  gap-2
	  px-4
	  py-2
	  bg-primary
	  w-full
	  lg:w-auto
	  lg:justify-start
	  justify-center
	  ${textColor ? textColor : "text-white hover:bg-purple-800"}
	  ${className}
	  ${outline ? "outline outline-1 outline-gray-300 hover:bg-gray-300 hover:outline-gray-400" : ""}
	`}>{text} {icon}</button>
  )
}

export default Button
