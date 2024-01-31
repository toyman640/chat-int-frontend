import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import MainPage from './components/Main';
import SignUp from './components/SignUpPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/home-page" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
