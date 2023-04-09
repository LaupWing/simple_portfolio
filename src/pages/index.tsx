import { useState } from "react"
import { ShortIntro, SlideShow } from "~/components/sections"
import { ProjectCard } from "~/components/cards"
import { GetServerSideProps, NextPage } from "next"
import { client } from "~/sanity"
import { ProjectType } from "typings"
import { motion } from "framer-motion"

interface HomePageProps {
   projects: ProjectType[]
}

const HomePage:NextPage<HomePageProps> = ({ projects }) => {
   const [showCards, setShowCards] = useState(false)
   
   return (
      <>
         <ShortIntro />
         <section className="grid md:grid-cols-2 grid-cols-1 gap-6 overflow-hidden">
            <SlideShow 
               animationEnded={() => {
                  setShowCards(true)
               }}
            />
            {(projects && showCards) && projects.map((project, i)=> (
               <motion.article
                  initial={{
                     opacity: 0,
                     x: i % 2 === 0 ? "-100%" : "100%"
                  }}
                  whileInView={{
                     opacity: 1,
                     x: 0
                  }}
               >
                  <ProjectCard 
                     project={project}
                     key={i}
                  />
               </motion.article>
            ))}
         </section>
      </>
   )
}
export default HomePage

export const getServerSideProps:GetServerSideProps = async () => {
   const projectsQuery = "*[_type == 'projects']"
   const projects = await client.fetch(projectsQuery)
   
   return {
      props: {
         projects
      }
   }
}