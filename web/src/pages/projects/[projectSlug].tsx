import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import { FC, useRef, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import { ProjectType } from "typings"
import { IconExternal, IconGithub, Skill } from "~/components/elements"
import { BlockContent } from "~/components/sections"
import { client, urlFor } from "~/sanity"

const ProjectDetail:NextPage<{project: ProjectType}> = ({ project }) => {
   const [currentImage, setCurrentImage] = useState(project.images[0])
   const changedItem = (index:number) => {
      setCurrentImage(project.images[index])
   }
   const router = useRouter()

   return (
      <>
         <motion.button 
            className="mr-auto bg-indigo-500 text-white uppercase font-bold text-xs px-4 py-1 rounded shadow tracking-wider"
            onClick={() => router.back()}
            initial={{
               x: "-100%",
               opacity: 0
            }}
            animate={{
               x: 0,
               opacity: 1,
               transition: {
                  delay: 1.2
               }
            }}
         >
            Back
         </motion.button>
         <header className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <motion.div
               className="aspect-square border shadow rounded-2xl overflow-hidden flex"
               initial={{
                  x: "-100%"
               }}
               animate={{
                  x: 0
               }}
            >
               <Carousel
                  showThumbs={false}
                  showStatus={false}
                  onChange={changedItem}
               >
                  {project.images.map(image => (
                     <ProjectImage 
                        image={image}
                        key={image._key}
                     />
                  ))}
               </Carousel>
            </motion.div>
            <motion.div
               className="border shadow rounded-2xl"
               initial={{
                  opacity: 0
               }}
               animate={{
                  opacity: 1,
                  transition: {
                     delay: 0.4
                  }
               }}
            >
               <ProjectInfo 
                  currentImage={currentImage}
                  project={project}
               />
            </motion.div>
         </header>
         <motion.div 
            className="w-full p-6 bg-slate-100 border-2 border-slate-200 rounded-2xl shadow"
            initial={{
               opacity: 0,
               y: "50%"
            }}
            animate={{
               opacity: 1,
               y: 0,
               transition: {
                  delay: 0.7
               }
            }}
         >
            <BlockContent value={project.content} />
         </motion.div>
      </>
   )
}
export default ProjectDetail

const ProjectInfo:FC<{
   currentImage: ProjectType["thumbnail"],
   project: ProjectType
}> = ({
   currentImage,
   project
}) => {
   return (
      <div className="aspect-square shadow relative rounded-2xl overflow-hidden">
         <AnimatePresence>
            <motion.img
               src={urlFor(currentImage).url()} 
               key={urlFor(currentImage).url()} 
               alt="Image" 
               className="flex-1 h-full w-full object-cover"
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            />
         </AnimatePresence>
         <div className="inset-0 p-6 absolute flex flex-col bg-slate-100/80 backdrop-blur">
            <span className="font-bold text-sm text-slate-900/50">{ project.createdAt }</span>
            <h2 className="text-slate-900 font-bold text-xl">{ project.name }</h2>
            <div className="flex gap-x-4 my-2 text-indigo-600">
               {project.skills.map(skill => (
                  <Skill 
                     key={skill}
                     skill={skill}
                     size={30}
                  />
               ))}
            </div>
            <p className="text-sm text-slate-900">{project.description}</p>
            <div className="flex gap-x-4 mt-auto">
               <a href={project.github} target="_blank">
                  <button className="w-20 flex justify-center items-center bg-indigo-500 rounded py-0.5 text-indigo-900 border-indigo-600 border-2 shadow">
                     <IconGithub size={24} />
                  </button>
               </a>
               <a href={project.url} target="_blank">
                  <button className="w-20 flex justify-center items-center bg-indigo-500 rounded py-0.5 text-indigo-900 border-indigo-600 border-2 shadow">
                     <IconExternal size={24} />
                  </button>
               </a>
            </div>
         </div>
      </div>
   )
}

const ProjectImage:FC<{
   image: ProjectType["images"][number]
}> = ({
   image
}) =>{
   const el = useRef<HTMLDivElement>(null)
   const [fullscreen, setFullScreen] = useState(false)
   
   const toggleFullscreen = () => {
      if(fullscreen){
         document.exitFullscreen()
         setFullScreen(false)
      }else {
         el.current?.requestFullscreen()
         setFullScreen(true)
      }
   }
   return (
      <div 
         className="flex items-center justify-center flex-1 relative"
         ref={el}
      >
         <button 
            className="absolute mx-auto top-2 px-4 py-1 font-bold text-xs rounded text-white uppercase bg-indigo-500/20"
            onClick={toggleFullscreen}
         >
            {fullscreen ? "Minimize" : "Full screen"}
         </button>
         <img 
            className={clsx( fullscreen 
               ? "w-full h-auto" 
               : "flex-1 h-full w-full object-cover"
            )} 
            src={urlFor(image).url()} 
            alt="image" 
         />
      </div>
   )
}

export const getServerSideProps:GetServerSideProps = async ({ params }) => {
   const projectQuery = "*[_type == 'projects' && slug.current == $slug][0]"
   const q = {
      slug: params!.projectSlug
   }
   const project = await client.fetch(projectQuery, q)
   
   return {
      props: {
         project
      }
   }
}