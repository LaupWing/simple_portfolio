import { SkillsType, SocialType } from "typings"
import { Skill, SkillLevel, Social } from "~/components/elements"
import config from "~/config"
import { motion } from "framer-motion"

const TodosPage = () => {
   const socials: SocialType[] = [
      "linkedin",
      "github",
      "dribble",
      "instagram",
   ]

   return (
      <>
         <section className="w-full grid grid-cols-3 gap-6 overflow-hidden">
         </section>
      </>
   )
}
export default TodosPage