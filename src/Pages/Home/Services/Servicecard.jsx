/* eslint-disable react/prop-types */

import { FaArrowRight } from "react-icons/fa";

const Servicecard = ({ service }) => {

    const { price, img, title } = service

    return (
        <div className="max-w-md p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"></span>
                <h2 className="text-xl font-bold tracking-wide">{title}</h2>
            </div>
            <div className="flex justify-between">
                <p className="text-orange-500 font-semibold">${price}</p>
                <button className="text-orange-500 font-semibold"><FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Servicecard;