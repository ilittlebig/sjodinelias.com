"use client"

import Button from "@/app/components/elements/button"
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi"
import { FcCheckmark } from "react-icons/fc"

export type ProjectItemType = {
  header: string;
  description: string;
  path: string;
  imagePath: string;
  right: boolean;
  bulletList: string[];
}

interface ProjectsProps {
  h2: string;
  h3: string;
  list: ProjectItemType[];
}

const Projects = ({ h2, h3, list }: ProjectsProps) => {
  return (
    <section className="flex flex-col pt-16 text-gray-900">
      <section className="flex flex-col gap-5 text-center max-w-3xl mx-auto">
  	    <h2 className="font-semibold font-inter text-3xl lg:text-4xl">{h2}</h2>
  	    <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl">{h3}</h3>
  	  </section>

  	<section className="py-16">
  	  { /* Template Project */ }
  	  {list.map((projectItem: ProjectItemType, i: number) => {
  		return (
  		  <div key={i} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32 py-16">
			<div className="hidden lg:block">
  			  {!projectItem.right && (
  			    <div>
  			      <Image src={projectItem.imagePath} alt="" width={768} height={512} />
  			    </div>
  			  )}
			</div>
  
              <section className="flex flex-col gap-8">
  	          { /* Project Description */ }
                <section className="flex flex-col gap-4">
  	            <h2 className="font-semibold font-inter text-2xl lg:text-3xl">{projectItem.header}</h2>
  	            <h3 className="font-regular font-inter text-gray-500 text-base lg:text-lg">{projectItem.description}</h3>
  	          </section>
  
  	          { /* Bullet List */ }
                <ul className="flex flex-col gap-5">
  	            {projectItem.bulletList.map((bulletItem, ii) => {
  	              return (
  	      	        <li key={ii} className="
  	      	     	  font-regular
  	      	     	  font-inter
  	      	     	  text-gray-500
					  text-base
  	      	     	  lg:text-lg
  	      	          inline-flex
  	      	     	  gap-2
  	      	     	  items-center
  	      	        "><FcCheckmark /> {bulletItem}</li>
  	      	      )
  	      	    })}
  	          </ul>
  
  	          <div>
  	            <Button text="Läs mer"
  	              className="py-4 px-6 bg-white text-gray-700"
				  textColor="text-gray-700"
  	              outline
  	              icon={ <FiExternalLink size={24} /> }
  	              redirectPath={ projectItem.path }
  	            />
  	          </div>
  	        </section>
  
			<div className="hidden lg:block">
  			  {projectItem.right && (
  			    <div>
  			      <Image src={projectItem.imagePath} alt="" width={768} height={512} />
  			    </div>
  		      )}
			</div>

			<div className="block lg:hidden">
  			  <Image src={projectItem.imagePath} alt="" width={768} height={512} />
			</div>
  		  </div>
  	    )
  	  })}
      </section>
    </section>
  )
}

export default Projects
