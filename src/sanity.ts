import { createClient } from "@sanity/client"
import imageUrlBuilder  from "@sanity/image-url"
import { SanityImageSource }  from "@sanity/image-url/lib/types/types"

export const client = createClient({
   projectId: "rhegrw2z",
   dataset: "production",
   apiVersion: "1",
   useCdn: true,
   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})


const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource)=> {
   return builder.image(source)
}