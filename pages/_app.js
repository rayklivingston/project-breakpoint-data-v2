import { SessionProvider } from "next-auth/react"
import '../public/css/normalize.css'
import '../public/css/project-breakpoint-data.webflow.css'
import '../public/css/webflow.css'
import { ProtectedRoute } from "../components/ProtectedRoute";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {/* <ProtectedRoute> */}
        <Component {...pageProps} session={session}/>
      {/* </ProtectedRoute> */}
    </SessionProvider>
  )
}
