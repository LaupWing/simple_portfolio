import type { FC } from "react"
import { useState } from "react"
import { SlideShow } from "~/components/sections"
import { ProjectCard } from "~/components/cards"
import { GetServerSideProps, NextPage } from "next"
import { client } from "~/sanity"
import { ProjectType, SocialType } from "typings"
import { motion } from "framer-motion"
import { Social } from "~/components/elements"

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
                  key={project._id}
                  className="col-span-2 md:col-span-1 mx-4 md:mx-0"
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

const ShortIntro:FC = () => {
   const socials: SocialType[] = [
      "linkedin",
      "github",
      "dribble",
      "instagram",
   ]

   return (
      <section className="w-full grid grid-cols-1 p-4 md:p-0 md:grid-cols-3 gap-6 overflow-hidden">
         <motion.div 
            className="relative flex-shrink-0 flex-1 flex rounded-2xl col-span-1 md:col-span-2 overflow-hidden p-10"
            initial={{
               scale: 0
            }}
            animate={{
               x: 0,
               transition: {
                  delay: .2
               },
               scale: 1
            }}
         >
            <div className="flex flex-col flex-1">
               <h1 className="text-3xl leading-normal">
                  Hello, I’m Loc, a product Designer With 7 years of
                  experience.
               </h1>
               <p className="mt-10">
                  I care a lot about using design for positive impact.
                  and enjoy creating user-centric, delightful, and
                  human experiences.
               </p>
               <div className="flex flex-col space-y-8 mt-8 md:space-y-0 md:mt-auto md:flex-row md:space-x-10">
                  <button className="px-9 py-2 mr-auto rounded-full bg-neutral-900 text-white">
                     Contact me
                  </button>
                  <div className="space-x-4 flex">
                     {socials.map((social) => (
                        <motion.div
                           whileHover={{
                              scale: 0.9,
                           }}
                        >
                           <Social
                              key={social}
                              name={social}
                           />
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
            <img
               className="absolute inset-0 object-cover -z-10"
               src="images/profile.jpg"
               alt="profile image"
            />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl -z-10" />
         </motion.div>
         <motion.img
            className="col-span-1 object-cover aspect-[4/4] object-top md:object-center md:aspect-[4/6] rounded-2xl"
            src="images/profile.jpg"
            alt="profile image"
            initial={{
               x: "110%"
            }}
            animate={{
               x: 0,
               transition: {
                  delay: 0.4
               },
            }}
         />
      </section>
   )
}