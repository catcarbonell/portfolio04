import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children, story }) => ( 
  <div>
    <Nav blok={story.content} />
    {children}
    <Footer />
  </div>
);

export default Layout;
