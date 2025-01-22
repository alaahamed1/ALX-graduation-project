import React from 'react';
import SecTwo from '../components/about/SecTwo';
import SliderService from '../components/about/SliderService';

export default function About() {
    return (
        <div className=" min-h-screen bg-pattern py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center text-primary mb-8">About Us</h1>
                <p className="text-lg text-center text-gray-700 mb-12">
                    Our innovative web application connects you with essential healthcare services at your fingertips,
                    ensuring that you can access quality medical care anytime, anywhere.
                </p>
                <SecTwo />
                <h2 className="text-3xl font-bold text-center text-primary mt-16 mb-8">Our Services</h2>
                <SliderService />
            </div>
        </div>
    );
}