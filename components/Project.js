import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link"
 
const Project = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <Link href={`/`}>
      <p>← back to main</p>
    </Link>
    <h2>{blok.title}</h2>
    <div>
      <img src={blok.image.filename} alt={blok.image.alt} />
    </div>
    <div>
      {render(blok.summary)}
    </div>
    <div>
      {blok.embed}
    </div>
  </div>
);
 
export default Project;