import Footer from '@/components/footer/Footer';
import Link from 'next/link';

function index() {
    return (
        <div>


         {/* Menu start  */}
            <div className="pl-10 pr-10 pt-2 block h-auto sm:flex sm:h-[50px]  bg-lime-900 text-white">
                <div className="Logo_Side sm:w-[33%] w-auto">
                    <Link className='text-[20px] font-bold font-semibold' href="/">
                        This is Logo Blog
                    </Link>
                </div>
                <div className="MenuSide sm:w-[33%] w-auto">
                    <ul>
                        <li className='block sm:inline'>
                            <Link className='bg-lime-600 ml-5 p-5 hover:bg-lime-900 hover:shadow-lg hover:border-y-2 hover:border-sky-500 ease-in duration-300 text-black font-bold hover:text-white' href="/mobile"> Mobile </Link>
                        </li>
                        <li className='block sm:inline'>
                            <Link className='bg-lime-600 ml-5 p-5 hover:bg-lime-900 hover:shadow-lg hover:border-y-2 hover:border-sky-500 ease-in duration-300 text-black font-bold hover:text-white' href="/computer"> Computer </Link>
                        </li>
                        <li className='block sm:inline'>
                            <Link className='bg-lime-600 ml-5 p-5 hover:bg-lime-900 hover:shadow-lg hover:border-y-2 hover:border-sky-500 ease-in duration-300 text-black font-bold hover:text-white' href="/leptop"> Leptop </Link>
                        </li>
                    </ul>
                </div>


                <div className="UserProfileSide sm:w-[33%] w-auto text-right">
                    <button>
                        <Link className='ml-5' href="/login">Login </Link>
                    </button>
                    <button>
                        {/* <Link className='ml-5' href="/registration"> Registration </Link> */}
                    </button>
                </div>
            </div>
            {/* Menu end */}









            
            <section className=" w-full md:w-[80%] m-auto">
                <div className="m-5 border-2  bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create a New Account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">

                                {/* First Name  */}
                                <div>
                                    <label for="First Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your First Name</label>
                                    <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your First Name" required="" />
                                </div>

                                
                                {/* Last Name  */}
                                <div>
                                    <label for="First Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Last Name</label>
                                    <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Last Name" required="" />
                                </div>

                                {/* Mobile  */}
                                <div>
                                    <label for="Mobile Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Mobile Number</label>
                                    <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Mobile Number" required="" />
                                </div>

                                {/* email  */}
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email Address</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email Address" required="" />
                                </div>


                                {/* Password  */}
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                {/* Confirm Password Password  */}
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Confirm Password</label>
                                    <input type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <Link href=''>
                                    <button type="submit" className="w-full text-black bg-lime-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                                </Link>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Have an account yet? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</a>
                                </p>
                                
                            </form>
                        </div>
                </div>
                </section>


        <Footer />    






        </div>
    );
}

export default index;