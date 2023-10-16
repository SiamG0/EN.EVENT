import React, { useEffect, useState } from 'react';
import Servic from './Servic';


const Services = () => {
    const [servicesCard, setServicesCard] = useState([])

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setServicesCard(data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl md:text-6xl font-extrabold flex justify-center my-6'>Our Services</h1>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2 '>

                {
                    servicesCard.map(card => <Servic key={card.id} card={card}></Servic>)
                }
            </div></div>

    );
};

export default Services;