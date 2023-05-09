import Link from 'next/link';


function Header() {
    return (
        <div className="pl-10 pr-10 pt-2 flex h-[50px] bg-lime-900 text-white">


            <div className="Logo_Side w-[33%]">
                <Link className='text-[20px] font-bold font-semibold' href="/">
                    This is Logo Blog
                </Link>
            </div>



            <div className="MenuSide w-[33%]">

                <ul>
                    <li className='inline'>
                        <Link className='bg-lime-600 ml-5 p-5 hover:bg-lime-900 hover:shadow-lg hover:border-y-2 hover:border-sky-500 ease-in duration-300 text-black font-bold hover:text-white' href=""> Mobile </Link>
                    </li>
                    <li className='inline'>
                        <Link className='bg-lime-600 ml-5 p-5 hover:bg-lime-900 hover:shadow-lg hover:border-y-2 hover:border-sky-500 ease-in duration-300 text-black font-bold hover:text-white' href=""> Computer </Link>
                    </li>
                    <li className='inline'>
                        <Link className='bg-lime-600 ml-5 p-5 hover:bg-lime-900 hover:shadow-lg hover:border-y-2 hover:border-sky-500 ease-in duration-300 text-black font-bold hover:text-white' href=""> Leptop </Link>
                    </li>
                </ul>

            </div>


            <div className="UserProfileSide w-[33%] text-right">

                <button>
                    <Link href="">Login </Link>
                </button>
                <button>
                    <Link href=""> Registration </Link>
                </button>

            </div>



        </div>
    );
}

export default Header;