import React from 'react';
import Navbar from "../../compoents/Navbar";
import {Outlet} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <Navbar></Navbar>
                </div>
                <div className='row'>
                    <div className='col-12'>
                     <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;