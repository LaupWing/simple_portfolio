import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { 
   IconDribbble, 
   IconInstagram, 
   IconLinkedIn, 
   IconMail, 
   IconSend, 
   IconTwitter 
} from "~/components/elements"
import axios from "axios"

interface FormData {
   email: string
   name: string
   message: string
}

const ContactPage = () => {
   const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
   const onSubmit: SubmitHandler<FormData> = async data => {
      try {
         const response = await axios.post('/api/contact', data);
         console.log(response.data)
       } catch (error) {
         console.error(error)
       }
   }
   
   return (
      <section className="grid grid-cols-2 gap-6 overflow-hidden">
         <motion.section 
            className="p-8 border-2 border-slate-200 col-span-2 rounded-2xl bg-slate-100"
            initial={{
               y: "-100%"
            }}
            animate={{
               y: 0
            }}
         >
            <h2 className="text-2xl font-bold text-slate-600">Love to hear from you,</h2>
            <h2 className="text-2xl font-bold text-slate-600">Get in touch <span className="text-3xl">👋</span></h2>
            <form 
               className="grid grid-cols-2 gap-6 mt-8"
               onSubmit={handleSubmit(onSubmit)}
            >
               <div className="flex flex-col col-span-2 md:col-span-1">
                  <label 
                     htmlFor="name"
                     className="text-sm mb-1 font-bold tracking-wider text-slate-400"
                  >
                     Your name
                  </label>
                  <input 
                     id="name" 
                     className="p-1 rounded flex-1 border-slate-300" 
                     type="text"
                     {...register("name", {
                        required: "You need to fill in your name!"
                     })}
                  />
                  {errors.name && (
                     <p className="text-red-400 uppercase text-xs font-bold mt-1">
                        { errors.name.message }
                     </p>
                  )}
               </div>
               <div className="flex flex-col col-span-2 md:col-span-1">
                  <label 
                     htmlFor="name"
                     className="text-sm mb-1 font-bold tracking-wider text-slate-400"
                  >
                     Your email
                  </label>
                  <input 
                     id="email"
                     className="p-1 focus:border-indigo-500 rounded border-slate-300" 
                     type="email" 
                     {...register("email", {
                        required: "You need to fill in your email!"
                     })}
                  />
                  {errors.email && (
                     <p className="text-red-400 uppercase text-xs font-bold mt-1">
                        { errors.email.message }
                     </p>
                  )}
               </div>
               <div className="flex flex-col col-span-2">
                  <label 
                     htmlFor="message"
                     className="text-sm mb-1 font-bold tracking-wider text-slate-400"
                  >
                     Message
                  </label>
                  <textarea 
                     id="message" 
                     className="resize-none h-36 rounded border-slate-300"
                     {...register("message", {
                        required: "Message is required :)"
                     })}  
                  >
                  </textarea>
                  {errors.message && (
                     <p className="text-red-400 uppercase text-xs font-bold mt-1">
                        { errors.message.message }
                     </p>
                  )}
               </div>
               <button className="mt-2 bg-indigo-500 text-white uppercase font-bold text-xs px-4 py-2 rounded shadow tracking-wider flex items-center justify-center col-span-2 md:col-span-1">
                  Lets connect!
                  <IconSend className="ml-1" size={14} />
               </button>
            </form>
         </motion.section>

         <motion.section 
            className="col-span-1 p-6 border-2 border-slate-200 rounded-2xl bg-slate-100"
            initial={{
               y: "100%"
            }}
            animate={{
               y: 0,
               transition: {
                  delay: 0.4
               }
            }}
         >
            <ul className="text-slate-500 gap-y-4 flex flex-col">
               <li className="flex items-center gap-2"><IconMail size={20} /> laupwing@gmail.com</li>
               <li className="flex items-center gap-2"><IconDribbble size={20} /> @laupwing</li>
               <li className="flex items-center gap-2"><IconInstagram size={20} /> @laupwing</li>
               <li className="flex items-center gap-2"><IconLinkedIn size={20} /> @laupwing</li>
               <li className="flex items-center gap-2"><IconTwitter size={20} /> @laupwing</li>
            </ul>
         </motion.section>
      </section>

   )
}
export default ContactPage