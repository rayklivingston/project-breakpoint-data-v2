import { signIn } from "next-auth/react"

export default function facebookButton() {
    return (
        <button className="button facebook-button w-button" onClick={() => signIn("facebook", { callbackUrl: "https://angry-meninsky-dca9ff.netlify.app/dashboard" })}>Sign in with Facebook</button>
    )
}