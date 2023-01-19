import '../styles/globals.css'
import { useRouter } from 'next/router'
import { storyblokInit, apiPlugin } from "@storyblok/react"
import Banner from '../components/Banner'
import Button from '../components/Button'
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
  button: Button,
  "contact_form": ContactForm,
  footer: Footer,
  grid: Grid,
  image: Image,
  layout: Layout,
  nav: Nav,
  "nav_link": NavLink,
  "nav_menu": NavMenu,
  page: Page,
  project: Project,
  "project-cards": ProjectCards,
  richtext: Richtext,
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_PUBLICSBTOKEN,
  use: [apiPlugin],
  apiOptions: { 
    region: 'us',
    timeout: 5,
  },
  components,
});

function MyApp({ Component, pageProps }){ 
  const router = useRouter();
  
  if (router.pathname === '/404' || router.pathname === '/500') {
    return <Component {...pageProps} />
  }
  
  return (
    <Layout story={pageProps.nav}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
