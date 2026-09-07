import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import SignUp from './SignUp';
import SignIn from './Signin';
import Profile from './Profile';
import Header from './component/Header';

const App = () => {
  return (
    <BrowserRouter>
<Header/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App