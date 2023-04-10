import { SanityImageAssetDocument } from "@sanity/client"
import { SanityImageSource }  from "@sanity/image-url/lib/types/types"

export type SocialType = "instagram" | "linkedin" | "dribble" | "github" 

export type SkillsType = [
   "firebase",
   "gatsby",
   "laravel",
   "nextjs",
   "react",
   "shopify",
   "solidity",
   "tailwind",
   "typescript",
   "vue",
   "wordpress"
]

export type SkillsPartial = Array<SkillsType[number]>

export interface ProjectType {
   skills: SkillsPartial
   name: string
   createdAt: string
   description: string
   tutorial: boolean
   images: SanityImageSource[]
   _id: string
   github: string
   url: string
   credentials?: boolean
   username?: string
   password?: string
   slug: {
      current: string
   }
   thumbnail: SanityImageSource
   content: any[]
}