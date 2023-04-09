import { ProjectType, SkillsPartial, SkillsType } from "typings"
import { Skill } from "~/components/elements"
import config from "~/config"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { GetServerSideProps, NextPage } from "next"
import { client } from "~/sanity"
import { ProjectCard } from "~/components/cards"

interface ProjectPageProps {
   projects: ProjectType[]
}

const ProjectsPage:NextPage<ProjectPageProps> = ({
   projects
}) => {
   const router = useRouter()
   const [activeSkills, setActiveSkills] = useState<SkillsPartial>(router.query 
      ? Object.keys(router.query) as SkillsPartial 
      : []
   )

   const toggleSkill = (skill: SkillsType[number]) => {
      if(activeSkills.includes(skill)){
         setActiveSkills((prev) => prev.filter(x => x !== skill))
      }else {
         setActiveSkills((prev) => [...prev, skill])
      }
   }
   console.log(projects)
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
   const toggle = () => {
      if(isAllActive){
         setActiveSkills([])
      }else {
         setActiveSkills(config.skills)
      }
   }
   const activeProjects = projects.filter(project => activeSkills.find(x => project.skills.includes(x)) )

   return (
      <>
         <div className="flex flex-col w-full rounded p-4 bg-slate-100 border-2 border-slate-200">
            <p className="mb-3 text-slate-300 pl-1 text-xs font-bold uppercase">I've used the technologies below, but not all projects are listed here.</p>
            <div className="flex gap-x-4">
               <button 
                  className={clsx(
                     "text-xs border-2 duration-200 rounded border-indigo-500 uppercase font-bold px-4",
                     isAllActive
                        ? "text-white bg-indigo-500"
                        : "text-indigo-500 bg-transparent"
                  )}
                  onClick={toggle}
               >
                  Toggle
               </button>
               {config.skills.map(skill => (
                  <Skill 
                     skill={skill}
                     size={30}
                     key={skill}
                     className={clsx(
                        "cursor-pointer duration-200",
                        !activeSkills.includes(skill) ? "text-slate-300" : "text-indigo-500" 
                     )}
                     onClick={() => toggleSkill(skill)}
                  />
               ))}
            </div>
         </div>
         <section className="grid md:grid-cols-2 grid-cols-1 gap-6 overflow-hidden">
            {activeProjects.map((project, i)=> (
               <ProjectCard 
                  project={project}
                  key={i}
               />
            ))}
         </section>
      </>
   )
}
export default ProjectsPage

export const getServerSideProps:GetServerSideProps = async () => {
   const projectsQuery = "*[_type == 'projects']"
   const projects = await client.fetch(projectsQuery)
   
   return {
      props: {
         projects
      }
   }
}