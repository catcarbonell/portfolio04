import { storyblokEditable } from "@storyblok/react";
 
const Banner = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    <h2>{blok.headline}</h2>
    <p>{blok.subheadline}</p>
  </div>
);
 
export default Banner;