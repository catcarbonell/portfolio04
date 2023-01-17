import { storyblokEditable } from "@storyblok/react"
 
const Image = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <img src={blok.image.filename} alt={blok.image.alt} /> 
  </div>
);
 
export default Image;