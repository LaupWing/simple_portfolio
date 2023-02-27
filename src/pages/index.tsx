import Head from "next/head"
import { MainNav } from "~/components/global"
import {
   AiFillInstagram,
   AiFillLinkedin,
   AiFillDribbbleCircle,
   AiOutlineTwitter
} from "react-icons/ai"
import data from "../../data.json"

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
               <section className="w-full grid grid-cols-3 gap-6">
                  <div className="relative flex-shrink-0 flex-1 flex rounded-2xl col-span-2 overflow-hidden p-10">
                     <div className="flex flex-col flex-1">
                        <h1 className="text-3xl leading-normal">
                           Hello, I’m Abo, a product Designer With 7 years of
                           experience.
                        </h1>
                        <p className="mt-10">
                           I care a lot about using design for positive impact.
                           and enjoy creating user-centric, delightful, and
                           human experiences.
                        </p>
                        <div className="mt-auto flex space-x-10">
                           <button className="px-9 rounded-full bg-neutral-900 text-white">
                              Contact me
                           </button>
                           <div className="space-x-4 flex">
                              <div className="w-12 h-12 bg-white rounded-full text-neutral-900 flex items-center justify-center">
                                 <AiFillInstagram size={24} />
                              </div>
                              <div className="w-12 h-12 bg-white rounded-full text-neutral-900 flex items-center justify-center">
                                 <AiFillLinkedin size={24} />
                              </div>
                              <div className="w-12 h-12 bg-white rounded-full text-neutral-900 flex items-center justify-center">
                                 <AiFillDribbbleCircle size={24} />
                              </div>
                              <div className="w-12 h-12 bg-white rounded-full text-neutral-900 flex items-center justify-center">
                                 <AiOutlineTwitter size={24} />
                              </div>
                           </div>
                        </div>
                     </div>
                     <img
                        className="absolute inset-0 object-cover -z-10"
                        src="images/profile.jpg"
                        alt="profile image"
                     />
                     <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl -z-10" />
                  </div>
                  <img
                     className="col-span-1 object-cover aspect-[4/6] rounded-2xl"
                     src="images/profile.jpg"
                     alt="profile image"
                  />
               </section>
               <section className="grid grid-cols-2 gap-6">
                  {data.map((item, i)=> (
                     <div
                        className="relative overflow-hidden aspect-square rounded-2xl"
                        key={i}
                     >
                        <img className="absolute inset-0 w-full h-full object-cover" src={item.image} alt="" />
                        {item.title}
                     </div>
                  ))}
               </section>
            </main>
         </div>
      </>
   )
}
