import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignInPage from "../auth/sign-in/SignInPage";
import Dashboard from "@/layout/dashboard/Dashboard";
import EditResume from "@/layout/dashboard/resume/[resumeId]/edit/EditResume";

export const router = createBrowserRouter([
    {
        element: <Main></Main>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path:'/dashboard/resume/:resumeId/edit',
                element: <EditResume />
            }
        ]
    },
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path:'contact-us',
        element: <ContactUs></ContactUs>
    },
    {
        path:'aboutUs',
        element: <AboutUs></AboutUs>
    },
    {
        path: "/auth/sign-in",
        element: <SignInPage></SignInPage>
    }
])
