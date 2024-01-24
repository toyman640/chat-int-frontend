import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUp />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
