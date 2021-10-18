import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import PopularStreaming from "./CarouselAll/PopularStreaming"
import PopularTV from "./CarouselAll/PopularTV"
import PopularRent from "./CarouselAll/PopularRent"
import PopularTheater from "./CarouselAll/PopularTheater"


export default function NavbarPopular() {
  
    return (
        <Router>
        <div className='container mx-auto p-1'>
            <div className='md:flex'>

                 <div className='items-center'> {/* Navbar Title  */}
                    <div  className='flex flex-row justify-center'>
                         <h1 className='m-2 md:mr-4 p-2 text-2xl font-bold'>Popüler olanlar</h1>
                    </div>
                </div>

                <nav className='flex flex-row justify-center p-4'>  {/* Navbar Content  */}
                    <ul  className='grid grid-cols-2 md:grid-cols-4 gap-2 text-center border border-navbar-color rounded-full font-bold items-center p-3 md:py-1 md:px-0 text-navbar-color'>
                        <li>
                            <Link to="/" activeClassName="active" className='focus:bg-navbar-color focus:rounded-full p-2 md:focus:px-4 md:focus:py-2 focus:text-gradient-two'>
                            Yayın Akışı</Link>
                        </li>
                        <li>
                            <Link to="/populartv" activeClassName="active" className='focus:bg-navbar-color focus:rounded-full pl-4 focus:p-2 focus:text-gradient-two'> 
                            Televizyonda</Link>
                        </li>
                        <li>
                            <Link to="/popularent" activeClassName="active" className='focus:bg-navbar-color focus:rounded-full focus:text-gradient-two focus:pl-5 focus:pr-5 focus:pt-2 focus:pb-2'>
                            Kiralık</Link>
                        </li>
                        <li>
                            <Link to="/populartheater" activeClassName="active" className='focus:bg-navbar-color focus:rounded-full pr-4 focus:p-2 focus:text-gradient-two'>
                            Sinemalarda</Link>
                        </li>

                            {/* <li className='active:bg-navbar-color active:rounded-full active:border-navbar-color active:p-1'>
                        <a className='active:text-transparent active:bg-clip-text active:bg-gradient-to-r from-gradient-one to-gradient-two' href="/#">Televizyonda</a></li> */}
                       
                    </ul>
                </nav>
           
            </div>
        <Switch>
        <Route path="/populartv">
          <PopularTV />
        </Route>       
        <Route path="/popularent">
          <PopularRent />
        </Route>       
        <Route path="/populartheater">
          <PopularTheater />
        </Route>       
        <Route path="/">
          <PopularStreaming />
        </Route>
      </Switch>
        </div>
        </Router>
    )
}

