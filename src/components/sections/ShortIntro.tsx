import { FC } from "react"
import { 
   IconDribbble, 
   IconGithub, 
   IconInstagram, 
   IconLinkedIn,
   Social,
} from "~/components/elements"
import { motion } from "framer-motion"
import { SocialType } from "typings"
import { IconType } from "react-icons"

export const ShortIntro:FC = () => {
   const socials: SocialType[] = [
      "linkedin",
      "github",
      "dribble",
      "instagram",
   ]

   return (
      <section className="w-full grid grid-cols-3 gap-6 overflow-hidden">
         <motion.div 
            className="relative flex-shrink-0 flex-1 flex rounded-2xl col-span-2 overflow-hidden p-10"
            initial={{
               scale: 0
            }}
            animate={{
               x: 0,
               transition: {
                  delay: .2
               },
               scale: 1
            }}
         >
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
               <div className="mt-auto flex space-x-10">
                  <button className="px-9 rounded-full bg-neutral-900 text-white">
                     Contact me
                  </button>
                  <div className="space-x-4 flex">
                     {socials.map((social) => (
                        <motion.div
                           whileHover={{
                              scale: 0.9,
                           }}
                        >
                           <Social
                              key={social}
                              name={social}
                           />
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
            <img
               className="absolute inset-0 object-cover -z-10"
               src="images/profile.jpg"
               alt="profile image"
            />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl -z-10" />
         </motion.div>
         <motion.img
            className="col-span-1 object-cover aspect-[4/6] rounded-2xl"
            src="images/profile.jpg"
            alt="profile image"
            initial={{
               x: "110%"
            }}
            animate={{
               x: 0,
               transition: {
                  delay: 0.4
               },
            }}
         />
      </section>
   )
}