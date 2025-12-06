'use client';
import React, { useState } from 'react';
import { ChevronDown, CodeXml } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import NavDropList from '../NavDropList/NavDropList';
export default function Nav() {
  interface NavProps {
    name: string;
    href: string;
  }
  const name = 'Mostafa yahya mahmoud hassan';
  const pages: NavProps[] = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الكورسات', href: '/Courses' },
    { name: 'المدونة', href: '/Blogs' },
    { name: 'تواصل معنا', href: '/Contact' },
  ];
  const [isClicked, setIsClicked] = useState('الرئيسية');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 p-2 bg-white shadow-md z-50 overflow-y-hidden">
      <div className=" grid md:grid-cols-[auto_1fr_auto] grid-cols-2 items-center  max-w-[1200px] mx-auto relative ">
        <Link href="/" className="flex items-center gap-3 ">
          <Image
            src="/logo.png"
            width={70}
            height={70}
            alt="user Image"
            className="object-cover scale-[2] px-2 lg:px-0"
          />
        </Link>
        <div className="links  justify-center items-center gap-5 text-[18px] text-gray-500 hidden md:flex">
          {pages.map((page) => (
            <Link
              onClick={() => setIsClicked(page?.name)}
              key={page.name}
              href={page.href}
            >
              <span className={isClicked === page.name ? 'text-therd' : ''}>
                {page.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="user flex item-center justify-end gap-2 text-white">
          {isLoggedIn ? (
            <button
              className="py-2 px-5 bg-therd rounded-md "
              onClick={() => {
                setIsLoggedIn(false);
              }}
            >
              تسجيل الدخول
            </button>
          ) : (
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex gap-1 items-center cursor-pointer "
            >
              <p className={`text-therd mt-0 hidden sm:block`}>
                {name.split(' ').slice(0, 3).join(' ')}
              </p>
              <ChevronDown className="w-5 h-5 text-gray-500" />
              <Image
                src="/doctor.jpg"
                width={0}
                height={0}
                alt="user Image"
                className="rounded-full object-cover w-9 h-9"
              />
            </div>
          )}
        </div>
        <div
          className={`navDropDown ${
            isOpen ? 'block' : 'hidden'
          } absolute left-0 top-16 z-50`}
        >
          <NavDropList setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}
