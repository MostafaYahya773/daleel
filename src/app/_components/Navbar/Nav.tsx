'use client';
import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import NavDropList from '../NavDropList/NavDropList';
import { usePathname } from 'next/navigation';
import MobileMenu from '../MobileMenu/MobileManu';

const Nav = ({
  isLoggedIn,
  name,
  role,
  email,
}: {
  isLoggedIn: boolean;
  name: string;
  role: string;
  email: string;
}) => {
  const path = usePathname();
  interface NavProps {
    name: string;
    href: string;
    role?: string;
  }
  const pages: NavProps[] = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الكورسات', href: '/Courses' },
    { name: 'المدونة', href: '/Blogs' },
    { name: 'تواصل معنا', href: '/Contact' },
    { name: 'الإدارة', href: '/Admin', role: role },
  ];

  const [isClicked, setIsClicked] = useState(path);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 p-2 bg-white shadow-md z-[100] ">
      <div className="md:grid md:grid-cols-[auto_1fr_auto]  items-center max-w-[1200px] mx-auto relative">
        <div className="flex items-center gap-3 justify-between md:justify-start">
          <div>
            <span
              onClick={() => setIsOpen(!isOpen)}
              className="mt-1 block md:hidden"
            >
              <Menu className="w-6 h-6 text-therd" />
            </span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-3 overflow-hidden md:overflow-visible"
          >
            <Image
              src="/logo.png"
              width={70}
              height={70}
              alt="user Image"
              className="object-cover scale-[1.5] md:scale-[2] px-2 lg:px-0"
            />
          </Link>
        </div>
        <div className="links justify-center items-center gap-5 md:text-[16px] lg:text-[18px] text-gray-500 hidden md:flex">
          {pages.map((page) => (
            <Link
              onClick={() => setIsClicked(page.href)}
              key={page.name}
              href={page.href}
            >
              <span
                className={`${
                  isClicked && path === page.href ? 'text-therd' : ''
                }  ${
                  page.href === '/Admin' && role !== 'admin' ? 'hidden' : ''
                }`}
              >
                {page.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="user item-center justify-end gap-2 text-white md:flex hidden">
          {!isLoggedIn ? (
            <Link href="/auth/LogIn">
              <button className="py-2 px-5 bg-therd rounded-md">
                تسجيل الدخول
              </button>
            </Link>
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
                src="/logo.png"
                width={0}
                height={0}
                alt="user Image"
                className="rounded-full object-cover w-9 h-9"
              />
            </div>
          )}
        </div>
        <div>
          <NavDropList setIsOpen={setIsOpen} isOpen={isOpen} />
          <MobileMenu
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            isLoggedIn={isLoggedIn}
            role={role}
            email={email}
            name={name}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
