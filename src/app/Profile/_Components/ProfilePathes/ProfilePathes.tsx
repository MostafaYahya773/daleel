'use client';
import { CameraIcon, Lock, Pen, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { UserProps } from '../../../interfaces';
import useUploadAvatar from '@/app/hook/useUploadAvatar';

interface PathesProps {
  name: string;
  href: string;
  icon: any;
  usetId?: string;
}

const ProfilePathes = React.memo(
  ({ personalInfo }: { personalInfo: UserProps }) => {
    const pathes: PathesProps[] = [
      {
        name: 'البيانات الشخصية',
        href: '/Profile/PersonalInfo',
        icon: <User className="w-5 h-5" />,
        usetId: personalInfo?.sub,
      },
      {
        name: 'كلمة المرور & الامان',
        href: '/Profile/Security',
        icon: <Lock className="w-5 h-5" />,
      },
    ];

    const pathname = usePathname();
    const { mutate: uploadAvatar, isPending } = useUploadAvatar();
    const [isHovered, setIsHovered] = useState(false);
    const handleProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      if (file) {
        uploadAvatar({ file, userId: personalInfo?.sub || '' });
      }
    };
    return (
      <div className="flex flex-col gap-4 sm:p-5 px-0 py-5 bg-gray-100 lg:h-[85vh]">
        <div className="w-full rounded-xl flex flex-col gap-2">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-[150px] h-[150px] mx-auto rounded-full bg-gray-200 relative overflow-hidden"
          >
            <div
              className={`absolute w-full h-full bg-black/30 cursor-pointer z-10 opacity-0 hover:opacity-100 duration-500 ${
                isHovered ? '' : 'hidden'
              }`}
            >
              <label
                htmlFor="upload-img"
                className="w-full h-full flex flex-col gap-3 justify-center items-center cursor-pointer"
              >
                <span
                  title="تحديث الصورة الشخصية"
                  className="bg-white rounded-full p-2"
                >
                  <CameraIcon className="w-7 h-7  text-therd" />
                </span>
              </label>
              <input
                id="upload-img"
                type="file"
                className="hidden"
                onChange={(e) => handleProfilePicture(e)}
              />
            </div>
            {isPending ? (
              <p className="flex justify-center items-center h-full w-full bg-black/30">
                <span className="loaderAnimation"></span>
              </p>
            ) : (
              <Image
                src={personalInfo?.avatar_url || '/logo.png'}
                alt="personal-img"
                priority
                width={150}
                height={150}
                className="w-full h-full object-contain"
              />
            )}
          </div>

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
