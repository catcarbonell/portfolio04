import Link from "next/link"
import { storyblokEditable, StoryblokComponent } from "@storyblok/react"
 
const Nav = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
        <div id="logo">
            <Link href="/">
                <img src={`${blok.logo.filename}/m/75x0`} alt={blok.logo.alt} />
            </Link>
        </div>
        {blok.nav_menu.map((nestedBlok) => (
            <StoryblokComponent className='' blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  );
};
 
export default Nav;