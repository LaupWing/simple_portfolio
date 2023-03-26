import { useState } from "react"
import Head from "next/head"
import { MainNav } from "~/components/global"
import data from "../../data.json"
import { ShortIntro, SlideShow } from "~/components/sections"
import { ProjectCard } from "~/components/cards"
import { NextPage } from "next"

const Home:NextPage = () => {
   const [showCards, setShowCards] = useState(false)
   
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
               <section className="grid grid-cols-2 gap-6 overflow-hidden">
                  <SlideShow />
                  {data.map((item, i)=> (
                     <ProjectCard 
                        description={item.description}
                        title={item.title}
                        index={i}
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