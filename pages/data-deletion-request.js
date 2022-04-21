import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import WebsiteHeader from '../components/websiteHeader';
import WebsiteFooter from '../components/websiteFooter';

export default function dataDeletionRequest() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>Data Deletion Request</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                {/* [if lt IE 9]><![endif] */}
                <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
                <link href="images/webclip.png" rel="apple-touch-icon" />
            </Head>
            <div>
                <WebsiteHeader />
                <div className="section-10 wf-section">
                    <div className="div-block-25" />
                </div>
                <WebsiteFooter />
            </div>
            <Script id="script-1" src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61847bafc93e586fe61e9b9d" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></Script>
            <Script id="script-2" src="js/webflow.js" type="text/javascript"></Script>
            {/* [if lte IE 9]><Script id="script-3" src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></Script><![endif] */}
        </div>
    )
}

