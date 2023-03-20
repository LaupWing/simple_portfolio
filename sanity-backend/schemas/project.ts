import { defineField, defineType } from "sanity"


export default defineType({
   name: "project",
   title: "Project",
   type: "document",
   fields: [
      defineField({
         name: "title",
         title: "Title",
         type: "string"
      }),
      defineField({
         name: "content",
         title: "content",
         type: "blockContent"
      })
   ]
})