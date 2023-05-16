import Image from "next/image"
import Link from "next/link"
import { BsArrowLeftShort } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"

const LittleProject = () => {
  return (
    <main className="flex flex-col gap-16 py-16 max-w-3xl mx-auto">
      <section className="flex gap-4 mx-auto -mb-8 items-center">
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl text-center lg:text-start">Little - programmeringsspråk</h2>
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
		  Little är ett nytt programmeringsspråk, statiskt skrivet och inspirerat av Lisp, C och Rust. Dess utveckling involverade skapandet av en rad komponenter, inklusive en lexer, parser och assembler, med all kodning utförd i C. Det var en utmanande uppgift, eftersom den krävde behärskning av flera kompilatorkomponenter och inlärning av nya algoritmer.
		</h3>
  	  </section>

	  { /* Utmaningar */ }
      <section className="flex flex-col gap-4">
		<Image src="/images/projects/little/challenges.png" alt="" width={788} height={489} />
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Utmaningar</h2>
  	    <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl space-y-10">
		  <p>Little är funktionellt och har grundläggande funktioner, men det saknar för närvarande väsentliga komponenter som skräpsamling (garbage collection) och användardefinierade typer. För att förbättra prestanda och effektivitet kan ytterligare funktioner som konstant hopfällning (constant folding), loop unrolling och kodinlining implementeras.</p>
		  <p>Utvecklingsprocessen mötte hinder, särskilt bristen på tidigare expertis i Assembly. Framtida utveckling av språket bör fokusera på att inkludera användardefinierade typer och skräpsamling (garbage collection).</p>
		</h3>
  	  </section>

	  { /* Lärningar - Reflektioner - Nästa Steg */ }
      <section className="flex flex-col gap-4">
		<Image src="/images/projects/little/learning.png" alt="" width={788} height={489} />
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Lärningar - Reflektioner - Nästa Steg</h2>
  	    <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl space-y-10">
		  <p>Utvecklingen av Little var en process fylld med lärdomar. Från utmaningarna i att bygga en lexer, parser och assembler i Assembly, till att lära sig nya algoritmer för att implementera olika komponenter, gav varje steg insikter i programmeringsspråkens konstruktion och funktion. Det blev tydligt att att skapa ett språk inte bara kräver teknisk expertis, utan också en djup förståelse för programmerarnas behov och arbetsflöden.</p>
		  <p>Reflektion över processen och det nuvarande tillståndet i Little har belyst flera områden där språket kan förbättras. Det saknar för närvarande viktiga funktioner som garbage collection och användardefinierade typer, vilka är avgörande för att skapa mer komplexa program. Dessutom finns det rum att förbättra effektiviteten genom att lägga till funktioner som constant folding, loop unrolling och code inlining.</p>
		  <p>För att göra Little mer användarvänligt och användbart för programmerare, är nästa steg att tillhandahålla ytterligare dokumentation och utveckla större bibliotek och ramverk. Detta skulle göra det möjligt för programmerare att snabbt och effektivt bygga program med Little. Dessutom bör framtida utveckling av språket fokusera på att lägga till de saknade funktionerna, särskilt garbage collection och användardefinierade typer. Genom att ta dessa steg kan Little utvecklas från ett fungerande programmeringsspråk till ett kraftfullt verktyg för programutveckling.</p>
		</h3>
  	  </section>

	  { /* Källkod */ }
      <section className="flex flex-col gap-4">
  	    <h3 className="font-semibold font-inter text-xl">Källkod</h3>
        <div className="flex gap-5">
		  <a href="https://github.com/ilittlebig/little-lang/">
	        <AiFillGithub size={32} />
		  </a>
		</div>
  	  </section>
	</main>
  )
}

export default LittleProject
