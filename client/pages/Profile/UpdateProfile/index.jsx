import Footer from "@/components/footer/Footer";
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
                        <Link className='ml-5' href="/Profile">Profile </Link>
                    </button>
                    <button>
                        {/* <Link className='ml-5' href="/registration"> Registration </Link> */}
                    </button>
                </div>
            </div>
            {/* Menu end */}




        {/* Profile start  */}
        <section className="w-full md:w-[80%] m-auto">
            <div className="Profile shadow-lg border-2 rounded-lg m-10 p-10">

                <div className="flex">
                    {/* profile data side  */}
                    <div className="data w-[60%] p-5">

                        <h1 className="text-5xl text-center font-bold mb-2">Profile Update</h1>
                        <hr />
                        <p className="mt-3 font-bold">First Name: </p>
                        <input type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <p className="mt-3 font-bold">Last Name: </p>
                        <input type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <p className="mt-3 font-bold">Mobile Number: </p>
                        <input type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <p className="mt-3 font-bold">Email Address: </p>
                        <input type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <p className="mt-3 font-bold">Password: </p>
                        <input type="text" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                        <p className="mt-3 font-bold">Image: </p>
                        <input type="file" className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

                    </div>
                    {/* profile data end  */}


                    {/* profile image side  */}
                    <div className="image ">
                        
                        <img className="w-[400px] h-[400px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" alt="" />

                    </div>
                    {/* profile image end  */}

                </div>

                {/* update btn  */}
                <div className="text-red-400">
                <Link href="/Profile">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline w-6 h-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg> */}

                    <button className="w-full inline mt-5 float-left text-black bg-lime-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update Profile</button>
                </Link>
                </div>
                {/* update btn end  */}


            </div>
        </section>
        {/* profile end  */}





        <Footer />





        </div>
    );
}

export default index;