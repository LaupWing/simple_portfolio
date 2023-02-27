import Head from "next/head"
import { MainNav } from "~/components/global"

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
         <div className="w-screen h-screen inset-0 flex flex-col fixed bg-white">
            <MainNav/>
            <main className="w-full max-w-4xl mx-auto">
               <section className="w-full grid grid-cols-3 gap-6">
                  <div className="relative flex-shrink-0 flex-1 rounded-2xl col-span-2 overflow-hidden p-10">
                     <div className="flex flex-col">
                        <h1 className="text-3xl leading-normal">Hello, I’m Abo, a product Designer With 7 years of experience.</h1>
                        <p className="mt-10">I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</p>
                     </div>
                     <img 
                        className="absolute inset-0 object-cover -z-10" 
                        src="images/profile.jpg" 
                        alt="profile image" 
                     />
                     <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl -z-10"/>
                  </div>
                  <img 
                     className="col-span-1 object-cover aspect-[4/6] rounded-2xl" 
                     src="images/profile.jpg" 
                     alt="profile image" 
                  />
               </section>
            </main>
         </div>
      </>
   )
}
