import React, { useState } from 'react';
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
  {
    name: 'الرئيسية',
    href: '/',
    icon: <House className="w-5 h-5" />,
  },
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
  {
    name: 'المدونة',
    href: '/Blogs',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    name: 'الإدارة',
    href: '/Admin',
    icon: <ShieldUser className="w-5 h-5" />,
  },
  {
    name: 'تواصل معنا',
    href: '/Contact',
    icon: <Mail className="w-5 h-5" />,
  },
  {
    name: 'تسجيل الخروج',
    href: '/Logout',
    icon: <LogOut className="w-5 h-5" />,
  },
];
const MobileMenu = React.memo(
  ({
    setIsOpen,
    isOpen,
  }: {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isOpen: boolean;
  }) => {
    const path = usePathname();
    const [isAcive, setIsAcive] = useState(path);
    return (
      <div
        className={`fixed w-screen h-screen right-0 ${
          isOpen ? 'backdrop-blur-sm bg-black/30' : 'backdrop-blur-0 '
        }    block md:hidden`}
      >
        <div
          className={`flex flex-col gap-5 bg-white  shadow-lg p-3 h-screen duration-300 w-[60vw] sm:w-[50vw]  ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } ]`}
        >
          {menu.map((item) => (
            <ul
              key={item.name}
              className="flex flex-col gap-3 px-1 py-2 cursor-pointer"
            >
              <li>
                <Link
                  className={`${
                    isAcive && path === item.href ? 'text-therd' : ''
                  } flex items-center gap-2`}
                  onClick={() => {
                    setIsOpen(false);
                    setIsAcive(item.href);
                  }}
                  href={item.href}
                >
                  <span className="text-therd">{item.icon}</span>
                  <span className="text-[14px]">{item.name}</span>
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
);

export default MobileMenu;
