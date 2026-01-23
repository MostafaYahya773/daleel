'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();

  const options = [
    { name: 'اضافة كورس', href: '/Admin/NewCourse' },
    { name: 'تحديث كورس', href: '/Admin/EditCourse' },
    { name: 'حذف كورس', href: '/Admin/DeleteCourse' },
    { name: 'اضافة درس', href: '/Admin/NewLesson' },
    { name: 'تحديث درس', href: '/Admin/EditLesson' },
    { name: 'حذف درس', href: '/Admin/DeleteLesson' },
    { name: 'اضافة مقال', href: '/Admin/AddBlog' },
    { name: 'تحديث مقال', href: '/Admin/EditBlog' },
    { name: 'حذف مقال', href: '/Admin/DeleteBlog' },
    { name: 'استفسارات الطلاب', href: '/Admin/StudentsInquiries' },
    { name: 'تأكيد الدفع', href: '/Admin/ConfirmPayment' },
  ];

  return (
    <div className="flex flex-col gap-7">
      {/* Navigation */}
      <div className=" lg:mt-24 mt-20 grid md:grid-cols-3 grid-cols-2 gap-5 border-b-2 border-gray-300 pb-5">
        {options.map((opt) => {
          const isActive = pathname === opt.href;

          return (
            <Link
              key={opt.href}
              href={opt.href}
              className={`${
                isActive ? 'bg-therd text-white' : 'bg-slate-300 text-gray-700'
              } md:text-[18px] p-2 text-center rounded-lg hover:bg-therd hover:text-white duration-300`}
            >
              {opt.name}
            </Link>
          );
        })}
      </div>

      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
}
