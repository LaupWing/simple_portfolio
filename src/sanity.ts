import "dotenv/config"
import { createClient } from "@sanity/client"

export const client = createClient({
   projectId: "rhegrw2z",
   dataset: "production",
   apiVersion: "1",
   useCdn: true
})