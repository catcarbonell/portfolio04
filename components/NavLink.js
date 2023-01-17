import Link from "next/link"
import { storyblokEditable } from "@storyblok/react"
 
const NavLink = ({ blok }) => (
    <Link href={blok.link.cached_url} {...storyblokEditable(blok)}>
        <p>{blok.label}</p>
    </Link>
);
 
export default NavLink;