const ContactPage = () => {
   return (
      <section className="p-8 border-2 border-slate-200 w-full rounded-2xl bg-slate-100">
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
         </form>
      </section>
   )
}
export default ContactPage