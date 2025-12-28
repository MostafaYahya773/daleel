'use client';
import React, { useState } from 'react';
import { User, LibraryBig, BookmarkCheck, LogOut } from 'lucide-react';
import Link from 'next/link';

const NavDropList = React.memo(
  ({
    setIsOpen,
    isOpen,
  }: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  }) => {
    interface NavDropListProps {
      name: string;
      href: string;
      icon: React.ReactNode;
    }
    const DropList: NavDropListProps[] = [
      {
        name: 'الملف الشخصي',
        href: '/Profile',
        icon: <User className="w-5 h-5" />,
      },
      {
        name: 'كورساتي',
        href: '/MyCourses',
        icon: <LibraryBig className="w-5 h-5" />,
      },
      {
        name: 'شهاداتي',
        href: '/MyCertificates',
        icon: <BookmarkCheck className="w-5 h-5" />,
      },
      {
        name: 'تسجيل الخروج',
        href: '/Logout',
        icon: <LogOut className="w-5 h-5" />,
      },
    ];
    const [isHovered, setIsHovered] = useState('');
    return (
      <div
        className={`bg-white rounded-md min-w-[200px] shadow-md text-gray-500 font-normal p-2 absolute left-0 lg:top-20 md:top-16 hidden ${
          isOpen ? 'md:block' : 'md:hidden'
        } `}
      >
        {DropList.map((item) => (
          <div
            className={`flex items-center gap-3 p-2 cursor-pointer ${
              isHovered === item.name ? ' text-therd' : ''
            }`}
            key={item.name}
            onMouseEnter={() => setIsHovered(item.name)}
            onMouseLeave={() => setIsHovered('')}
            onClick={() => setIsOpen(false)}
          >
            <span className="text-therd ">{item.icon}</span>
            <Link className="text-[15px]" href={item.href}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
);
export default NavDropList;
