

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-10" style={{ backgroundImage: 'url(https://i.ibb.co/B4sNKg0/erik-mclean-ZRns2-R5azu0-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                    <p className="mb-5 max-w-md mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning">Discover More</button>
                    <button className="btn btn-outline text-white ml-4">Latest Project</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;