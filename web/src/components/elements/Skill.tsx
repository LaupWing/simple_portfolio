import type { FC } from "react"
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
import { IconBaseProps, IconType } from "react-icons"
import { SkillsType } from "types"

interface SkillProps extends IconBaseProps {
   skill: SkillsType[number]
}

export const Skill:FC<SkillProps> = ({
   skill,
   ...props
}) => {
   const skills:Record<SkillsType[number], IconType> = {
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
   const IconComponent = skills[skill]
   return (
      <IconComponent {...props} />
   )
}