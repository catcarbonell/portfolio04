import Head from "next/head"
import styles from "../styles/Home.module.css"
 
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
 
export default function Page({ story, preview }) {
  story = useStoryblokState(story, {
    resolveRelations: ["project-cards.projects"],
  }, preview);
 
  return (
    <div className={styles.container}>
      <Head>
        <title>{story ? story.name : "Cat Ballar | DevRel Engineer"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
 
export async function getStaticProps({ params }) {
  let slug = params.slug ? params.slug.join("/") : "home";
 
  let sbParams = {
    version: "published",
    resolve_relations: ["project-cards.projects"],
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)
  let { data: nav } = await storyblokApi.get('cdn/stories/nav')
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      nav: nav ? nav.story : false,
    },
    revalidate: 3600,
  };
}
 
export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get("cdn/links/" ,{
    version: "published",
  })
 
  let paths = []
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return
    }
 
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/")
 
    paths.push({ params: { slug: splittedSlug } })
  });
 
  return {
    paths: paths,
    fallback: false,
  };
}