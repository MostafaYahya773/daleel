import Image from 'next/image';
import SignUpForm from '../_Components/SignUpForm';

export default function SignUp() {
  return (
    <div className="flex justify-center items-center w-full h-screen md:my-36 my-5 ">
      <div className="grid md:grid-cols-2 shadow-md border border-slate-200 rounded-lg grid-cols-1 gap-0 w-full ">
        <div className="form min-h-[400px]">
          <SignUpForm />
        </div>
        <div className="img md:block hidden">
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
