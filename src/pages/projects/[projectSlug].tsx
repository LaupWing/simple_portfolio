import { NextPage } from "next"
import { useRouter } from "next/router"

const ProjectDetail:NextPage = ({  }) => {
   const router = useRouter()
   console.log(router.query)
   return (
      <div>ProjectDetail</div>
   )
}
export default ProjectDetail