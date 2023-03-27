import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: "rhegrw2z",
   dataset: "production",
   apiVersion: "1",
   useCdn: true,
   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})