'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const Sidebar = () => {
    return (
        <section className='w-full border-box flex flex-col h-full bg-white z-40 fixed top-0 left-0 menu-container'>
            <section className='w-[100%] p-4 h-[50px] flex'>
                <span className='cursor-pointer' onClick={() => setShow(false)}>close</span>
            </section>
            <section className='w-full mt-8 bg-white min-h-[50px] flex justify-center'>
                <ul className="w-1/5 bg-red-500 justify-center space-y-10">
                    <li><Link href="/" onClick={() => setShow(false)} className="font-normal text-sm text-gray-500">Home</Link></li>
                    <li><Link href={"#activities"} onClick={() => setShow(false)}><span className="font-normal text-sm text-gray-700">Activities</span></Link></li>
                    <li><Link href={"#aboutus"} onClick={() => setShow(false)}><span className="font-normal text-sm text-gray-700">About Us</span></Link></li>
                    <li><a href="https://www.flickr.com/photos/199547503@N05/albums"><span className="font-normal text-sm text-gray-700">Gallery</span></a></li>
                    <li><Link href={"#contact"} onClick={() => setShow(false)}><span className="font-normal text-sm text-gray-700">Contact</span></Link></li>
                    <li>
                        <Link href={"#trends"} onClick={() => setShow(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </Link>
                    </li>
                </ul>
            </section>
        </section>
    );
}
export default Sidebar;