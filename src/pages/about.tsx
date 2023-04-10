import { SocialType } from "typings"
import { FC } from "react"
import { IconDribbble, IconGithub, IconInstagram, IconLinkedIn } from "~/components/elements"
import { IconType } from "react-icons"

const AboutPage = () => {
   const socials: SocialType[] = [
      "linkedin",
      "github",
      "dribble",
      "instagram",
   ]

   return (
      <>
         <section className="w-full grid grid-cols-3 gap-6 overflow-hidden">
            <img
               className="col-span-1 object-cover aspect-[4/6] rounded-2xl"
               src="images/profile.jpg"
               alt="profile image"
            />
            <div className="relative flex-shrink-0 flex-1 flex rounded-2xl col-span-2 overflow-hidden p-10">
               <div className="flex flex-col flex-1">
                  <h1 className="text-3xl leading-normal">
                     Hello, I’m Loc, a product Designer With 7 years of
                     experience.
                  </h1>
                  <p className="mt-10">
                     I care a lot about using design for positive impact.
                     and enjoy creating user-centric, delightful, and
                     human experiences.
                  </p>
               </div>
               <img
                  className="absolute inset-0 object-cover -z-10"
                  src="images/profile.jpg"
                  alt="profile image"
               />
               <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl -z-10" />
            </div>
            <div className="col-span-3 flex gap-6">
               <div className="space-y-4 flex p-4 rounded-2xl flex-col bg-slate-200 border-slate-300 border-2">
                  {socials.map((social) => (
                     <Social
                        key={social}
                        name={social}
                     />
                  ))}
               </div>
               <div className="flex-1 border-2 p-4 border-slate-300 bg-slate-200 rounded-2xl">
                  <h3 className="uppercase text-sm font-bold text-slate-500">General skills</h3>
                  <div className="flex flex-col gap-y-4 text-xs mt-4">
                     <div className="flex items-center">
                        <span className="font-bold uppercase text-slate-400 w-32">Communcation</span>
                        <div className="flex-1 border-2 p-0.5 border-indigo-500 rounded-full">
                           <div className="h-1.5 bg-indigo-500 rounded-full w-[80%]"/>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <span className="font-bold uppercase text-slate-400  w-32">Coding</span>
                        <div className="flex-1 border-2 p-0.5 border-indigo-500 rounded-full">
                           <div className="h-1.5 bg-indigo-500 rounded-full w-[90%]"/>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <span className="font-bold uppercase text-slate-400  w-32">Consistency</span>
                        <div className="flex-1 border-2 p-0.5 border-indigo-500 rounded-full">
                           <div className="h-1.5 bg-indigo-500 rounded-full w-[90%]"/>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <span className="font-bold uppercase text-slate-400  w-32">Dutch</span>
                        <div className="flex-1 border-2 p-0.5 border-indigo-500 rounded-full">
                           <div className="h-1.5 bg-indigo-500 rounded-full w-[90%]"/>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <span className="font-bold uppercase text-slate-400  w-32">English</span>
                        <div className="flex-1 border-2 p-0.5 border-indigo-500 rounded-full">
                           <div className="h-1.5 bg-indigo-500 rounded-full w-[90%]"/>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <span className="font-bold uppercase text-slate-400  w-32">Fitness</span>
                        <div className="flex-1 border-2 p-0.5 border-indigo-500 rounded-full">
                           <div className="h-1.5 bg-indigo-500 rounded-full w-[90%]"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}
export default AboutPage

interface SocialProps {
   name: SocialType
}
const Social:FC<SocialProps> = ({
   name,
}) => {
   const socials:Record<SocialType, any> = {
      instagram: IconInstagram,
      linkedin: IconLinkedIn,
      dribble: IconDribbble,
      github: IconGithub
   }
   const IconComponent:IconType = socials[name]

   return (
      <div className="w-12 h-12 bg-white rounded-full text-neutral-900 flex items-center justify-center hover:text-indigo-500 cursor-pointer duration-200">
         <IconComponent 
            size={24}
         />
      </div>
   )
}