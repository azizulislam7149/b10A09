import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import SignUp from './components/SignUp.jsx';
import Create from './components/Create.jsx';
import AuthProvider from './providers/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children :[
      {

        path :"/",
        element : <Home></Home>
      },
     {
      path : "/sign up",
      element : <SignUp></SignUp>
     },
     {
   path : "/register",
   element : <Register></Register>
     },
     {
      path : "/create",
      element : <Create></Create>
     }
    ]


    
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
