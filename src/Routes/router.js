import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import { ContactUs, CoursesStatePage, Home, Login, Pay, SignUp } from "../pages";

const router = createBrowserRouter([

    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/pay',
          element: <Pay />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
       {
        path:'/coursesstate',
        element:<CoursesStatePage/>
       },
       
        {
          path: '/contactus',
          element: <ContactUs />
        },
     
       
      ]
    }
  ]);
export default router