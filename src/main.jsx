import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Services from './components/Services/Services.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Price from './components/Price/Price.jsx'
import Query from './components/Query/Query.jsx'



const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    path: '',
    element: <Home />
  },
  {
    path: 'services',
    element: <Services />
  },
  {
    path: 'aboutus',
    element: <AboutUs />
  }
    ,
  {
    path: 'price',
    element: <Price />
  },
  {
    path:'query',
    element:<Query/>
  }]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
