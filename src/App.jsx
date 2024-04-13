import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { New } from './New'
import { RootLayout } from './RootLayout'
import { MainPage } from './MainPage'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

function App() {

  /* Using router 6.4 we are routing are components to display our webpage */
  const router = createBrowserRouter(
    createRoutesFromElements(
      /* RootLayout is the component that has our page structure */
      <Route path="/" element={<RootLayout />}>

        {/* this route to register user */}
        <Route index element={<MainPage />} />

        {/* when the user successfully login they would enter their dashboard page */}
        <Route path="new" element={<New />} />



      </Route>
    )
  )


  return (
    <>


      {/* lets us display the routers pages on our app */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
