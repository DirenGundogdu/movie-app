import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import FreeMovie from "./CarouselAll/FreeMovie"
  import FreeTv from "./CarouselAll/FreeTV"

export default function NavbarFreeWatch() {
    return (
        <Router>
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
                            <Link activeClassName="active" to="/" className='focus:bg-navbar-color focus:rounded-full p-2 focus:px-4 focus:py-2 focus:text-gradient-two'>
                            Filmler</Link>
                        </li>
                        <li>
                            <Link to="/freetv" activeClassName="active" className='focus:bg-navbar-color focus:rounded-full pl-4 focus:py-2 focus:px-6 focus:text-gradient-two'>
                            TV</Link>
                        </li>
                        
                    </ul>
                </nav>
           
            </div>
        </div>
        <Switch>
        <Route path="/freetv">
          <FreeTv />
        </Route>       
        <Route path="/">
          <FreeMovie />
        </Route>
      </Switch>
        </Router>
    )
}

