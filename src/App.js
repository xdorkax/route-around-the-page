import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
