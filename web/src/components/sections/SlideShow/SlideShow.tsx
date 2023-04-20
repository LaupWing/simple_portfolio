import { FC } from "react"
import { Carousel } from "react-responsive-carousel"
import { Slide1Skills } from "./Slide1Skills"
import { motion } from "framer-motion"

interface SlideShowProps {
   animationEnded: () => void
}

export const SlideShow:FC<SlideShowProps> = ({
   animationEnded
}) => {
   return (
      <motion.div 
         className="col-span-2 h-60 md:h-40 relative overflow-hidden rounded-2xl flex"
         initial={{
            x: "-100%"
         }}
         animate={{
            x: 0,
            transition: {
               delay: 0.4
            }
         }}
         onAnimationComplete={animationEnded}
      >
         <img 
            className="absolute inset-0 object-cover -z-10" 
            src="https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="github" 
         />
         <div className="inset-0 absolute bg-white/30 backdrop-blur-sm -z-10"/>
         <Carousel 
            className="flex-1 h-full flex" 
            showThumbs={false}
            showStatus={false}
         >
            <Slide1Skills />
            <div className="flex-1 text-white flex flex-col justify-center items-center">
               <h2>6 years of development experience.</h2>
            </div>
            <div className="flex-1 text-white flex flex-col justify-center items-center">
               <h2>I spent 3 years creating a large, self-made project for a client.</h2>
            </div>
            <div className="flex-1">Test</div>
            <div className="flex-1">Test</div>
         </Carousel>
      </motion.div>
   )
}
