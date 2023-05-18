import Image from "next/image"
import Link from "next/link"
import { BsArrowLeftShort } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"

const PortfolioProject = () => {
  return (
    <main className="flex flex-col gap-16 py-16 max-w-3xl mx-auto">
      <section className="flex gap-4 mx-auto -mb-8 items-center">
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl text-center lg:text-start">Portfolio</h2>
  	  </section>

	  <Link href="/projects" className="flex gap-4 -mb-12 items-center">
	    <BsArrowLeftShort size={32} color="gray" />
	    <p className="font-medium text-lg text-gray-500">Tillbaka</p>
	  </Link>

	  { /* Sammanfattning */ }
      <section className="flex flex-col gap-4 mx-auto">
		<Image src="/images/projects/hero.webp" alt="" width={788} height={489} />
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Sammanfattning</h2>
  	    <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl">
		  <p>Mitt portfolioprojekt är en enkel men effektiv plattform som jag skapat för att presentera alla mina utvecklingsprojekt. Byggd med TypeScript, Tailwind, Next.js och React, och hostad på en egen VPS, fungerar den som mitt digitala skyltfönster för allt jag har åstadkommit inom programmeringen.</p>
		</h3>
  	  </section>

	  { /* Utmaningar */ }
      <section className="flex flex-col gap-4">
		<Image src="/images/projects/challenges.webp" alt="" width={788} height={489} />
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Utmaningar</h2>
  	    <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl space-y-10">
		  <p>Under processen att utveckla och distribuera min portfolio stötte jag på en rad utmaningar. En av de mest betydande var att lära mig att ladda upp hemsidan på en egen VPS och koppla den till en domän. Inledningsvis kunde jag endast åtkomst hemsidan via IP-adressen, inte domänen. Det var först efter noggrann felsökning och justeringar som jag kunde lösa detta problem.</p>
		  <p>En annan utmaning uppstod när hemsidan började frysa och returnera ett 502 Bad Gateway-fel efter en tid. Efter mycket trial & error insåg jag att problemet låg i Next.js image optimization. När jag inaktiverade detta, löstes problemet, men som en konsekvens är hemsidan inte lika snabb med bildladdning. Trots dessa utmaningar var detta en lärorik erfarenhet som förbättrade min förståelse för webbhosting och felsökning.</p>
		</h3>
  	  </section>

	  { /* Lärningar - Reflektioner - Nästa Steg */ }
      <section className="flex flex-col gap-4">
		<Image src="/images/projects/learning.webp" alt="" width={788} height={489} />
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Lärningar - Reflektioner - Nästa Steg</h2>
  	    <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl space-y-10">
		  <p>Genom processen att bygga och driftsätta denna portfolio har jag lärt mig mycket. Jag har fått djupare insikt i komplexiteten av webbhosting och de utmaningar som kommer med att sköta egen serverhantering. Jag har även förstått vikten av felsökning och att navigera genom trial & error för att lösa oväntade problem, såsom de jag stötte på med Next.js image optimization.</p>
		  <p>Denna erfarenhet har också fått mig att reflektera över optimering av webbplatser. Jag har insett att, trots dess fördelar, kan vissa funktioner som bildoptimering ge oväntade problem. Detta har lärt mig vikten av att förstå alla delar av de verktyg jag använder.</p>
		  <p>Mitt nästa steg är att fokusera på att förbättra bildhanteringen på webbplatsen. Jag tänker undersöka alternativa sätt att optimera bilder utan att påverka webbplatsens prestanda eller stabilitet. Dessutom planerar jag att fortsätta utveckla och lägga till nya projekt i min portfolio för att visa mitt fortgående arbete och utveckling inom webbdesign och programmering.</p>
		</h3>
  	  </section>

	  { /* Källkod */ }
      <section className="flex flex-col gap-4">
  	    <h3 className="font-semibold font-inter text-xl">Källkod</h3>
        <div className="flex gap-5">
		  <a href="https://github.com/ilittlebig/sjodinelias.com/">
	        <AiFillGithub size={32} />
		  </a>
		</div>
  	  </section>
	</main>
  )
}

export default PortfolioProject
