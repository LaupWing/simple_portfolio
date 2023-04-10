import { GetServerSideProps, NextPage } from "next"
import { ProjectType } from "typings"
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
               <div className="inset-0 p-4 absolute bg-slate-100/30 backdrop-blur">
                  <h2 className="text-slate-900 font-bold text-xl">{ project.name }</h2>
               </div>
            </div>
         </header>
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