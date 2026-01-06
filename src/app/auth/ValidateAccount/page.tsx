export default function ValidateAccount() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 bg-slate-200 rounded-lg gap-7 flex flex-col justify-center items-center sm:w-[500px] h-[300px] w-full">
        <h2 className="text-[20px] text-therd font-bold">
          تم ارسال رابط التفعيل الي البريد الالكتروني
        </h2>
        <p className="text-slate-400 text-[18px]">
          من فضلك تفقد بريدك الالكتروني
        </p>
      </div>
    </div>
  );
}
