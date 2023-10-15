import React from 'react';
import OBW from "../../assets/OBW.jpg"
import OBW2 from "../../assets/OBW2.jpg"
import OBW3 from "../../assets/OBW3.jpg"
import OBW4 from "../../assets/OBW4.jpg"
import OBW5 from "../../assets/OBW5.jpg"
import OBW6 from "../../assets/OBW6.jpg"
import OBW7 from "../../assets/OBW7.jpg"
import OBW8 from "../../assets/OBW8.jpg"
import OBW9 from "../../assets/OBW9.jpg"

const OurBestWork = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <h1 className='text-3xl md:text-6xl font-extrabold flex justify-center mb-6'>Our Best Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  '>
                <div className="card card-compacth-80 bg-base-100 shadow-xl">
                    <figure><img src={OBW} className='h-80 rounded-lg'/></figure>
                    <div className="card-body ">
                        <h2 className="card-title flex justify-center">Music Concert</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compacth-80 bg-base-100 shadow-xl">
                    <figure><img src={OBW2} className='h-80 rounded-lg'/></figure>
                    <div className="card-body ">
                        <h2 className="card-title flex justify-center">Music Festival</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compacth-80 bg-base-100 shadow-xl">
                    <figure><img src={OBW3} className='h-80 rounded-lg' /></figure>
                    <div className="card-body ">
                        <h2 className="card-title flex justify-center">Garden Party</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compacth-80 bg-base-100 shadow-xl">
                    <figure><img src={OBW4} className='h-80 rounded-lg'/></figure>
                    <div className="card-body ">
                        <h2 className="card-title flex justify-center">Holi</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compacth-80 bg-base-100 shadow-xl">
                    <figure><img src={OBW5} className='h-80 rounded-lg'/></figure>
                    <div className="card-body ">
                        <h2 className="card-title flex justify-center">Review Event</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compacth-80 bg-base-100 shadow-xl">
                    <figure><img src={OBW6} className='h-80 rounded-lg' /></figure>
                    <div className="card-body ">
                        <h2 className="card-title flex justify-center">Music Concert</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compacth-80 bg-base-100 shadow-xl">
                    <figure><img src={OBW7} className='h-80 rounded-lg'/></figure>
                    <div className="card-body ">
                        <h2 className="card-title flex justify-center">Music Concert</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compacth-80 bg-base-100 shadow-xl">
                    <figure><img src={OBW8} className='h-80 rounded-lg'/></figure>
                    <div className="card-body ">
                        <h2 className="card-title flex justify-center">Music Concert</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card card-compacth-80 bg-base-100 shadow-xl">
                    <figure><img src={OBW9} className='h-80 rounded-lg' /></figure>
                    <div className="card-body ">
                        <h2 className="card-title flex justify-center">Music Concert</h2>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OurBestWork;