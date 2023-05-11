import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";

function index() {
    return (
        <div>
            <Header />

            <div className="w-full md:w-[50%] m-auto h-full md:h-[600px]">
                <div className="pt-10 shadow-lg p-5 border-2 rounded-lg m-5">
                    <h1 className="text-4xl py-5 text-center ">Forgot password</h1>
                    <label className="">Enter Your Email Address</label>
                    <input type="email" placeholder="Email Address"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <Link href='/Otp'>
                        <button type="submit" className="my-5 w-full text-black bg-lime-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
                    </Link>
                    <div className="mt-0">
                        <Link href='/login'><button className="my-5 mt-10 float-left text-black bg-lime-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button></Link>
                        <Link href='/registration'><button className="my-5 mt-10 float-right text-black bg-lime-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Registration</button></Link>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    );
}

export default index;