import { 
   IconFirebase, 
   IconGatsby, 
   IconLaravel, 
   IconNextjs, 
   IconReact, 
   IconShopify, 
   IconSolidity, 
   IconTailwind, 
   IconTypescript, 
   IconVue, 
   IconWordpress 
} from "~/components/elements"

export const Slide1Skills = () => {
   return (
      <div className="flex-1 text-white flex flex-col justify-center items-center mb-6">
         <p className="mb-2 text-xs font-bold uppercase">I've used the technologies below, but not all projects are listed here.</p>
         <div className="flex space-x-6">
            <IconFirebase size={34}/>
            <IconWordpress size={34}/>
            <IconReact size={34}/>
            <IconVue size={34}/>
            <IconTypescript size={34}/>
            <IconTailwind size={34}/>
            <IconLaravel size={34}/>
            <IconNextjs size={34}/>
            <IconGatsby size={34}/>
            <IconSolidity size={34}/>
            <IconShopify size={34}/>
         </div>
      </div>
   )
}
