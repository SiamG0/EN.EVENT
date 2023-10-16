import React from 'react';
import bannera from '../../assets/aboutus.jpg'
import bannera1 from '../../assets/aboutus1.jpg'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/team4.jpg'
import team5 from '../../assets/team5.jpg'
import team6 from '../../assets/team6.jpg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const AboutUs = () => {

    return (
        <div>

            <div className="hero min-h-min " >
                <img src={bannera1} alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-8xl font-bold">About Us</h1>
                    </div>
                </div>
            </div>
            <h4 className='text-center text-2xl px-36 py-6 bg-gray-300 m-4 rounded-lg'>
                We are a team of passionate event managers and entertainment enthusiasts who are dedicated to creating unforgettable experiences for our clients and their guests. We specialize in planning and executing a wide range of events, from small corporate gatherings to large-scale festivals.

                No matter what your event needs are, we can help you create a memorable and successful experience.</h4>
            <div>
                <h1 className='text-3xl md:text-6xl font-extrabold text-center'>Our Team</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto'>
                    <div class="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 mb-10">
                        <div class="relative mx-4 mt-4 h-[450px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src={team2} alt="profile-picture" className='min-h-min' />
                            <div class="p-6 text-center">
                                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Antor
                                </h4>
                                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                    CEO / Co-Founder
                                </p>
                            </div>
                            <div class="flex justify-center gap-7 p-6 pt-2">
                                <a >
                                    <FaFacebookF className='text-xl'></FaFacebookF>
                                </a>
                                <a>
                                    <FaTwitter className='text-xl'></FaTwitter>
                                </a>
                                <a>
                                    <FaInstagram className='text-xl'></FaInstagram>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div class="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 mb-10">
                        <div class="relative mx-4 mt-4 h-[450px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src={team1} alt="profile-picture" className='min-h-min' />
                            <div class="p-6 text-center">
                                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Epu
                                </h4>
                                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                    MD / Co-Founder
                                </p>
                            </div>
                            <div class="flex justify-center gap-7 p-6 pt-2">
                                <a >
                                    <FaFacebookF className='text-xl'></FaFacebookF>
                                </a>
                                <a>
                                    <FaTwitter className='text-xl'></FaTwitter>
                                </a>
                                <a>
                                    <FaInstagram className='text-xl'></FaInstagram>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div class="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 mb-10">
                        <div class="relative mx-4 mt-4 h-[450px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src={team3} alt="profile-picture" className='min-h-min' />
                            <div class="p-6 text-center">
                                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Redoyan
                                </h4>
                                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                    Founder
                                </p>
                            </div>
                            <div class="flex justify-center gap-7 p-6 pt-2">
                                <a >
                                    <FaFacebookF className='text-xl'></FaFacebookF>
                                </a>
                                <a>
                                    <FaTwitter className='text-xl'></FaTwitter>
                                </a>
                                <a>
                                    <FaInstagram className='text-xl'></FaInstagram>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div class="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 mb-10">
                        <div class="relative mx-4 mt-4 h-[450px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src={team4} alt="profile-picture" className='min-h-min' />
                            <div class="p-6 text-center">
                                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Naruto
                                </h4>
                                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                    Hokage
                                </p>
                            </div>
                            <div class="flex justify-center gap-7 p-6 pt-2">
                                <a >
                                    <FaFacebookF className='text-xl'></FaFacebookF>
                                </a>
                                <a>
                                    <FaTwitter className='text-xl'></FaTwitter>
                                </a>
                                <a>
                                    <FaInstagram className='text-xl'></FaInstagram>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div class="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 mb-10">
                        <div class="relative mx-4 mt-4 h-[450px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src={team5} alt="profile-picture" className='min-h-min' />
                            <div class="p-6 text-center">
                                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Luffy
                                </h4>
                                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                    Piret King
                                </p>
                            </div>
                            <div class="flex justify-center gap-7 p-6 pt-2">
                                <a >
                                    <FaFacebookF className='text-xl'></FaFacebookF>
                                </a>
                                <a>
                                    <FaTwitter className='text-xl'></FaTwitter>
                                </a>
                                <a>
                                    <FaInstagram className='text-xl'></FaInstagram>
                                </a>
                            </div>
                        </div>


                    </div>
                    <div class="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 mb-10">
                        <div class="relative mx-4 mt-4 h-[450px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                            <img src={team6} alt="profile-picture" className='min-h-min' />
                            <div class="p-6 text-center">
                                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    Eren Eeagar
                                </h4>
                                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                                    Sobaire MariFalo
                                </p>
                            </div>
                            <div class="flex justify-center gap-7 p-6 pt-2">
                                <a >
                                    <FaFacebookF className='text-xl'></FaFacebookF>
                                </a>
                                <a>
                                    <FaTwitter className='text-xl'></FaTwitter>
                                </a>
                                <a>
                                    <FaInstagram className='text-xl'></FaInstagram>
                                </a>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>

    );
};

export default AboutUs;