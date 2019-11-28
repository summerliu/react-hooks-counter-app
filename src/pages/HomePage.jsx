import React from 'react';
import Banner from '../components/banner';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const HomePage = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <Footer/>
        </div>
    );
}

export default HomePage;