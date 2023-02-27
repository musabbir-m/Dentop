import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Home from './Components/Home/Home';
import { RouterProvider } from 'react-router-dom';
import routes from './Components/Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
     <RouterProvider router={routes}></RouterProvider>
     <Toaster/>
    </div>
  );
}

export default App;
