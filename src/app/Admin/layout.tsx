'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const Options = [
    { name: 'اضافة كورس', href: '/Admin/NewCourse' },
    { name: 'تحديث كورس', href: '/Admin/EditCourse' },
    { name: 'حذف كورس', href: '/Admin/DeleteCourse' },
    { name: 'اضافة درس', href: '/Admin/NewLesson' },
    { name: 'تحديث درس', href: '/Admin/EditLesson' },
    { name: 'حذف درس', href: '/Admin/DeleteLesson' },
  ];

  return (
    <div className="flex flex-col gap-7">
      <div className="mt-28 grid grid-cols-3 gap-5 border-b-2 border-gray-300 pb-5">
        {Options.map((opt) => {
          const isActive = pathname === opt.href;

          return (
            <Link
              key={opt.href}
              href={opt.href}
              className={`${
                isActive ? 'bg-therd text-white' : 'bg-slate-300 text-gray-700'
              } text-[18px] p-2 text-center rounded-lg hover:bg-therd hover:text-white duration-300`}
            >
              {opt.name}
            </Link>
          );
        })}
      </div>

      <div>{children}</div>
    </div>
  );
}
