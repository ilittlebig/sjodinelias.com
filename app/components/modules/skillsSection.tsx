import { AiFillStar } from "react-icons/ai"

interface SkillItem {
  name: string;
}

const skillsList: SkillItem[][] = [
  [
    { name: "Next.js" },
    { name: "React" },
    { name: "JavaScript" },
  ],
  [
    { name: "Lua" },
    { name: "C" },
    { name: "TypeScript" },
  ],
]

const SkillsSection = () => {
  return (
    <section className="flex flex-col bg-gray-50 items-center text-center pb-24">
      <div className="flex flex-col gap-3 pt-16">
        <h4 className="font-semibold font-inter text-primary text-base">Viktiga</h4>
        <h2 className="font-semibold font-inter text-4xl">Kompetenser</h2>
      </div>
      
      <div className="flex flex-col gap-16 pt-16">
        {skillsList.map((category, i) => {
          return (
            <div key={i} className="flex flex-col lg:flex-row gap-16 lg:gap-28">
              {category.map((skill, ii) => {
                return (
                  <section key={ii} className="flex flex-col gap-5">
      		        <section className="flex gap-5">
                      <AiFillStar size={48} color={"#6941C6"} />
                      <AiFillStar size={48} color={"#6941C6"} />
      			      <AiFillStar size={48} color={"#6941C6"} />
      			      <AiFillStar size={48} color={"#6941C6"} />
                    </section>
      	  	  	    <h3 className="font-medium font-inter text-xl">{skill.name}</h3>
        	      </section>
      	        )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection
