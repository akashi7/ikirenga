'use client';
import Link from 'next/link';
import Image from 'next/image';
import gsap from "gsap";
import { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ScrollTrigger } from "gsap/all";
import { Tween } from "gsap/gsap-core";
import { useLayoutEffect, useRef } from "react";
const Navbar = () => {
    const [show,setShow]=useState(false);
    let tl = useRef();
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        // ---------- selecting all horizontal sections
        gsap.fromTo(".ubu-one", { opacity: 0,x:-100 }, { opacity: 1,x:0, duration: 1,scrollTrigger:{trigger:".ubu-one",start:'top bottom',end:"bottom center",scrub:true} },);
        gsap.fromTo(".festival", { opacity: 0,y:0,rotateY:100,scale:0 }, { opacity: 1,x:0,rotateY:0,scale:1, duration: 1,scrollTrigger:{trigger:".festival",start:'top bottom',end:"bottom center",scrub:true} },);
        gsap.fromTo(".twigire", { opacity: 0,y:100,scale:0 }, { opacity: 1,scale:1,y:0, duration: 1,scrollTrigger:{trigger:".twigire",start:'top bottom',end:"bottom center",scrub:true} },);
        gsap.fromTo(".artistic", { opacity: 0,x:-300, }, { opacity: 1,x:0, duration: 1,scrollTrigger:{trigger:".artistic",start:'top bottom',end:"bottom center",scrub:true} },);
        gsap.fromTo(".left-text", { opacity: 0,x:-100 }, { opacity: 1,x:0, duration: 1,scrollTrigger:{trigger:".left-text",start:'top bottom',end:"bottom center",scrub:true} },);
        gsap.fromTo(".obj", { scale:0 }, { scale:1, duration: 1,scrollTrigger:{trigger:".obj",start:'top bottom',end:"bottom center",scrub:true} },);
      });
  
      return () => ctx.revert();
  
    }, []);
    return (
        <div>
            <nav className="w-full flex fixed z-40 justify-between px-10 lg:px-20 py-4 items-center bg-white">
                <h1 className="text-xl text-gray-800 font-bold">
                    <img src={'https://res.cloudinary.com/amatunda/image/upload/v1702495481/ikirenga_ykswue.png'} alt="logo" width={70} height={70} />
                </h1>
                <div className="flex flex-1 items-center justify-around">
                    <div className="flex items-center">
                    </div>
                    <ul className="hidden lg:flex items-center space-x-10">
                        <li><a className="font-normal text-sm text-gray-500" href="/">Home</a></li>
                        <li><Link href={"#activities"}><span className="font-normal text-sm text-gray-700 ml-2">Activities</span></Link></li>
                        <li><Link href={"#aboutus"}><span className="font-normal text-sm text-gray-700 ml-2">About Us</span></Link></li>
                        <li><a href="https://www.flickr.com/photos/199711353@N08/albums/"><span className="font-normal text-sm text-gray-700 ml-2">Gallery</span></a></li>
                        <li><Link href={"#contact"}><span className="font-normal text-sm text-gray-700 ml-2">Contact</span></Link></li>
                        <li>
                            <Link href={"#trends"}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex  cursor-pointer md:hidden lg:hidden" onClick={()=>setShow(true)}>
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </div>
            </nav>
            {show && <section className='w-[100%] border-box flex flex-col h-full bg-white p-4 z-40 fixed top-0 left-0'>
                <section className='w-[100%] p-4 h-[50px] flex justify-end pr-8 '>
                <IoMdCloseCircleOutline size={25} onClick={()=>setShow(false)}/>
                </section>
                <section className='w-[100%] p-4 mt-8 bg-white min-h-[50px] flex justify-center pr-8 '>
                    <ul className=" items-start space-y-10">
                        <li><Link href="/" onClick={()=>setShow(false)} className="font-normal text-sm text-gray-500">Home</Link></li>
                        <li><Link href={"#activities"} onClick={()=>setShow(false)}><span className="font-normal text-sm text-gray-700">Activities</span></Link></li>
                        <li><Link href={"#aboutus"} onClick={()=>setShow(false)}><span className="font-normal text-sm text-gray-700">About Us</span></Link></li>
                        <li><a href="https://www.flickr.com/photos/199711353@N08/albums/"><span className="font-normal text-sm text-gray-700">Gallery</span></a></li>
                        <li><Link href={"#contact"} onClick={()=>setShow(false)}><span className="font-normal text-sm text-gray-700">Contact</span></Link></li>
                        <li>
                            <Link href={"#trends"} onClick={()=>setShow(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </section>
            </section>}
        </div>
    );
}
export default Navbar;