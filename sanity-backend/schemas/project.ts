import { defineField, defineType } from "sanity"
import { CgBrowser as icon } from "react-icons/cg"

export default defineType({
   name: "project",
   title: "Project",
   type: "document",
   icon,
   fields: [
      defineField({
         name: "name",
         title: "Name",
         type: "string"
      }),
      defineField({
         name: "description",
         title: "Description",
         type: "text"
      }),
      defineField({
         name: "slug",
         title: "slug",
         type: "slug",
         options: {
            source: "name",
            maxLength: 200
         }
      }),
      defineField({
         name: "github",
         title: "Github",
         type: "url",
         description: "Url of github repository"
      }),
      defineField({
         name: "content",
         title: "Content",
         type: "blockContent",
         description: "Explaination in detail of the project"
      }),
      defineField({
         name: "createdAt",
         title: "Created at",
         type: "datetime"
      }),
      defineField({
         name: "thumbnail",
         title: "Thumbnail",
         type: "image",
         options: {
            hotspot: true,
         },
      }),
      defineField({
         name: "images",
         title: "Images",
         type: "array",
         // @ts-ignore
         of:[
            {
               type: "image"
            }
         ],
         description: "Project images"
      }),
      defineField({
         name: "credentials",
         title: "Credentials",
         type: "boolean",
         description: "Is credentials needed?"
      }),
      defineField({
         name: "username",
         title: "Username",
         type: "string",
         description: "Demonstration account's username",
         hidden: ({document}) => !document?.credentials
      }),
      defineField({
         name: "password",
         title: "Password",
         type: "string",
         description: "Demonstration account's password",
         hidden: ({document}) => !document?.credentials
      }),
      defineField({
         name: "url",
         title: "Url",
         type: "url",
         description: "URL of your website"
      }),
      defineField({
         name: "skills",
         title: "Skills",
         type: "array",
         description: "The skills you needed to build this project",
         of: [
            {
               type: "string",
            },
         ],
         options: {
            list: [
               {
                  title: "Firebase", 
                  value: "firebase"
               },
               {
                  title: "React", 
                  value: "react"
               },
               {
                  title: "Vue", 
                  value: "vue"
               },
               {
                  title: "Solidity", 
                  value: "solidity"
               },
               {
                  title: "Nextjs", 
                  value: "nextjs"
               },
               {
                  title: "Typescript", 
                  value: "typescript"
               },
               {
                  title: "Wordpress", 
                  value: "wordpress"
               },
               {
                  title: "Gatsby", 
                  value: "gatsby"
               },
               {
                  title: "Tailwind", 
                  value: "tailwind"
               },
               {
                  title: "Css", 
                  value: "css"
               },
            ],
         },
      }),
   ]
})