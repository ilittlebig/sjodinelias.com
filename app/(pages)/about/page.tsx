import Image from "next/image"

export default function Home() {
  return (
    <main>
      <title>Om Mig</title>
	  <div className="flex flex-col lg:flex-row gap-6 py-0">
	    <div className="hidden lg:block">
	      <div className="items-center">
	        <Image src="/images/about/portrait.png" alt="" width={500} height={500} />
	      </div>
		</div>

        <section className="flex flex-col lg:w-1/2 pt-16 justify-center text-gray-900">
          <div className="flex flex-col gap-5 text-center max-w-3xl">
  	        <h2 className="font-semibold font-inter text-3xl lg:text-4xl leading-tight">Om Mig</h2>
  	        <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl">Här kan du få en närmare titt på vem jag är, min bakgrund och erfarenheter, samt upptäcka mer om mina intressen och passioner...</h3>
  	      </div>
	    </section>

	    { /* Make the image visible after the header */ }
	    <div className="block lg:hidden pt-16">
	      <div className="items-center">
	        <Image src="/portrait.jpg" alt="" width={500} height={500} />
	      </div>
		</div>
	  </div>

	  <div className="flex flex-col lg:flex-row gap-16 pb-16 pt-16">
	    { /* Bakgrund */ }
        <section className="flex flex-col text-gray-900">
          <div className="flex flex-col gap-5 max-w-3xl">
  	        <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Bakgrund</h2>
  	        <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl space-y-9">
			  <p>Min resa inom programmering började redan vid 9-10 års ålder när jag fick en programmeringsbok som födelsedagspresent från min mamma. Det var en helt ny värld som öppnade sig för mig. Drivande av min nyfikenhet och en brinnande önskan att skapa spel som inte fanns tillgängliga för mig och min kompis, kastade jag mig in i programmeringens spännande värld.</p>
			  <p>Genom den programmeringsboken fick jag grunden och verktygen för att skapa mina egna spel. Det var otroligt givande att se mina idéer och koncept växa till liv, och det gav mig en känsla av stolthet och prestation. Jag spenderade timme efter timme framför datorn, experimenterade, felsökte och lärde mig genom trial and error.</p>
			  <p>Denna tidiga erfarenhet väckte mitt intresse för programmering och gav mig en stadig grund att bygga på. Jag insåg att jag hade funnit min passion och att jag ville fortsätta utforska och utveckla mina kunskaper inom detta område.</p>
			  <p>Sedan dess har jag fortsatt att fördjupa mig inom programmering, utforskat olika språk och teknologier, och har genom åren arbetat med olika projekt och utmaningar. Jag är tacksam för den startpunkt som min mamma gav mig genom att ge mig den programmeringsboken, då den verkligen satte mig på rätt väg och öppnade upp oändliga möjligheter för mig inom den digitala världen.</p>
			</h3>
  	      </div>
	    </section>

	    { /* Intressen */ }
        <section className="flex flex-col text-gray-900">
          <div className="flex flex-col gap-5 max-w-3xl">
  	        <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Intressen</h2>
  	        <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl space-y-9">
			  <p><a className="font-semibold">Fiske</a>: Att ge sig ut på en fisketur är en av mina favoritsysselsättningar. Det ger mig möjlighet att koppla av och njuta av naturen samtidigt som jag utmanar mig själv för att fånga olika fiskarter. Det är en aktivitet som ger mig en känsla av lugn och tillfredsställelse.</p>

			  <p><a className="font-semibold">Backend-programmering</a>: Utöver att programmera som mitt yrke, älskar jag även att utforska och experimentera med backend-programmering på min fritid. Att bygga skalbara och effektiva system, skapa API:er eller utforska nya tekniker ger mig en kreativ utlopp och möjligheten att utveckla mina färdigheter ytterligare.</p>

			  <p><a className="font-semibold">Sällan spelar spel</a>: Även om jag är en programmerare och teknikentusiast spelar jag faktiskt inte spel så ofta. Det är inte min huvudsakliga fritidsaktivitet, men ibland kan jag unna mig att utforska några spännande spel eller delta i en gemenskap med likasinnade spelare.</p>

			  <p><a className="font-semibold">Socialisera och utforska</a>: Jag tycker om att träffa och prata med olika människor. Att dela tankar och idéer, lära mig från andra och skapa meningsfulla relationer är något som jag värdesätter. Dessutom är jag alltid öppen för att upptäcka och hitta på nya aktiviteter och upplevelser tillsammans med vänner och familj.</p>

			  <p><a className="font-semibold">Sammanfattningsvis</a> älskar jag att kombinera min passion för programmering med intressen som fiske, backend-programmering och att umgås med människor. Denna balans mellan teknik, natur och socialt umgänge ger mig en varierad och berikande fritid.</p>
			</h3>
  	      </div>
	    </section>
	  </div>
	</main>
  )
}
