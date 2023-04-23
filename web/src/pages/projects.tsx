import { ProjectType, SkillsPartial, SkillsType } from "types"
import { Skill } from "~/components/elements"
import config from "~/config"
import { FC, useEffect, useState } from "react"
import clsx from "clsx"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"
import { GetServerSideProps, NextPage } from "next"
import { client } from "~/sanity"
import { ProjectCard } from "~/components/cards"
import toast from "react-hot-toast"

interface ProjectPageProps {
   projects: ProjectType[]
}

const toastStyles = {
   borderRadius: "5px",
   background: "#c7d2fe",
   color: "#1e1b4b",
   borderColor: "#a5b4fc",
   borderWidth: "2px"
}

const ProjectsPage:NextPage<ProjectPageProps> = ({
   projects
}) => {
   const router = useRouter()
   const [showCards, setShowCards] = useState(false)
   const [activeSkills, setActiveSkills] = useState<SkillsPartial>(router.query 
      ? Object.keys(router.query) as SkillsPartial 
      : []
   )
   useEffect(() => {
      const query:Partial<Record<SkillsType[number], boolean>> = {}
      activeSkills.forEach(_skill => {
         query[_skill] = true
      })
      router.push({
         query   
      })
   }, [activeSkills])

   const isAllActive = config.skills.every(x  => (Object.keys(router.query) as SkillsPartial).includes(x))

   const toggleSkill = (skill: SkillsType[number]) => {
      if(activeSkills.includes(skill)){
         setActiveSkills((prev) => prev.filter(x => x !== skill))
         toast((
            <div className="flex items-center">
               filtered out {skill}
               <Skill className="ml-1" skill={skill}/>
            </div>
         ), {
            icon: "🗑️",
            style: toastStyles
         })
      }else {
         toast((
            <div className="flex items-center">
               added skill {skill}
               <Skill className="ml-1" skill={skill}/>
            </div>
         ), {
            icon: "👏",
            style: toastStyles
         })
         setActiveSkills((prev) => [...prev, skill])
      }
   }

   const toggle = () => {
      if(isAllActive){
         toast("Removed all the filters", {
            icon: "🗑️",
            style: toastStyles
         })
         setActiveSkills([])
      }else {
         toast("Added all the filters", {
            icon: "👏",
            style: toastStyles
         })
         setActiveSkills(config.skills)
      }
   }
   const activeProjects = projects.filter(project => activeSkills.find(x => project.skills.includes(x)) )
   const container = {
      hidden: {
         opacity: 0
      },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6,
         },
      },
   }
   const item = {
      hidden: { scale: 0, y: "60%" },
      show: { scale: 1, y: 0 },
   }

   return (
      <>
         <motion.div 
            className="flex flex-col w-full rounded overflow-hidden p-4 bg-slate-100 border-2 border-slate-200"
            variants={container}
            initial="hidden"
            animate="show"
         >
            <p className="mb-3 text-slate-300 pl-1 text-xs font-bold uppercase">I've used the technologies below, but not all projects are listed here.</p>
            <div className="flex gap-x-4 overflow-x-auto md:pb-0 pb-3 overflow-y-hidden">
               <motion.button 
                  initial={{
                     x: "-100%",
                     opacity: 0,
                  }}
                  animate={{
                     x: 0,
                     opacity: 1,
                     transition: {
                        delay: 0.15 * config.skills.length,
                        duration: 0.15
                     }
                  }}
                  className={clsx(
                     "text-xs origin-left border-2 duration-200 rounded border-indigo-500 uppercase font-bold px-4",
                     isAllActive
                        ? "text-white bg-indigo-500"
                        : "text-indigo-500 bg-transparent"
                  )}
                  onClick={toggle}
               >
                  Toggle
               </motion.button>
               {config.skills.map((skill, i) => (
                  <motion.button
                     variants={item}
                     key={skill}
                     onAnimationComplete={() => {
                        if(i === (config.skills.length - 1)){
                           setShowCards(true)
                        }
                     }}
                  >
                     <Skill 
                        skill={skill}
                        size={30}
                        className={clsx(
                           "cursor-pointer duration-200",
                           !activeSkills.includes(skill) ? "text-slate-300" : "text-indigo-500" 
                        )}
                        onClick={() => toggleSkill(skill)}
                     />
                  </motion.button>
               ))}
            </div>
         </motion.div>
         {showCards && <ProjectsContainer projects={activeProjects} />}
      </>
   )
}
export default ProjectsPage

const ProjectsContainer:FC<{
   projects: ProjectType[]
}> = ({
   projects
}) => {
   const container = {
      hidden: {},
      show: {
         transition: {
            staggerChildren: 0.2,
         },
      },
   }
   return (
      <motion.section 
         className="grid md:grid-cols-2 grid-cols-1 gap-6 overflow-hidden"
         variants={container}
         initial="hidden"
         animate="show"
      >
         <AnimatePresence>
            {projects.map((project, i)=> (
               <ProjectCardWithAnimation
                  index={i} 
                  project={project}
                  key={i}
               />
            ))}
         </AnimatePresence>
      </motion.section>
   )
}

const ProjectCardWithAnimation:FC<{
   project: ProjectType
   index: number
}> = ({ project, index }) => {
   const item = {
      hidden: { 
         opacity: 0, 
         y: 20 
      },
      show: { 
         opacity: 1, 
         y: 0 
      }
   }
   return (
      <motion.article
         variants={item}
         exit={{
            opacity: 0,
            x: index % 2 === 0 ? "-100%" : "100%"
         }}
         key={index}
      >
         <ProjectCard 
            project={project}
         />
      </motion.article>
   )
}

export const getServerSideProps:GetServerSideProps = async () => {
   const projectsQuery = "*[_type == 'projects']"
   const projects = await client.fetch(projectsQuery)
   
   return {
      props: {
         projects
      }
   }
}