import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import './input.css'
const router = createHashRouter([
  {
    path: "", element: <Home />,
    
  },
  {
    path:"/movie/:id",element:<MovieDetails/>
  }
])
function App() {
  
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

export default App
