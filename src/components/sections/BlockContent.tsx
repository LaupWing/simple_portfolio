import type { PortableTextComponents } from "@portabletext/react"
import { getImageDimensions } from "@sanity/asset-utils"
import { FC } from "react"
import { urlFor } from "~/sanity"
import { PortableText } from "@portabletext/react"

const ImageComponent:FC<any> = ({value, isInline}) => {
   const {width, height} = getImageDimensions(value)

   return (
      <img 
         src={urlFor(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()} 
         style={{
            display: isInline ? "inline-block" : "block", 
            aspectRatio: width / height
         }}
         alt={value.alt || ""} 
         loading="lazy"
         className="max-w-md"
      />
   )
}

const components: PortableTextComponents = {
   types: {
      image: ImageComponent,
   },
   marks: {
   },
   block: {
      h2: ({children}) => <h2 className="text-3xl mb-2">{children}</h2>,
      h3: ({children}) => <h3 className="text-2xl mb-2">{children}</h3>,
      normal: ({children}) => <p className="mb-2">{children}</p>
   },
   list: {
      bullet: ({children}) => <ul className="mb-2">{children}</ul>
   }
}

export const BlockContent:FC<{
   value: any[]
}> = ({
   value
}) => {
   return (
      <PortableText value={value} components={components} />
   )
}