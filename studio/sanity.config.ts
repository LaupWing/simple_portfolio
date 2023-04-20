import {defineConfig} from "sanity"
import {deskTool} from "sanity/desk"
import {visionTool} from "@sanity/vision"
// import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from "./schemas"

export default defineConfig({
   name: "default",
   title: "simple portfolio",
   projectId: "rhegrw2z",
   dataset: "production",
   plugins: [
      deskTool(),
      visionTool(),
      // googleMapsInput(),
   ],

   schema: {
      types: schemaTypes,
   },
})
