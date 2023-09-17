import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-slate-50">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
