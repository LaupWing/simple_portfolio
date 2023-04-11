import { SkillsType, SocialType } from "typings"
import { Skill, SkillLevel, Social } from "~/components/elements"
import config from "~/config"
import { motion } from "framer-motion"

const AboutPage = () => {
   const socials: SocialType[] = [
      "linkedin",
      "github",
      "dribble",
      "instagram",
   ]
   const generalSkills = [
      {
         children: "communication",
         progress: 90
      },
      {
         children: "coding",
         progress: 85
      },
      {
         children: "consistency",
         progress: 95
      },
      {
         children: "dutch",
         progress: 85
      },
      {
         children: "english",
         progress: 65
      },
      {
         children: "fitness",
         progress: 95
      },
   ]
   const techSkillsProgress:Record<SkillsType[number], number> = {
      firebase: 90,
      gatsby: 70,
      laravel: 40,
      nextjs: 80,
      react: 90,
      vue: 90,
      shopify: 70,
      solidity: 70,
      tailwind: 95,
      typescript: 85,
      wordpress: 75
   }
   const techSkills = config.skills.map(skill => ({
      children: (
         <div className="flex items-center gap-2"> 
            <Skill 
               size={16} 
               skill={skill}
            /> 
            {skill} 
         </div>
      ),
      progress: techSkillsProgress[skill]
   }))

   return (
      <>
         <section className="w-full grid grid-cols-3 gap-6 overflow-hidden">
            <motion.img
               className="col-span-1 object-cover aspect-[4/6] rounded-2xl"
               src="images/profile.jpg"
               alt="profile image"
               initial={{
                  x: "-100%",
                  opacity: 0,
               }}
               animate={{
                  x: 0,
                  opacity: 1
               }}
            />
            <motion.div 
               className="relative flex-shrink-0 flex-1 flex rounded-2xl col-span-2 overflow-hidden p-10"
               initial={{
                  x: "100%",
                  opacity: 0,
               }}
               animate={{
                  x: 0,
                  opacity: 1,
                  transition:{
                     delay: 0.4
                  }
               }}
            >
               <div className="flex flex-col flex-1">
                  <h1 className="text-3xl leading-normal">
                     Hello, I’m Loc, a product Designer With 7 years of
                     experience.
                  </h1>
                  <p className="mt-10 flex-1">
                     I care a lot about using design for positive impact.
                     and enjoy creating user-centric, delightful, and
                     human experiences.
                  </p>
               </div>
               <div className="absolute inset-0 h-full bg-white/40 backdrop-blur-3xl -z-[5]" />
               <img
                  className="absolute inset-0 object-cover -z-10"
                  src="images/profile.jpg"
                  alt="profile image"
               />
            </motion.div>
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
                     {generalSkills.map((gs, index) => (
                        <SkillLevel
                           progress={gs.progress}
                           key={index}
                        >
                           {gs.children}
                        </SkillLevel>
                     ))}
                  </div>
               </div>
            </div>
            <div className="col-span-3 flex flex-col border-2 p-4 border-slate-300 bg-slate-200 rounded-2xl">
               <h3 className="uppercase text-sm font-bold text-slate-500">Coding skills</h3>
               <p className="uppercase text-xs font-bold text-slate-400 mt-1">These are all coding where I am either working on or are very familiar with.</p>
               <div className="flex flex-col gap-y-4 text-xs mt-4">
                  {techSkills.map((ts, index) => (
                     <SkillLevel 
                        children={ts.children}
                        key={index}
                        progress={ts.progress}
                        color="emerald"
                     />
                  ))}
               </div>
            </div>
         </section>
      </>
   )
}
export default AboutPage