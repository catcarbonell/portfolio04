import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const NavMenu = ({blok}) => (
    <div {...storyblokEditable({blok})}>
        {blok.link.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
)

export default NavMenu