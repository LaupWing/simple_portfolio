import { SocialType } from "types"
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
            <ul className="col-span-full grid gap-2">
               {todos.map(todo => (
                  <li className="bg-indigo-50 p-2 py-1 rounded border-indigo-100 border-2">test</li>
               ))}
            </ul>
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