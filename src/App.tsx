import './App.css';

//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Form from './pages/form';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='form' element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
