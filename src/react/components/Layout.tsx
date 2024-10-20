import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import Navigationbar from './Navbar';

const Layout: React.FC = () => {
    return (
        <div className="dark flex flex-col min-h-screen">
            {/* Navbar for tablet or smaller screens */}
            <div className="md:hidden">
                <Navigationbar />
            </div>

            <div className="flex flex-1">
                {/* Sidebar for desktop */}
                <div className="hidden md:block">
                    <Sidebar />
                </div>

                <main className="flex-1 bg-default-50 flex flex-col h-screen p-4 overflow-auto">
                    <header className='hidden md:flex justify-end mb-4'>
                        <Header />
                    </header>

                    {/* Main content area */}
                    <div className="flex-1">
                        <Outlet />
                    </div>

                    {/* Footer only visible on desktop */}
                    <footer className="hidden md:block mt-4">
                        <Footer />
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default Layout;