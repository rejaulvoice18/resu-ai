import { GoArrowUpRight } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-[#FFD6D6] px-5 xl:px-0'>
            <div className="max-w-screen-xl mx-auto ">
                {/* title section */}
                <div className='py-24 flex justify-between items-end border-b'>
                    <h3 className='text-5xl md:text-6xl lg:text-7xl font-bold'>Unlock Your
                        <span className='block my-2'>Career</span>
                        <span>Potential</span>
                    </h3>
                    <div className="flex gap-3 items-center text-lg">
                        <button className='text-xl cursor-pointer'>
                            <a href="#contact">Get Started</a>
                        </button>
                        <span className="text-2xl"><GoArrowUpRight /></span>
                    </div>
                </div>

                {/* link section */}
                <div className="lg:flex justify-between items-baseline py-6 space-y-3 lg:space-y-0">
                    <div>
                        <Link className="text-2xl font-bold">Resu AI</Link>
                    </div>
                    <div className="">
                        <div className="flex gap-3 text-lg">
                            <Link>Features</Link>
                            <Link to="">About</Link>
                            <Link to="">Pricing</Link>
                            <Link to="">Contact</Link>
                        </div>
                    </div>
                    {/* privacy link section */}
                    <div>
                        <div className="lg:flex flex-col gap-3 items-end text-lg">
                            <div>
                                <Link>Privacy Policy | </Link>
                                <Link to="">Terms of Service | </Link>
                                <Link to="">Privacy Policy | </Link>
                                <Link to="">Privacy Policy | </Link>
                            </div>
                            <div className="mt-2 lg:mt-0">
                                <button className="bg-white px-2 rounded-md">
                                    <a href="https://codedesign.ai/">
                                        Build With Code Design Ai</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;