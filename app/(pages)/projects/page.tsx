"use client"

import Projects, { ProjectItemType } from "@/app/components/modules/projects"

const projectsList: ProjectItemType[] = [
  {
    header: "Programmeringsspråk",
	description: "Little är ett funktionellt programmeringsspråk inspirerat av Lisp, C och Rust med potential för vidare utveckling.",
	bulletList: [
	  "Användarvänligt",
	  "Lättviktigt",
	  "Snabbt",
	],
	path: "/projects/little",
	imagePath: "/language.svg",
	right: true
  },
  {
    header: "Spel för barn",
	description: "Detta Roblox-spel låter barn utforska spänningen i att planera ett bankrån och försöka fly undan lagen, allt i en säker och barnvänlig miljö.",
	bulletList: [
	  "2,000st spelare samtidigt",
	  "12,426,246st spelningar sammanlagt",
	  "≈ 500,000kr i intäkter",
	],
	path: "/projects/robbery",
	imagePath: "/robbery.svg",
	right: false
  },
]

export default function Home() {
  return (
    <main>
	  <Projects
	    h2="Det här är mina projekt"
		h3="Här kan du läsa om mina projekt, deras framgångar, arbetsprocesser, tidsåtgång och motivationsfaktorer. Känn ingen stress att läsa allt på en gång, innehållet kommer finnas tillgängligt för dig även senare."
		list={...projectsList}
	  />
	</main>
  )
}
