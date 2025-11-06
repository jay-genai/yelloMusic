import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Greeting from './pages/about/Greeting';
import Instructors from './pages/about/Instructors';
import Gallery from './pages/about/Gallery';
import CoursesIndex from './pages/courses/CoursesIndex';
import ClassicPiano from './pages/courses/ClassicPiano';
import JazzPiano from './pages/courses/JazzPiano';
import Church from './pages/courses/Church';
import Ukulele from './pages/courses/Ukulele';
import Drum from './pages/courses/Drum';
import Violin from './pages/courses/Violin';
import Composition from './pages/courses/Composition';
import FAQ from './pages/inquiry/FAQ';
import Contact from './pages/inquiry/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* 메인 */}
          <Route path="/" element={<Home />} />
          
          {/* 학원소개 */}
          <Route path="/about" element={<Greeting />} />
          <Route path="/about/greeting" element={<Greeting />} />
          <Route path="/about/instructors" element={<Instructors />} />
          <Route path="/about/gallery" element={<Gallery />} />
          
          {/* 교육과정 */}
          <Route path="/courses" element={<CoursesIndex />} />
          <Route path="/courses/classic-piano" element={<ClassicPiano />} />
          <Route path="/courses/jazz-piano" element={<JazzPiano />} />
          <Route path="/courses/church" element={<Church />} />
          <Route path="/courses/ukulele" element={<Ukulele />} />
          <Route path="/courses/drum" element={<Drum />} />
          <Route path="/courses/violin" element={<Violin />} />
          <Route path="/courses/composition" element={<Composition />} />
          
          {/* 수강문의 */}
          <Route path="/inquiry" element={<FAQ />} />
          <Route path="/inquiry/faq" element={<FAQ />} />
          <Route path="/inquiry/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
