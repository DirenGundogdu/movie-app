import React from 'react'

export default function NavbarPopular() {
    return (
        <div className='container mx-auto p-1'>
            <div className='md:flex'>

                 <div className=' items-center'> {/* Navbar Title  */}
                    <div  className='flex flex-row justify-center'>
                         <h1 className='m-2 md:mr-4 p-2 text-2xl font-bold '>Popüler olanlar</h1>
                    </div>
                </div>

                <nav className='flex flex-row justify-center p-4'>  {/* Navbar Content  */}
                    <ul  className='grid grid-cols-2 md:grid-cols-4 gap-2 text-center border border-navbar-color rounded-full font-bold items-center p-3 md:py-1 md:px-0 text-navbar-color'>
                        <li>
                            <a className='focus:bg-navbar-color focus:rounded-full p-2 md:focus:px-4 md:focus:py-2 focus:text-gradient-two' href="/#">
                            Yayın Akışı</a>
                        </li>
                        <li>
                            <a className='focus:bg-navbar-color focus:rounded-full pl-4 focus:p-2 focus:text-gradient-two' href="/#">
                            Televizyonda</a>
                        </li>
                        <li>
                            <a className='focus:bg-navbar-color focus:rounded-full focus:text-gradient-two focus:pl-5 focus:pr-5 focus:pt-2 focus:pb-2' href="/#">
                            Kiralık</a>
                        </li>
                        <li>
                            <a className='focus:bg-navbar-color focus:rounded-full pr-4 focus:p-2 focus:text-gradient-two' href="/#">
                            Sinemalarda</a>
                        </li>

                            {/* <li className='active:bg-navbar-color active:rounded-full active:border-navbar-color active:p-1'>
                        <a className='active:text-transparent active:bg-clip-text active:bg-gradient-to-r from-gradient-one to-gradient-two' href="/#">Televizyonda</a></li> */}
                       
                    </ul>
                </nav>
           
            </div>
        </div>
    )
}

