import { signIn } from "next-auth/react"

export default function googleButton() {
    return (
        <button className="button google-button w-button" onClick={() => signIn("google", { callbackUrl: "https://angry-meninsky-dca9ff.netlify.app/dashboard" })}>Sign in with Google</button>
    )
}