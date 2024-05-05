import { useEffect } from "react";
import { useState } from "react";
import Servicecard from "./Servicecard";


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])



    return (
        <>

            <div className="mt-20 text-center">
                <h3 className="text-orange-500 text-xl font-bold mb-3">Service</h3>
                <h2 className="text-4xl font-bold mb-2">Our Service Area</h2>
                <p className="max-w-lg mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-5">
                {
                    services.map(service => <Servicecard key={service._id} service={service} ></Servicecard>)
                }
            </div>

        </>
    );
};

export default Services;