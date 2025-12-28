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
import { usePathname } from 'next/navigation';

interface MenuProps {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const menu: MenuProps[] = [
  { name: 'الرئيسية', href: '/', icon: <House className="w-5 h-5" /> },
  {
    name: 'الملف الشخصي',
    href: '/Profile',
    icon: <User className="w-5 h-5" />,
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
  },
  {
    name: 'شهاداتي',
    href: '/MyCertificates',
    icon: <BookmarkCheck className="w-5 h-5" />,
  },
  { name: 'المدونة', href: '/Blogs', icon: <BookOpen className="w-5 h-5" /> },
  { name: 'الإدارة', href: '/Admin', icon: <ShieldUser className="w-5 h-5" /> },
  { name: 'تواصل معنا', href: '/Contact', icon: <Mail className="w-5 h-5" /> },
  {
    name: 'تسجيل الخروج',
    href: '/Logout',
    icon: <LogOut className="w-5 h-5" />,
  },
];

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = React.memo(({ isOpen, setIsOpen }: MobileMenuProps) => {
  const pathname = usePathname();

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
              <li key={item.name}>
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
});

export default MobileMenu;
