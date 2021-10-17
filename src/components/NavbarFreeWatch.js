import React from 'react'

export default function NavbarFreeWatch() {
    return (
        <div className='container mx-auto p-1'>
            <div className='md:flex'>

                 <div className='items-center'> {/* Navbar Title  */}
                    <div  className='flex flex-row justify-center'>
                         <h1 className='m-2 md:mr-4 p-2 text-2xl font-bold'>İzlemek Ücretsiz</h1>
                    </div>
                </div>

                <nav className='flex flex-row justify-center p-4'>  {/* Navbar Content  */}
                    <ul  className='grid grid-cols-2 md:grid-cols-2 text-center border border-navbar-color rounded-full font-bold items-center p-3 md:py-1 md:px-0 text-navbar-color'>
                        <li>
                            <a className='focus:bg-navbar-color focus:rounded-full p-2 focus:px-4 focus:py-2 focus:text-gradient-two' href="/#">
                            Filmler</a>
                        </li>
                        <li>
                            <a className='focus:bg-navbar-color focus:rounded-full pl-4 focus:py-2 focus:px-6 focus:text-gradient-two' href="/#">
                            TV</a>
                        </li>
                        
                    </ul>
                </nav>
           
            </div>
        </div>
    )
}

