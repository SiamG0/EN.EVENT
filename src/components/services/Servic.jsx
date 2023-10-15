import React from 'react';
import { Link } from 'react-router-dom';

const Servic = ({ card }) => {
    // console.log(card);
    const { id, price, description, title, image } = card;
    return (
        <div>
            
            <div className="card  glass mb-5 bg-slate-400">
            <figure><img src={image} alt="event!" className='h-80' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <p>Price: ${price}</p>
                   <Link to={"/details"}> <button className="btn btn-primary">Learn More</button></Link>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Servic;