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
      <div className="gradient-background mx-auto w-full h-full"
      style={{
        background: "linear-gradient(to right, #363795, #005C97)",
        /* Fallback for old browsers */
        background: "#005C97",
        /* Chrome 10-25, Safari 5.1-6 */
        background: "-webkit-linear-gradient(to right, #363795, #005C97)",
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }}
      
      
      
      
      
      
      
      >
     <RouterProvider router={routes}></RouterProvider>
     <Toaster/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
