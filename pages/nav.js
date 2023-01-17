import Head from "next/head"
import styles from "../styles/Home.module.css"
 
import { useStoryblokState, getStoryblokApi } from "@storyblok/react"
 
export default function Nav({ story, preview }) {
  story = useStoryblokState(story, {}, preview);
  return (
    <div className={styles.container}>
      <Head>
        <title>Cat Ballar | DevRel Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
 
export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "nav";
 
  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
  console.log(data)

  return {
    props: {
      nav: data ? data.story : false,
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}