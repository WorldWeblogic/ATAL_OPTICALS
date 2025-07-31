import Promotion from './components/Promotion';
import About from './components/About';
import Faq from './components/Faq';
import Services from './components/Services';
import Footer from './components/Footer';
import Frames from './components/Frames';
import Header from './components/Header';
import Banner from './components/Banner';
import TestimonialsSlider from './components/Testimonials';
import Review from './components/Review';
import ExploreCollection from './components/ExploreCollection';
import Trending from './components/Trending';
import Eyecheck from './components/Eyecheck';
import ModelViewer from './components/ModelViewer';
function App() {
  return (
   <>
    <Header/>
    <Banner/>
    <About/>
    <Frames/>
    <Trending/>
    <Services/>
    <ModelViewer/>
    <ExploreCollection/>
    <Eyecheck/>
    <Promotion/>
    <Review/>
    <Faq/>
    <TestimonialsSlider/>
    <Footer/>
   </>
  )
}

export default App