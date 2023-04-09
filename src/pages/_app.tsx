import "~/styles/globals.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import type { AppProps } from "next/app"
import { Layout } from "~/components/global"

export default function App({ Component, pageProps }: AppProps) {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )
}
