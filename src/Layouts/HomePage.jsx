import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';

const HomePage = () => {
    return (
        <div>
            <header>
                <Header />
                {/* Latest News Section */}
                <section className='w-11/12 mx-auto'>
                    <LatestNews />
                </section>
            </header>
            <nav></nav>
            <main></main>
            <footer></footer>
        </div>
    );
};

export default HomePage;