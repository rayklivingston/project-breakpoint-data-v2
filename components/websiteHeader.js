import Link from 'next/link'

export default function websiteHeader() {
    return (
        <div className="section-9 wf-section">
            <div className="div-block w-clearfix">
                <Link href="/"><a aria-current="page" className="link-block-2 w-inline-block w-clearfix w--current"><img src="images/Group-1.png" loading="lazy" alt="" className="image" /></a></Link>
                <div data-hover="false" data-delay={0} className="dropdown-2 w-dropdown">
                    <div className="dropdown-toggle-2 w-dropdown-toggle"><img src="images/icon-park-outline_hamburger-button.png" loading="lazy" alt="" className="image-4" /></div>
                    <nav className="dropdown-list w-dropdown-list">
                        <Link href="/"><a aria-current="page" className="dropdown-link-2 w-dropdown-link w--current">Home</a></Link>
                        <Link href="/about"><a className="dropdown-link w-dropdown-link">About</a></Link>
                        <Link href="/pricing"><a className="dropdown-link-3 w-dropdown-link">Pricing</a></Link>
                        <Link href="/blog"><a className="dropdown-link-3 w-dropdown-link">Blog</a></Link>
                    </nav>
                </div>
                <Link href="/sign-in"><a className="link-block right-side w-inline-block">
                    <h4 className="heading-3 header">Sign In</h4></a>
                </Link>
                <Link href="/blog"><a className="link-block w-inline-block">
                    <h4 className="heading-3 header">Blog</h4></a>
                </Link>
                <Link href="/pricing"><a className="link-block w-inline-block">
                    <h4 className="heading-3 header">Pricing</h4></a>
                </Link>
                <Link href="/about"><a className="link-block w-inline-block">
                    <h4 className="heading-3 header">About</h4></a>
                </Link>
                <Link href="/"><a aria-current="page" className="link-block w-inline-block w--current">
                    <h4 className="heading-3 header">Home</h4></a>
                </Link>
            </div>
        </div>
    )
}