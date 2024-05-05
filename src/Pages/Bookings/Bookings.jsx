import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import BookingTBody from "./BookingTBody";


const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState()

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [url])

    const handleDelete = (_id) =>{
        const proceed = confirm("Are you want to delete")
        if(proceed){
            fetch(`http://localhost:5000/bookings/${_id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = bookings.filter(booking => booking._id !== _id)
                    setBookings(remaining)
                }
            })
        }
    }

    return (
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    bookings?.map(booking => <BookingTBody handleDelete={handleDelete} key={booking._id} booking={booking} ></BookingTBody>)
                }
                {/* foot */}
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot> */}

            </table>
        </div>
    );
};

export default Bookings;