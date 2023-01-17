import Link from "next/link"
import { storyblokEditable } from "@storyblok/react";
 
const ProjectCards = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.projects.map((project) => {
      return (
        <li key={project.slug}>
          <Link href={`projects/${project.slug}`}>
            <img src={`${project.content.image.filename}/m/200x0`} alt={project.content.image.alt} />
            <h3>{project.content.title}</h3>
          </Link>
        </li>
      );
    })}
  </div>
);
 
export default ProjectCards;