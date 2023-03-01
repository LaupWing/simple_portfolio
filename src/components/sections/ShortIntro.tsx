import { FC } from "react"
import { 
   IconDribbble, 
   IconInstagram, 
   IconLinkedIn, 
   IconTwitter 
} from "~/components/elements"

export const ShortIntro:FC = () => {
   return (
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
                        <IconInstagram size={24} />
                     </div>
                     <div className="w-12 h-12 bg-white rounded-full text-neutral-900 flex items-center justify-center">
                        <IconLinkedIn size={24} />
                     </div>
                     <div className="w-12 h-12 bg-white rounded-full text-neutral-900 flex items-center justify-center">
                        <IconDribbble size={24} />
                     </div>
                     <div className="w-12 h-12 bg-white rounded-full text-neutral-900 flex items-center justify-center">
                        <IconTwitter size={24} />
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
   )
}
