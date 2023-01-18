import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children, story }) => {
  return (
    <div>
      <Nav blok={story.content} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
