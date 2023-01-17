import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react"
import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
import Project from '../components/Project'
import Footer from '../components/Footer'
import Grid from '../components/Grid'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import NavLink from '../components/NavLink'
import NavMenu from '../components/NavMenu'
import Page from '../components/Page'
import ProjectCards from '../components/ProjectCards'
import Richtext from '../components/Richtext'

const components = {
  banner: Banner,
  "contact_form": ContactForm,
  project: Project,
  footer: Footer,
  grid: Grid,
  image: Image,
  layout: Layout,
  nav: Nav,
  "nav_link": NavLink,
  "nav_menu": NavMenu,
  page: Page,
  "project-cards": ProjectCards,
  richtext: Richtext,
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_PREVIEWSBTOKEN,
  use: [apiPlugin],
  apiOptions: { region: 'us' },
  components,
});

function MyApp({ Component, pageProps }){ 
  return (
    <Layout story={pageProps.nav}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
