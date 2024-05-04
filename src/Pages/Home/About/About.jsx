import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                    <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
                    <img src={parts} className="max-w-sm rounded-xl border-8 border-white absolute right-12 top-1/2 shadow-2xl" />
                </div>
                <div className="w-1/2">
                    <h3 className="text-orange-500 text-xl font-bold mb-3">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;