
import 'remixicon/fonts/remixicon.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Experience from './components/FrontEnd/experience'
import Intership from './components/FrontEnd/intership'
import Hackeathon from './components/FrontEnd/hackeathon'
import Fresher from './components/FrontEnd/fresher'
import Feed from './components/FrontEnd/feed'
import AskRefer from './components/FrontEnd/askRefer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/experience" element={<Experience />} />
        <Route path="/intership" element={<Intership />} />
        <Route path="/fresher" element={<Fresher />} />
        <Route path="/hackeathon" element={<Hackeathon />} />
        <Route path="/"  element={<Feed />} />
        <Route path="/feed"  element={<Feed />} />
        <Route path="/Ask-For-Refer"  element={<AskRefer />} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App