"use client";

import { Navbar } from "flowbite-react";
import Image from 'next/image';
import logo from "../assets/library1.png"
import Link from "next/link";
import { cn } from "@/helpers/classnames";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { cartContext } from "@/context/CartContext";

const navLinks = [
    {
        href: "/",
        text: "Inicio",
    },
    {
        href: "/blog",
        text: "Blog",
    },
    {
        href: "/store",
        text: "Tienda",
    },
    {
        href: "/cart",
        text: "Carrito",
    },
];

const Header = () => {
    const {totalQuantityProduct} = useContext(cartContext)
    const pathname = usePathname()
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <Image src={logo} className="mr-3 w-9 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CodeCraft Books</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {
                    navLinks.map((navLink) => (
                        <Navbar.Link 
                            key={navLink.href}
                            href={navLink.href}
                            active={pathname === navLink.href}
                            as={Link}
                            className={cn(
                                pathname === navLink.href && "md:text-blue-500 bg-gray-950 font-bold"
                            )}
                        >
                            <span className="relative">
                                {navLink.text}
                                {navLink.text === "Carrito" && (
                                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-5">
                                        {totalQuantityProduct}
                                    </div>
                                )}
                            </span>
                        </Navbar.Link>
                    ))
                }
            </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Header