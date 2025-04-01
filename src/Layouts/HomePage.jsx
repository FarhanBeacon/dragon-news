import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';
import LeftNavbar from '../Layout-Components/LeftNavbar';
import RightNavbar from '../Layout-Components/RightNavbar';
import { Outlet } from 'react-router';

const HomePage = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header />
                {/* Latest News Section */}
                <section className='w-11/12 mx-auto'>
                    <LatestNews />
                </section>
            </header>
            <nav>
                <NavBar />
            </nav>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-4 pt-4'>
                <aside className='col-span-3'>
                    <LeftNavbar />
                </aside>
                <section className='col-span-6'><Outlet /></section>
                <aside className='col-span-3'><RightNavbar /></aside>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomePage;