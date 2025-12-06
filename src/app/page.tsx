'use client';
import dynamic from 'next/dynamic';
import Hero from './_components/Hero/Hero';
const AboutUs = dynamic(() => import('./_components/AboutUs/AboutUs'), {
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

const WhyUs = dynamic(() => import('./_components/WhyUs/WhyUs'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
const Target = dynamic(() => import('./_components/Target/Target'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <AboutUs />
      <HomeComments />
      <Instructor />
      <WhyUs />
      <Target />
    </div>
  );
}
