"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLink {
    href: string; // Assuming href is always a string
    label: string;
}

const links: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="navbar flex justify-between items-center bg-slate-800 px-8 py-3">
            <ul className="flex flex-wrap items-center justify-between">
                {links && links.length > 0 && links.map((link, index) => {
                    const isActive = pathname.startsWith(link.href)
                    return(
                        <li key={index} >
                            <Link href={link.href} className={isActive ? "font-bold mr-4 text-red-800" : "text-blue-500"}>
                                {link.label}
                            </Link>
                        </li>
                    )})}
            </ul>
        </nav>
    );
};

export default Navbar;
