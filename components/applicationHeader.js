import Link from 'next/link'
import Image from 'next/image'
import { signOut } from 'next-auth/react';

export default function applicationHeader() {
    return (
        <div className="div-block-3">
            <div className="div-block w-clearfix">
                <Link href="/" ><a className="link-block-2 w-inline-block w-clearfix"><img src="images/Group-1.png" loading="lazy" alt="" className="image" /></a></Link>
                <div data-hover="false" data-delay={0} className="dropdown w-dropdown">
                    <div className="dropdown-toggle w-dropdown-toggle"><img src="images/Ellipse-4" loading="lazy" alt="" className="image-2" /></div>
                    <nav className="dropdown-list-2 w-dropdown-list">
                        <Link href="/dashboard"><a aria-current="page" className="dropdown-link-4 w-dropdown-link w--current">Dashboard</a></Link>
                        <Link href="/profile"><a className="dropdown-link-5 w-dropdown-link">Profile</a></Link>
                        <Link href="/billing"><a className="dropdown-link-6 w-dropdown-link">Billing</a></Link>
                        <Link href="/logout"><a className="dropdown-link-6 w-dropdown-link">Logout</a></Link>
                    </nav>
                    <button onClick={() => signOut()}>Logout</button>
                </div>
                
            </div>
        </div>
    )
}