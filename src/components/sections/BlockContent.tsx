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
      />
   )
}

const components: PortableTextComponents = {
   types: {
      image: ImageComponent
   },
   marks: {

   }
}

export const BlockContent:FC<{
   input: any[]
}> = ({
   input
}) => {
   return (
      <PortableText value={input} components={components} />
   )
}