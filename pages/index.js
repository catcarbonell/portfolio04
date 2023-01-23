import Head from "next/head"
import styles from "../styles/Home.module.css"
 
import { useStoryblokState, getStoryblokApi, StoryblokComponent } from "@storyblok/react"
 
export default function Home({ story, preview }) {
  story = useStoryblokState(story, {
    resolveRelations: ["project-cards.projects"],
  }, preview);
  return (
    <div className={styles.container}>
      <Head>
        <title>Cat Ballar | DevRel Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  )
}
 
export async function getStaticProps(context) {
  let slug = "home";
 
  let sbParams = {
    version: "published", // or 'published'
    resolve_relations: ["project-cards.projects"],
  };

  if (context.preview) {
    sbParams.version = "draft";
  }
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
  let { data: nav } = await storyblokApi.get('cdn/stories/nav')
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      nav: nav ? nav.story : false,
      preview: context.preview || false,
    },
    revalidate: 3600, // revalidate every hour
  };
}