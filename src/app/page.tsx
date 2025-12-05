'use client';
import dynamic from 'next/dynamic';
import Hero from './_components/Hero/Hero';
const WhyUs = dynamic(() => import('./_components/WhyUs/WhyUs'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const HomeComments = dynamic(() => import('./_components/Comments/Comments'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Instructor = dynamic(
  () => import('./_components/Instractor/Instractor'),
  { ssr: false, loading: () => <p>Loading...</p> }
);
export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <WhyUs />
      <HomeComments />
      <Instructor />
    </div>
  );
}
