import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Carousel from '../src/pages/Home/Carousel/Carousel';
import Home from './pages/Home/Home';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import routes from './Routes/Routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient= new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto bg-gray-300 w-full h-full">
     <RouterProvider router={routes}></RouterProvider>
     <Toaster/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
