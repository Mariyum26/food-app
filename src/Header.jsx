import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <>
        <section className="flex justify-between items-center shadow-lg">
            <img src={LOGO_URL} className="w-[50px] lg:w-[100px]"></img>
            <div>
                <ul className="flex text-md mr-10 md:mr-20 md:text-lg ">
                    <Link to="about"className="focus:outline-none"><li className="mr-10 md:mr-20">About</li></Link>
                    <li className="mr-10 md:mr-20">Contact Us</li>
                    <li>Search</li>
                </ul>
            </div>
        </section>
        </>
    )
}
export default Header;