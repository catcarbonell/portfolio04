import { storyblokEditable } from "@storyblok/react"
 
const Button = ({ blok }) => (
  <button type="button" {...storyblokEditable(blok)}>
    {blok.label} 
  </button>
);
 
export default Button;