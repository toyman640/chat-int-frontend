import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/log-in" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
