// app/auth/expired/page.tsx

export default function ExpiredValidate() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-slate-200 flex justify-center items-center p-4 rounded-lg gap-7 flex-col sm:w-[500px] h-[300px] w-full">
        <h2 className="text-therd text-[20px] font-bold">
          تم انتهاء صلاحية الرابط
        </h2>
      </div>
    </div>
  );
}
