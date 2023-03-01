import "react-responsive-carousel/lib/styles/carousel.min.css"
import Head from "next/head"
import { MainNav } from "~/components/global"
import data from "../../data.json"
import { ShortIntro } from "~/components/sections"
import { ProjectCard } from "~/components/cards"
import { Carousel } from "react-responsive-carousel"

export default function Home() {
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
                  <div className="col-span-2 h-40 relative overflow-hidden rounded-2xl flex">
                     <img 
                        className="absolute inset-0 object-cover -z-10" 
                        src="https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="github" 
                     />
                     <div className="inset-0 absolute bg-white/40 backdrop-blur-sm -z-10"/>
                     <Carousel className="flex-1 h-full flex" showThumbs={false}>
                        <div className="flex-1 w-full h-full">Test</div>
                        <div className="flex-1 w-full h-full">Test</div>
                        <div className="flex-1 w-full h-full">Test</div>
                        <div className="flex-1 w-full h-full">Test</div>
                     </Carousel>
                  </div>
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
