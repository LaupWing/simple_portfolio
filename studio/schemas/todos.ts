import { defineField, defineType } from "sanity"
import { FcTodoList as icon } from "react-icons/fc"

export default defineType({
   name: "todos",
   title: "Todos",
   type: "document",
   icon,
   fields: [
      defineField({
         name: "name",
         title: "Name",
         type: "string"
      }),
      defineField({
         name: "finished",
         title: "Is this finished?",
         type: "boolean"
      })
   ]
})