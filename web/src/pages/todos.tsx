import { SocialType } from "typings"
import { motion } from "framer-motion"
import { GetServerSideProps } from "next"
import { client } from "~/sanity"

const TodosPage = ({
   todos
}) => {
   console.log(todos)
   return (
      <>
         <section className="w-full grid grid-cols-1 gap-6 overflow-hidden">
         </section>
      </>
   )
}
export default TodosPage

export const getServerSideProps:GetServerSideProps = async () => {
   const todosQuery = "*[_type == 'todos']"
   const todos = await client.fetch(todosQuery)
   
   return {
      props: {
         todos
      }
   }
}