import Link from 'next/link';


function Header() {
    return (
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
                    <Link className='ml-5' href="/registration"> Registration </Link>
                </button>

            </div>



        </div>
    );
}

export default Header;