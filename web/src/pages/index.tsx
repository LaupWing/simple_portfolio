import type { FC } from "react"
import { useState } from "react"
import { SlideShow } from "~/components/sections"
import { ProjectCard } from "~/components/cards"
import { GetServerSideProps, NextPage } from "next"
import { client } from "~/sanity"
import { ProjectType, SkillsType, SocialType } from "types"
import { motion } from "framer-motion"
import { Social } from "~/components/elements"
import config from "~/config"
import Link from "next/link"

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
            {showCards && <motion.h2 
               className="col-span-full text-xl uppercase font-bold text-slate-300"
               initial={{
                  x: "-100%",
                  opacity: 0
               }}
               animate={{
                  x: 0,
                  opacity: 1,
               }}
            >
               Recent work
            </motion.h2>}
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
                  className="col-span-2 md:col-span-1"
               >
                  <ProjectCard 
                     project={project}
                     key={i}
                  />
               </motion.article>
            ))}
            {showCards && <motion.div
               className="col-span-full"
               initial={{
                  x: "-100%",
                  opacity: 0
               }}
               animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                     delay: projects.length * 0.2
                  }
               }}
            >
               <Link href={{
                  pathname: "/projects",
                  query: (() => {
                     const q:Record<SkillsType[number], boolean> = {} as Record<SkillsType[number], boolean> 
         
                     config.skills.forEach(_skill => {
                        q[_skill] = true
                     })
         
                     return q
                  })()
               }}>
                  <button className="bg-indigo-500 text-white uppercase font-bold text-xs px-4 py-2 rounded shadow tracking-wider flex items-center justify-center">See more</button>
               </Link>
            </motion.div>}
         </section>
         <ContactSection projectsLength={projects.length} />
      </>
   )
}
export default HomePage

export const getServerSideProps:GetServerSideProps = async () => {
   const projectsQuery = "*[_type == 'projects'][0..3] | order(_createdAt asc)"
   const projects = await client.fetch(projectsQuery)
   
   return {
      props: {
         projects
      }
   }
}

const ContactSection:FC<{
   projectsLength: number
}> = ({
   projectsLength
}) => {
   const socials: SocialType[] = [
      "linkedin",
      "github",
      "dribble",
      "instagram",
   ]
   return (
      <motion.div 
         className="relative flex-shrink-0 flex-1 flex rounded-2xl col-span-full overflow-hidden p-10"
         initial={{
            y: "100%",
            opacity: 0
         }}
         animate={{
            y: 0,
            opacity: 1,
            transition: {
               delay: (projectsLength * 0.25) + 0.5
            }
         }}
      >
         <div className="flex flex-col flex-1">
            <h1 className="text-3xl leading-normal">
               Let's connect!
            </h1>
            <p className="my-4 mb-14">
               Feel free to contact me <a href="mailto:laupwin@gmail.com">laupwing@gmail.com</a>
            </p>
            <div className="flex flex-col space-y-8 mt-8 md:space-y-0 md:mt-auto md:flex-row md:space-x-10">
               <Link href={"/contact"} className="flex">
                  <button className="px-9 py-2 mr-auto rounded-full bg-neutral-900 text-white">
                     Contact me
                  </button>
               </Link>
               <div className="space-x-4 flex">
                  {socials.map((social, index) => (
                     <motion.div
                        whileHover={{
                           scale: 0.9,
                        }}
                        key={index}
                     >
                        <a href={config.socials[social]} target="_blank">
                           <Social
                              key={social}
                              name={social}
                           />
                        </a>
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
   )
}

const ShortIntro:FC = () => {
   const socials: SocialType[] = [
      "linkedin",
      "github",
      "dribble",
      "instagram",
   ]

   return (
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
         <motion.div 
            className="relative flex-shrink-0 flex-1 flex rounded-2xl col-span-1 md:col-span-2 overflow-hidden p-10"
            initial={{
               x: "-100%",
               opacity: 0
            }}
            animate={{
               x: 0,
               opacity: 1,
               transition: {
                  delay: .2
               }
            }}
         >
            <div className="flex flex-col flex-1">
               <h1 className="text-3xl leading-normal">
                  Hello, I’m Loc, a fullstack Developer With 6 years of
                  experience.
               </h1>
               <p className="mt-10">
                  I care a lot about using design for positive impact.
                  and enjoy creating user-centric, delightful, and
                  human experiences with code.
               </p>
               <div className="flex flex-col space-y-8 mt-8 md:space-y-0 md:mt-auto md:flex-row md:space-x-10">
                  <Link href={"/contact"} className="flex">
                     <button className="px-9 py-2 mr-auto rounded-full bg-neutral-900 text-white">
                        Contact me
                     </button>
                  </Link>
                  <div className="space-x-4 flex">
                     {socials.map((social, index) => (
                        <motion.div
                           whileHover={{
                              scale: 0.9,
                           }}
                           key={index}
                        >
                           <a href={config.socials[social]} target="_blank">
                              <Social
                                 key={social}
                                 name={social}
                              />
                           </a>
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