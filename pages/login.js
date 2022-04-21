import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import GoogleButton from '../components/googleButton';
import FacebookButton from '../components/facebookButton';
import React, { useState, useEffect } from 'react';
import { signIn, useSession, getCsrfToken } from "next-auth/react";
import { useRouter } from 'next/router';

export default function Login({ csrfToken }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [email, getEmail] = useState('');

    useEffect(() => {
        if (status !== 'loading' && session) router.push('/dashboard')
      }, []);

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Login</title>
                <meta content="Dashboard" property="og:title" />
                <meta content="Dashboard" property="twitter:title" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                {/* [if lt IE 9]><![endif] */}
                <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
            </Head>
            <div className="section-2 wf-section">
                <div className="div-block-26">
                    <div className="div-block-2">
                        <h1 className="heading-2">Sign In</h1>
                        <div className="form-block w-form">
                            <form id="wf-form-Sign-Up-Form" name="wf-form-Sign-Up-Form" method="post" action="/api/auth/signin/email">
                                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                                <label htmlFor="emailField" className="field-label-2 sign-in">Email *</label>
                                <input onChange={event => getEmail(event.target.value)} type="email" className="text-field-2 w-input" maxLength={256} name="email" data-name="email" placeholder="Enter your email address" id="emailField" required />
                                <button className="submit-button w-button" onClick={() => signIn("email", { email }, { callbackUrl: "https://frosty-leavitt-72f3a8.netlify.app/dashboard" })}>Sign In with Email</button>
                                {/* <button className="submit-button w-button" onClick={() => signIn("email", { email }, { callbackUrl: "http://localhost:3000/dashboard" })}>Sign In with Email</button> */}
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                        <GoogleButton />
                        <FacebookButton />
                    </div>
                </div>
            </div>
            <Script id="script-1" src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61847bafc93e586fe61e9b9d" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></Script>
            {/* <Script id="script-2" src="js/webflow.js" type="text/javascript"></Script> */}
            
           
            {/* [if lte IE 9]><Script id="script-3" src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></Script><![endif] */}
        </div>
    )
}

Login.getInitialProps = async (context) => {
    return {
      csrfToken: await getCsrfToken(context)
    }
  }