import "~/styles/globals.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import type { AppProps } from "next/app"
import { Layout } from "~/components/global"
import { Provider } from "react-redux"
import { store } from "~/app/store"

export default function App({ Component, pageProps }: AppProps) {
   return (
      <Provider store={store}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </Provider>
   )
}
