import React from 'react';
import Gallary1 from '../../assets/gallary1.jpg'
import Gallary2 from '../../assets/gallary2.jpg'
import Gallary3 from '../../assets/gallary3.jpg'
import Gallary4 from '../../assets/gallary4.jpg'
import Gallary5 from '../../assets/gallary5.jpg'
import Gallary6 from '../../assets/gallary6.jpg'


const Gallary = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10 '>
            <h1 className='text-3xl md:text-6xl font-extrabold flex justify-center mb-6'>Our Gallary</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  '>
               
                <img src={Gallary1} alt="" className='h-96 rounded-lg'/>
                <img src={Gallary2} alt="" className='h-96 rounded-lg'/>
                <img src={Gallary3} alt="" className='h-96 rounded-lg'/>
                <img src={Gallary4} alt="" className='h-96 rounded-lg'/>
                <img src={Gallary5} alt="" className='h-96 rounded-lg'/>
                <img src={Gallary6} alt="" className='h-96 rounded-lg'/>
            </div>

        </div>
    );
};

export default Gallary;