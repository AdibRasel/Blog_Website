function Home() {
    return (
        <div className="w-[90%] m-auto border-2 p-5">
            
            {/* Main Box  */}
            <div className="sm:flex block">

                {/* left box start */}
                <div className="sm:w-[78%] sm:mr-5 flex w-auto border-2 rounded-lg">                    
                    <div className="text-side p-5 w-[80%]">
                        <h1 className="text-justify text-lime-900 text-[25px] font-bold">This is Blog Title</h1>
                        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius blanditiis excepturi autem ducimus dicta nostrum, ipsa praesentium asperiores nemo?</p>
                    </div>


                    <div className="img_side w-[20%]">
                        <img className="w-[300px] h-[200px] border-t-2 right" src="https://2.bp.blogspot.com/-_aHL2IeMoXw/TlaMrVJHMnI/AAAAAAAAAB4/xYqNv_fIAcA/Picture%2525202.png" alt="" />
                    </div>
                </div>
                {/* left box end  */}




                {/* right box start */}
                <div className="sm:w-[30%] w-auto">
                    
                    <div className="catagory">
                        <h1>Catagory</h1>
                        <h1>Catagory</h1>
                        <h1>Catagory</h1>
                    </div>

                    <div className="post">
                        <h1>Post</h1>
                    </div>



                </div>
                {/* right box end */}

            </div>






        </div>
    );
}

export default Home;