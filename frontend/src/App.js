import {
  Header,
  About,
  Footer,
  Skills,
  Testimonial,
  Work
} from './container/index';

import {
  Navbar,
} from './components/index';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
