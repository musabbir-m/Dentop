import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Carousel from '../src/pages/Home/Carousel/Carousel';
import Home from './pages/Home/Home';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import routes from './Routes/Routes';

function App() {
  return (
    <div className=" mx-auto">
     <RouterProvider router={routes}></RouterProvider>
     <Toaster/>
    </div>
  );
}

export default App;
