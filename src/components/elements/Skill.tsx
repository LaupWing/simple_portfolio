import { 
   IconFirebase, 
   IconGatsby, 
   IconLaravel, 
   IconNextjs, 
   IconReact, 
   IconShopify, 
   IconSolidity, 
   IconTailwind, 
   IconTypescript, 
   IconVue, 
   IconWordpress 
} from "~/components/elements"
import config from  "~/config"
import { IconType } from "react-icons"

type SkillIcon = typeof config.skills[number]

export const Skill = () => {
   const skills:Record<SkillIcon, IconType> = {
      firebase: IconFirebase,
      gatsby: IconGatsby,
      laravel: IconLaravel,
      nextjs: IconNextjs,
      react: IconReact,
      shopify: IconShopify,
      solidity: IconSolidity,
      tailwind: IconTailwind,
      typescript: IconTypescript,
      vue: IconVue,
      wordpress: IconWordpress,
   }
   return (
      <div>Skill</div>
   )
}