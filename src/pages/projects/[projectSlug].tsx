import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import { ProjectType } from "typings"
import { client } from "~/sanity"

const ProjectDetail:NextPage<{project: ProjectType}> = ({ project }) => {
   const router = useRouter()
   console.log(project)
   return (
      <>
         <header className="p-2 w-full bg-slate-200 rounded">
            <h2>{project.name}</h2>
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