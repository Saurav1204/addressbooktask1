
import './App.css';
 import { createBrowserRouter,  Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import Addressbookform from './Components/Addressbookform';
import Addressbooklist from './Components/Addressbooklist';
import Rootlayout from './Components/routing/Rootlayout';


// Nested Routes and Layout
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Addressbookform />} />
      <Route path='Addressbooklist' element={<Addressbooklist />} />
      </Route>
  )
)
function App() {
  return (
    <div>
         <RouterProvider router={router} />
    </div>
  );
}

export default App;
