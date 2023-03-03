import { GetServerSideProps } from "next"

export const Slide1Github = () => {
   return (
      <div className="flex-1 bg-indigo-400 m-2">Github</div>
   )
}


export const getServerSideProps:GetServerSideProps = async () => {
   return {
      props: {
         test: ""
      }
   }
}