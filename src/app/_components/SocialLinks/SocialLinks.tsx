import React from 'react';
import { Facebook, Send, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
interface SocialLinksProps {
  link: string;
  icon: React.ReactNode;
  className: string;
  title: string;
}

const socialLinks: SocialLinksProps[] = [
  {
    link: 'https://www.facebook.com/',
    icon: <Facebook />,
    className:
      'bg-blue-500 w-8 h-8 lg:w-10 lg:h-10  flex justify-center items-center rounded-full text-white hover:scale-[1.1] duration-300 shadow-lg',
    title: 'Facebook',
  },
  {
    link: 'https://t.me/Shahdtarraf44',
    icon: <Send />,
    className:
      'bg-blue-400 w-8 h-8 lg:w-10 lg:h-10  flex justify-center items-center rounded-full text-white hover:scale-[1.1] duration-300 shadow-lg',
    title: 'Telegram',
  },
  {
    link: 'https://wa.me/+963935746472',
    icon: <Phone />,
    className:
      'bg-green-500 w-8 h-8 lg:w-10 lg:h-10  flex justify-center items-center rounded-full text-white hover:scale-[1.1] duratio-300 shadow-lg',
    title: 'whatsapp',
  },
  {
    link: 'mailto:shahode54g@gmail.com',
    icon: <Mail />,
    className:
      'bg-white  w-8 h-8 lg:w-10 lg:h-10  flex justify-center items-center rounded-full text-red-400 hover:scale-[1.1] duration-300 shadow-lg',
    title: 'Gmail',
  },
];
export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3 ">
      {socialLinks.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={item.className}
          title={item.title}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
