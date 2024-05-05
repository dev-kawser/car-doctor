/* eslint-disable react/prop-types */

import { FaRegPenToSquare } from "react-icons/fa6";


const BookingTBody = ({ booking, handleDelete }) => {

    const { _id, date, service, userName, email, img } = booking;

    return (
        <tbody>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {/* { img && <img src={img} alt="Avatar Tailwind CSS Component" />} */}
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{userName}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {service}
                </td>
                <td>{date}</td>
                <th>
                    <button className="btn btn-ghost"><FaRegPenToSquare /></button>
                </th>
            </tr>
        </tbody>
    );
};

export default BookingTBody;