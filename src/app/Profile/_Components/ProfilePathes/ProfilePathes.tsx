'use client';
import { Lock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { UserProps } from '../../../interfaces';

interface PathesProps {
  name: string;
  href: string;
  icon: any;
}

const ProfilePathes = React.memo(
  ({ personalInfo }: { personalInfo: UserProps }) => {
    const pathes: PathesProps[] = [
      {
        name: 'البيانات الشخصية',
        href: '/Profile/PersonalInfo',
        icon: <User className="w-5 h-5" />,
      },
      {
        name: 'كلمة المرور & الامان',
        href: '/Profile/Security',
        icon: <Lock className="w-5 h-5" />,
      },
    ];

    const pathname = usePathname();

    return (
      <div className="flex flex-col gap-4 sm:p-5 px-0 py-5 bg-gray-100 lg:h-[85vh]">
        <div className="w-full rounded-xl flex flex-col gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mx-auto rounded-full bg-gray-200"
          />
          <h2 className="text-center font-bold text-[16px]">
            {personalInfo?.full_name}
          </h2>
          <p className="text-center text-gray-400 text-[16px]">
            {personalInfo?.email}
          </p>
        </div>
        <ul className="flex flex-row lg:flex-col justify-center gap-2">
          {pathes.map((path) => (
            <li
              key={path.name}
              className={`${
                pathname === path.href
                  ? 'text-therd bg-primary '
                  : 'text-gray-500'
              }  flex items-center gap-2 p-2 rounded-xl `}
            >
              <span>{path.icon}</span>

              <Link className="w-full" href={path.href}>
                {path.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
export default ProfilePathes;
