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
         name: "description",
         title: "Description",
         type: "text"
      }),
      defineField({
         name: "github",
         title: "Github",
         type: "url",
         description: "Url of github repository"
      }),
      defineField({
         name: "content",
         title: "content",
         type: "blockContent"
      }),
      defineField({
         name: "createdAt",
         title: "Created at",
         type: "datetime"
      }),
      defineField({
         name: "Image",
         title: "Image",
         type: "image",
         options: {
            hotspot: true,
         },
      }),
   ]
})