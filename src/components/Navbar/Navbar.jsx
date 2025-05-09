




import React, { createContext, useContext, useEffect, useState } from 'react';

import bannerImage from '../../assets/banner.jpg'

import { BsCart3 } from "react-icons/bs";
import { Link, NavLink, useLocation } from 'react-router-dom';
import Products from '../Products/Products';
import { WishContext, cartContext } from '../Root/Root';
import { IoIosHeartEmpty } from "react-icons/io";
import { Helmet } from 'react-helmet-async';
import Footer from '../Footer/Footer';
// export const cartContext = createContext(0);



const Navbar = () => {
    const [heading, setHeading] = useState('');
    const { cart } = useContext(cartContext);
    const { wish } = useContext(WishContext);

    // console.log('Cart:', cart);
    // console.log('Wish length', wish.length);
    const handleCart = (x) => {
        console.log(x)

    }



    const location = useLocation();


    // console.log('Path:', location.pathname);
    const path = location.pathname;


    useEffect(() => {



        if (path === '/') {
            console.log('yes');
            setHeading('Upgrade Your Tech Accessorize with Gadget Heaven Accessories');

        }
        else if (path === '/statistics') {
            console.log('yes');
            setHeading('Statistics');

        }
        else if (path === '/dashboard') {
            console.log('yes');
            setHeading('Dashboard');

        }
        // else if (path==='/product') {
        //     setHeading("Product Details")
        // }


    }, [path])


    // const links = <>
    //     <li><Link to={'/'}>Home </Link></li>

    //     <li>  <Link to={'/statistics'}>Statistics</Link></li>

    //     <li>  <Link to={'/dashboard'}>Dashboard</Link></li>

    // </>

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                // className={({ isActive }) => 
                //     isActive ? "text-primary font-bold" : ""
                // }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? "text-primary font-bold" : ""
                    }
                >
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                        isActive ? "text-primary font-bold" : ""
                    }
                >
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? "text-primary font-bold" : ""
                    }
                >
                    Dashboard
                </NavLink>
            </li>
        </>
    );


    return (
        <>
            <Helmet>
                {/* <title>Gadget | Dashboard</title> */}
                {/* <meta name="description" content="Description of this page" /> */}
                {/* <link rel="icon" type="image/x-icon" href="/path/to/your/favicon.ico" /> */}
                <link rel="shortcut icon" href="https://i.ibb.co.com/hVqQxsG/favicon-16x16.png" type="image/x-icon" />

            </Helmet>
            <div className='relative'>
                <div className={`  ${path === '/' ? 'text-white  absolute left-0 right-0   rounded-3xl pb-24 bg-primary ' : ''}  `}>

                    {/* text-white rounded-3xl bg-primary border-[7px] border-b1 */}


                    <div className=" navbar-section p-10 flex justify-between">


                        <div className="">


                            <h1 className='text-xl font-bold'>Gadget Heaven</h1>
                        </div>
                        <div className="flex">
                            <ul className=" flex gap-10 px-1">

                                {links}
                            </ul>
                        </div>
                        <div className="flex text-black items-center gap-4 pr-4">
                            {/* <a className="btn">Button</a>  */}
                            <div className='flex border border-white bg-white p-2 rounded-[50%] items-center gap-1'>
                                {/* <h3>1</h3> */}
                                <sup>{cart?.length ? cart.length : ''}</sup>
                                <BsCart3 className='font-bold' />
                            </div>

                            <div className='flex border border-white bg-white p-2  rounded-[50%] items-center gap-1'>
                                {/* <h3>1</h3> */}
                                <sup>{wish?.length ? wish.length : ''}</sup>
                                <IoIosHeartEmpty className='font-bold' />
                            </div>




                        </div>



                    </div>

                    {/* banner */}

                    {
                        path == '/' &&
                        <div className='bg-primary py-5 text-white'>





                            <h1 className='text-center text-2xl font-bold'>{heading}</h1>

                            <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                            <div className='flex py-4 justify-center gap-5 items-center'>

                                {

                                    path === '/' &&

                                    <a href="#products">
                                        <button

                                            className='bg-white font-bold  border border-white px-4 rounded-[32px] py-2 text-primary'>Shop Now
                                        </button>

                                    </a>


                                }





                            </div>

                        </div>
                    }



























                </div>

                {path === '/' &&

                    <div className='absolute left-0 top-72 right-0'>

                        <div className='mx-20   '>
                            <div className='border-2  border-white px-4 pt-4 rounded-[32px]'>

                            <img src={bannerImage} className='rounded-3xl h-[400px] w-full' alt="" />
                       
                            </div>
                          
                        </div>


                        <div id='products' className=' pt-4'>

                            {
                                path === '/' &&

                                <Products  ></Products>


                            }



                        </div>

                        
                           
                            <Footer></Footer>
                        

                        

                    </div>

                }
            </div>

        </>

    );
};

export default Navbar;
