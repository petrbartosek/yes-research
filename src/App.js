import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

// pages & components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Intro from './pages/intro/Intro'
import Contact from './pages/contact/Contact'
import Products from './pages/products/Products'
import References from './pages/references/References'
import About from './pages/about/About'
import Scm from './pages/scm/Scm'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={ <Intro /> } />
            <Route path ='/contact'  element={ <Contact /> }/>
            <Route path ='/references'  element={ <References /> }/>
            <Route path ='/products'  element={ <Products /> }/>
            <Route path ='/about'  element={ <About /> }/>
            <Route path ='/scm'  element={ <Scm /> }/>
            <Route path="/*" element={ <Intro /> } />
          </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App