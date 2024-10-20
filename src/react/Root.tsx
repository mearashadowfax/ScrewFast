import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import { menuItems } from "./utils/menuUtils";
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = "pk_test_Y29uY2lzZS1wYXJha2VldC01MS5jbGVyay5hY2NvdW50cy5kZXYk"

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
    {
        path: 'app',
        element: <Layout />,
        children: menuItems
            .filter(item => item.element !== null)
            .map(item => ({
                path: item.href.replace('/app/', ''),
                element: item.element
            }))
    }
]);
const Root: React.FC = () => {
    return (
        <React.StrictMode>
            <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
                <RouterProvider router={router} />
            </ClerkProvider>
        </React.StrictMode>
    );
};

export default Root;