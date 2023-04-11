import { IconSend } from "~/components/elements"

const ContactPage = () => {
   return (
      <section className="grid grid-cols-2 gap-6">
         <section className="p-8 border-2 border-slate-200 col-span-2 rounded-2xl bg-slate-100">
            <h2 className="text-2xl font-bold text-slate-600">Love to hear from you,</h2>
            <h2 className="text-2xl font-bold text-slate-600">Get in touch <span className="text-3xl">👋</span></h2>
            <form className="grid grid-cols-2 gap-6 mt-8" action="">
               <div className="flex flex-col">
                  <label 
                     htmlFor="name"
                     className="text-sm mb-1 font-bold tracking-wider text-slate-400"
                  >Your name</label>
                  <input 
                     id="name" 
                     className="p-1 rounded flex-1 border-slate-300" 
                     type="text" 
                  />
               </div>
               <div className="flex flex-col">
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
                  />
               </div>
               <div className="flex flex-col col-span-2">
                  <label 
                     htmlFor="message"
                     className="text-sm mb-1 font-bold tracking-wider text-slate-400"
                  >
                     Message
                  </label>
                  <textarea 
                     name="message" 
                     id="message" 
                     className="resize-none h-36 rounded border-slate-300"
                  >
                     
                  </textarea>
               </div>
               <button className="mt-2 bg-indigo-500 text-white uppercase font-bold text-xs px-4 py-2 rounded shadow tracking-wider flex items-center justify-center">
                  Lets connect!
                  <IconSend className="ml-1" size={14} />
               </button>
            </form>
         </section>

         <section className="col-span-1">

         </section>
      </section>

   )
}
export default ContactPage