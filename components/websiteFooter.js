import Link from 'next/link'

export default function websiteFooter() {
    return (
        <div className="wf-section">
            <div className="columns w-row">
                <div className="column w-col w-col-6 w-col-medium-6 w-col-small-small-stack w-col-tiny-tiny-stack"><img src="images/Group-608.png" loading="lazy" alt="" className="image-3" />
                    <p className="paragraph-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve</p>
                    <p className="paragraph-5">Copyright 2021 Handoff Inc.</p>
                </div>
                <div className="column-2 w-clearfix w-col w-col-6 w-col-medium-6 w-col-small-small-stack w-col-tiny-tiny-stack">
                    <Link href="/blog"><a aria-current="page" className="link-block footer w-inline-block w--current">
                        <h4 className="heading-3 footer">Blog</h4></a>
                    </Link>
                    <Link href="/pricing"><a aria-current="page" className="link-block footer w-inline-block w--current">
                        <h4 className="heading-3 footer">Pricing</h4></a>
                    </Link>
                    <Link href="/about"><a aria-current="page" className="link-block footer w-inline-block w--current">
                        <h4 className="heading-3 footer">About</h4></a>
                    </Link>
                    <Link href="/"><a aria-current="page" className="link-block footer w-inline-block w--current">
                        <h4 className="heading-3 footer">Home</h4></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}