import React from 'react';
import LoginForm from '../_Components/LoginForm';
import Image from 'next/image';

export default function LogIn() {
  return (
    <div className="flex justify-center items-center w-full h-screen lg:my-14">
      <div className="grid md:grid-cols-2 shadow-md border border-slate-200 rounded-lg grid-cols-1 gap-0 w-full">
        <div className="form min-h-[400px] lg:my-auto">
          <LoginForm />
        </div>
        <div className="img hidden md:block">
          <Image
            src="/logs.jpg"
            alt="auth"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
