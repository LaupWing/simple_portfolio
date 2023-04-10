import { GetServerSideProps, NextPage } from "next"
import { ProjectType } from "typings"
import { IconExternal, IconGithub, Skill } from "~/components/elements"
import { client, urlFor } from "~/sanity"

const ProjectDetail:NextPage<{project: ProjectType}> = ({ project }) => {
   console.log(project)
   return (
      <>
         <header className="p-2 w-full grid grid-cols-2 gap-6 ">
            <img 
               className="aspect-square rounded-2xl" 
               src={urlFor(project.thumbnail).url()} 
               alt="Image" 
            />
            <div className="aspect-square relative rounded-2xl overflow-hidden">
               <img
                  src={urlFor(project.thumbnail).url()} 
                  alt="Image" 
               />
               <div className="inset-0 p-6 absolute flex flex-col bg-slate-100/40 backdrop-blur">
                  <span className="font-bold text-sm text-slate-900/50">{ project.createdAt }</span>
                  <h2 className="text-slate-900 font-bold text-xl">{ project.name }</h2>
                  <div className="flex gap-x-4 my-2 text-indigo-700">
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
                     <button className="w-20 flex justify-center items-center bg-indigo-500 rounded py-0.5 text-indigo-900 border-indigo-600 border-2 shadow">
                        <IconGithub size={24} />
                     </button>
                     <button className="w-20 flex justify-center items-center bg-indigo-500 rounded py-0.5 text-indigo-900 border-indigo-600 border-2 shadow">
                        <IconExternal size={24} />
                     </button>
                  </div>
               </div>
            </div>
         </header>
         <div className="w-full">

         </div>
      </>
   )
}
export default ProjectDetail

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