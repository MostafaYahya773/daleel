'use client';

import React from 'react';
import {
  LibraryBig,
  BookmarkCheck,
  LogOut,
  House,
  ShieldUser,
  BookOpen,
  Mail,
  SquareLibrary,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '../../../../lib/supabase/client';

interface MenuProps {
  name: string;
  href: string;
  role?: string;
  icon: React.ReactNode;
  IsLogIN?: boolean;
  onClick?: () => void;
}
interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  role: string;
}
const MobileMenu = React.memo(
  ({ isOpen, setIsOpen, isLoggedIn: logIn, role }: MobileMenuProps) => {
    const pathname = usePathname();
    const menu: MenuProps[] = [
      { name: 'الرئيسية', href: '/', icon: <House className="w-5 h-5" /> },
      {
        name: 'الملف الشخصي',
        href: '/Profile',
        icon: <User className="w-5 h-5" />,
        IsLogIN: logIn,
      },
      {
        name: 'الكورسات',
        href: '/Courses',
        icon: <SquareLibrary className="w-5 h-5" />,
      },
      {
        name: 'كورساتي',
        href: '/MyCourses',
        icon: <LibraryBig className="w-5 h-5" />,
        IsLogIN: logIn,
      },
      {
        name: 'شهاداتي',
        href: '/MyCertificates',
        icon: <BookmarkCheck className="w-5 h-5" />,
        IsLogIN: logIn,
      },
      {
        name: 'المدونة',
        href: '/Blogs',
        icon: <BookOpen className="w-5 h-5" />,
      },
      {
        name: 'الإدارة',
        href: '/Admin',
        icon: <ShieldUser className="w-5 h-5" />,
        IsLogIN: logIn,
        role,
      },
      {
        name: 'تواصل معنا',
        href: '/Contact',
        icon: <Mail className="w-5 h-5" />,
      },
      {
        name: logIn ? 'تسجيل الخروج' : 'تسجيل الدخول',
        href: logIn ? '/' : '/auth/LogIn',
        icon: <LogOut className="w-5 h-5" />,
        onClick: async () => {
          return await createClient().auth.signOut();
        },
      },
    ];

    return (
      <div
        className={`fixed right-0 md:hidden transition-all ${
          isOpen
            ? 'bg-black/30 backdrop-blur-sm w-screen h-screen'
            : 'bg-transparent pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-screen bg-white shadow-lg drop-shadow-sm px-4 py-7 w-[60vw] sm:w-[50vw] transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-7">
            {menu.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li
                  onClick={item.onClick}
                  key={item.name}
                  className={`${
                    item.role === 'user' || item.IsLogIN === false
                      ? 'hidden'
                      : ''
                  }`}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex  items-center gap-3 transition-colors ${
                      isActive ? 'text-therd font-semibold' : 'text-gray-700'
                    }`}
                  >
                    <span
                      className={`${isActive ? 'text-therd' : 'text-gray-500'}`}
                    >
                      {item.icon}
                    </span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
);

export default MobileMenu;
