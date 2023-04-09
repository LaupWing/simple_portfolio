import { SanityImageAssetDocument } from "@sanity/client"

export type SocialType = "instagram" | "linkedin" | "dribble" | "github" 

export type SkillsType = "firebase" 
   | "gatsby" 
   | "laravel" 
   | "nextjs" 
   | "react" 
   | "shopify" 
   | "solidity"
   | "tailwind"
   | "typescript"
   | "vue"
   | "wordpress"

export interface ProjectType {
   skills: Skills[]
   name: string
   date: string
   description: string
   tutorial: boolean
   images: SanityImageAssetDocument[]
   _id: string
   github: string
   url: string
   credentials?: boolean
   username?: string
   password?: string
   slug: {
      current: string
   }
}