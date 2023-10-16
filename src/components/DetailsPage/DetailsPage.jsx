import { useLoaderData, useParams } from 'react-router-dom';
import './details.css'

const DetailsPage = () => {
    const details = useLoaderData()
    const { id } = useParams()
    const integerId = parseInt(id)
    const findData = details.find(data => data.id === integerId)
    const { image, title, price, long_description, services1, services2, services, price1, price2 } = findData;
    return (
        <div>
            <h1 className="text-3xl md:text-5xl bg1 text-orange-500 shadow-black italic font-extrabold text-center p-40">Details Our Services</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className='w-[550px]' />
                    <div>
                        <h1 className="text-5xl font-bold">{title}!</h1>
                        <p className="py-6">{long_description}</p>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5 lg:max-w-6xl mx-auto'>
                {/* Basic card */}
                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                        <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                            Basic
                        </p>
                        <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                            <span className="mt-2 text-4xl">$</span>{price}
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0 flex-grow">
                        <ul className="flex flex-col gap-4">
                            {
                                services.map(service => <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-3 w-3"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                        {service}
                                    </p>
                                </li>)
                            }

                        </ul>
                    </div>
                    <div className="mt-12 p-0">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
                {/* Standard */}
                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                        <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                            standard
                        </p>
                        <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                            <span className="mt-2 text-4xl">$</span>{price1}
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0 flex-grow">
                        <ul className="flex flex-col gap-4">
                            {
                                services1.map(service => <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-3 w-3"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                        {service}
                                    </p>
                                </li>)
                            }

                        </ul>
                    </div>
                    <div className="mt-12 p-0">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
                {/* premium */}
                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                        <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                            Premium
                        </p>
                        <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                            <span className="mt-2 text-4xl">$</span>{price2}
                            <span className="self-end text-4xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            {
                                services2.map(service => <li className="flex items-center gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="h-3 w-3"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                        {service}
                                    </p>
                                </li>)
                            }

                        </ul>
                    </div>
                    <div className="mt-12 p-0">
                        <button
                            className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;