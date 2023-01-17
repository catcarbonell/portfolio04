import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
 
const Richtext = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    {render(blok.text)}
  </div>
);
 
export default Richtext;