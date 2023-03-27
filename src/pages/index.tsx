import { useState } from "react"
import { Layout } from "~/components/global"
import data from "../../data.json"
import { ShortIntro, SlideShow } from "~/components/sections"
import { ProjectCard } from "~/components/cards"
import { GetServerSideProps, NextPage } from "next"
import { client } from "~/sanity"

const Home:NextPage = (props) => {
   console.log(props)
   const [showCards, setShowCards] = useState(false)
   
   return (
      <Layout>
         <ShortIntro />
         <section className="grid md:grid-cols-2 grid-cols-1 gap-6 overflow-hidden">
            <SlideShow 
               animationEnded={() => {
                  setShowCards(true)
               }}
            />
            {showCards && data.map((item, i)=> (
               <ProjectCard 
                  description={item.description}
                  title={item.title}
                  index={i}
                  key={i}
               />
            ))}
         </section>
      </Layout>
   )
}
export default Home

export const getServerSideProps:GetServerSideProps = async () => {
   const projectsQuery = "*[_type == 'projects']"
   const projects = await client.fetch(projectsQuery)
   console.log(projects)
   console.log("test")
   return {
      props: {
         projects
      }
   }
}