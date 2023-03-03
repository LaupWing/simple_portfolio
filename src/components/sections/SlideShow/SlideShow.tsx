import { FC } from "react"
import { Carousel } from "react-responsive-carousel"

export const SlideShow:FC = () => {
   return (
      <div className="col-span-2 h-40 relative overflow-hidden rounded-2xl flex">
         <img 
            className="absolute inset-0 object-cover -z-10" 
            src="https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="github" 
         />
         <div className="inset-0 absolute bg-white/50 backdrop-blur-sm -z-10"/>
         <Carousel 
            className="flex-1 h-full flex" 
            showThumbs={false}
            showStatus={false}
         >
            <div className="flex-1 bg-indigo-400 m-2">Test</div>
            <div className="flex-1">Test</div>
            <div className="flex-1">Test</div>
            <div className="flex-1">Test</div>
         </Carousel>
      </div>
   )
}
