import Image from "next/image"
import Link from "next/link"
import { BsArrowLeftShort } from "react-icons/bs"
import { SiRoblox } from "react-icons/si"

const LittleProject = () => {
  return (
    <main className="flex flex-col gap-16 py-16 max-w-3xl mx-auto">
      <section className="flex gap-4 mx-auto -mb-8 items-center">
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl text-center lg:text-start">Robbery - ett spel för barn</h2>
  	  </section>

	  <Link href="/projects" className="flex gap-4 -mb-12 items-center">
	    <BsArrowLeftShort size={32} color="gray" />
	    <p className="font-medium text-lg text-gray-500">Tillbaka</p>
	  </Link>

	  { /* Sammanfattning */ }
      <section className="flex flex-col gap-4 mx-auto">
		<Image src="/images/projects/little/hero.png" alt="" width={788} height={489} />
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Sammanfattning</h2>
  	    <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl">
		  Mitt spel, utvecklat på Roblox, är ett barnvänligt äventyr där spelare utför ett bankrån inom ramen för en engagerande berättelse. Trots den korta utvecklingstiden har det nått stor framgång, genererat omkring 500 000 kronor, spelats 13 miljoner gånger och uppnått en topp på 2000 samtidiga spelare. Dess framgång bevisar dess kvalitet och förmåga att engagera spelare på ett underhållande sätt.
		</h3>
  	  </section>

	  { /* Utmaningar */ }
      <section className="flex flex-col gap-4">
		<Image src="/images/projects/little/challenges.png" alt="" width={788} height={489} />
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Utmaningar</h2>
  	    <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl space-y-10">
		  <p>Under skapandet av mitt spel på Roblox stötte jag på flera utmaningar. Ett av de största hindren var att utforma spelmekanik som var både engagerande och barnvänlig. Att skapa ett spel med temat bankrån för en yngre publik krävde noga övervägande för att säkerställa att det förblev lämpligt och underhållande.</p>
		  <p>Jag behövde också noggrant planera utvecklingsprocessen givet den begränsade tidsramen. Detta innebar att prioritera vissa aspekter av spelet över andra och att effektivt fördela min tid och resurser.</p>
		  <p>Marknadsföring var ytterligare en utmaning, trots att jag använde Roblox-plattformen. Med tusentals andra spel tillgängliga var det svårt att få mitt spel att sticka ut. Jag lärde mig mycket om att effektivt kommunicera spelets unika drag och skapa en lockande presentation för att attrahera spelare.</p>
		  <p>Dessa utmaningar krävde en hel del problemlösning och kreativitet, men genom att övervinna dem kunde jag skapa ett framgångsrikt och älskat spel.</p>
		</h3>
  	  </section>

	  { /* Lärningar - Reflektioner - Nästa Steg */ }
      <section className="flex flex-col gap-4">
		<Image src="/images/projects/little/learning.png" alt="" width={788} height={489} />
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Lärningar - Reflektioner - Nästa Steg</h2>
  	    <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl space-y-10">
		  <p>Genom att utveckla och marknadsföra mitt spel på Roblox, lärde jag mig vikten av att skapa en balans mellan underhållning och lämplighet för en yngre publik. Jag insåg också hur viktigt det är att noggrant planera och prioritera under utvecklingsprocessen för att kunna leverera en högkvalitativ produkt trots tidsbegränsningar.</p>
		  <p>Jag reflekterade mycket över den utmaning det innebar att göra mitt spel unikt och attraktivt bland tusentals andra spel på Roblox. Detta krävde kreativitet och en stark förståelse för vad min målgrupp ville ha. Jag lärde mig att lyssna på feedback från spelarna och använda den för att förbättra och finjustera spelet.</p>
		  <p>Framåt planerar jag att använda de lärdomar jag fått från detta projekt till att utveckla fler spel. Jag vill fortsätta att förbättra mina färdigheter inom spelutveckling och marknadsföring. Jag planerar också att ta emot mer spelarfeedback för att förstå vad spelarna verkligen uppskattar och vad de vill se i framtida spel. Jag ser fram emot att skapa fler engagerande och underhållande spelupplevelser på Roblox.</p>
		</h3>
  	  </section>

	  { /* Källkod */ }
      <section className="flex flex-col gap-4">
  	    <h3 className="font-semibold font-inter text-xl">Spelet finns tillgängligt här</h3>
        <div className="flex gap-5">
		  <a href="https://www.roblox.com/games/5548533908/Robbery-Story/">
	        <SiRoblox size={32} />
		  </a>
		</div>
  	  </section>
	</main>
  )
}

export default LittleProject
