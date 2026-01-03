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
  ChevronLeft,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '../../../../lib/supabase/client';
import Image from 'next/image';

interface MenuProps {
  name?: string;
  href: string;
  email?: string;
  role?: string;
  icon?: React.ReactNode;
  IsLogIN?: boolean;
  onClick?: () => void;
}
interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  role: string;
  email: string;
  name: string;
}
const MobileMenu = React.memo(
  ({
    isOpen,
    setIsOpen,
    isLoggedIn: logIn,
    role,
    email,
    name,
  }: MobileMenuProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const menu: MenuProps[] = [
      {
        name: name,
        href: '/Profile',
        icon: <User className="w-5 h-5" />,
        IsLogIN: logIn,
        email: email,
      },
      { name: 'الرئيسية', href: '/', icon: <House className="w-5 h-5" /> },
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
          await createClient().auth.signOut();
          router.refresh();
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
          <div className="flex flex-col gap-3">
            <Link
              href="/Profile"
              className={`${
                !name ? 'hidden' : ''
              } flex gap-2 relative items-center bg-gray-100 py-2 rounded-md `}
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="w-15 h-15"
              />
              <div className="personal_info flex flex-col">
                <span className="text-[12px]">{name}</span>
                <span className="text-[12px] text-gray-500">{email}</span>
              </div>
              <ChevronLeft className="absolute left-3 w-5  text-gray-400" />
            </Link>
            <ul className="flex flex-col gap-7">
              {menu?.slice(1).map((item) => {
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
                        className={`${
                          isActive ? 'text-therd' : 'text-gray-500'
                        }`}
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
      </div>
    );
  }
);

export default MobileMenu;
