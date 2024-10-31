 import logoImg from "@/app/assets/logo.png";
 import classes from "./mainHeader.module.css";
 import Link from "next/link";
 import Image from "next/image";
import NavLink from "./nav-link";
export default function Header() {
   
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="a plate with food" priority/>
        NextLevel food
        </Link>
            <nav className={classes.nav}>
        <ul >
           <li>
            <NavLink href="/meals">Browse Meals</NavLink>
           </li>
           <li>
           <NavLink href="/community">Foodies community</NavLink>
           </li>
        </ul>
    </nav>
        </header>
    )
}