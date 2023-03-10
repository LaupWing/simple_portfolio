import "react-responsive-carousel/lib/styles/carousel.min.css"
import Head from "next/head"
import { MainNav } from "~/components/global"
import data from "../../data.json"
import { ShortIntro, SlideShow } from "~/components/sections"
import { ProjectCard } from "~/components/cards"
import { GetServerSideProps, NextPage } from "next"
import config from "config"
import { useEffect } from "react"

const Home:NextPage = (props) => {
   // useEffect(() => {
   //    const init = async () => {
   //       const test = await Promise.all(props.data.map(async x => {
   //          const res = await fetch(`https://api.github.com/repos/laupwing/${x}/commits`)
   //          const data = await res.json()
   //          return data
   //       }))
   //       console.log(test)
   //    }
   //    init()
   // },[])
   return (
      <>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="w-screen h-screen inset-0 flex flex-col overflow-y-auto pb-10 fixed bg-white">
            <MainNav />
            <main className="w-full max-w-4xl mx-auto grid grid-cols-1 gap-6">
               <ShortIntro />
               <section className="grid grid-cols-2 gap-6">
                  <SlideShow />
                  {data.map((item, i)=> (
                     <ProjectCard 
                        description={item.description}
                        image={item.image}
                        title={item.title}
                        key={i}
                     />
                  ))}
               </section>
            </main>
         </div>
      </>
   )
}
export default Home

// export const getServerSideProps:GetServerSideProps = async () => {
//    const res = await fetch(config.github_endpoint + "laupwing/repos?sort=created&per_page=100")
//    const data = await res.json()
//    console.log(data)
   
//    return {
//       props: {
//          data: data.map(x => x.name)
//       }
//    }
// }