import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen w-screen fixed top-0 z-20 left-0 right-0 bg-white drop-shadow-lg flex items-center justify-center">
      <Image
        src="/LoadingAnimation.svg"
        width={200}
        height={200}
        alt="loading"
      />
    </div>
  );
}
