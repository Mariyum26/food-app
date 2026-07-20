import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Body from './Body.jsx'
import RestaurantMenu from './RestaurantMenu.jsx'

const routes=createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "about",
        element: <About/>,
      },{
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>,
      },
    ],
  },
])


createRoot(document.getElementById('root')).render(<RouterProvider router={routes}/> 
)
