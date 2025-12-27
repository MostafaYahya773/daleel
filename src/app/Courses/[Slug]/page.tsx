import Image from 'next/image';
import { User, ChartNoAxesColumnDecreasing, Star } from 'lucide-react';
import CourseDetailsContent from '@/app/_components/CourseDetailsContent/CourseDetailsContent';
import getCourseBySlug from '../../../../lib/getCourseBySlug';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    console.log('❌ SLUG IS MISSING');
    return notFound();
  }

  // 🔥 أهم سطر في القصة كلها
  const normalizedSlug = decodeURIComponent(slug).trim().normalize('NFC');

  console.log('✅ FINAL SLUG:', normalizedSlug);

  const courseInfo = await getCourseBySlug(normalizedSlug);

  // ❗ هنا الصح تعمل notFound
  if (!courseInfo) {
    console.log('❌ COURSE NOT FOUND FOR SLUG:', normalizedSlug);
    return notFound();
  }

  return (
    <div className="flex flex-col gap-7 py-7">
      <div className="bg-secondary py-5 overflow-hidden lg:py-0 flex justify-center items-center mt-[40px] lg:mt-16 z-[-1] relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
        <span className="absolute md:w-[600] md:h-[600] w-[500px] h-[500px] rounded-full bg-primary -top-[160px] -right-40 z-0"></span>

        <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-start px-5 gap-5 z-20 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-7 justify-center">
            <h2 className="md:text-[40px] sm:text-[30px] text-[30px] text-therd">
              {courseInfo.course_name}
            </h2>

            <div className="flex items-center gap-5 bg-white w-fit px-5 py-2 rounded-full shadow-md mx-auto md:mx-0">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-therd" />
                <p className="font-bold">{courseInfo.students_count || 500}</p>
              </div>

              <span>|</span>

              <div className="flex items-center gap-2">
                <ChartNoAxesColumnDecreasing className="w-5 h-5 text-therd" />
                <p className="font-bold">{courseInfo.level}</p>
              </div>

              <span>|</span>

              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-therd" />
                <p className="font-bold">{courseInfo.reviews_count || 0}</p>
              </div>
            </div>
          </div>

          <div className="w-full hidden md:block z-40">
            <Image
              src="/courseDetailsHero.svg"
              width={500}
              height={500}
              priority
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <CourseDetailsContent
        description={courseInfo.description}
        whatYouWillLearn={courseInfo.what_you_will_learn}
        price={courseInfo.price}
        courseId={courseInfo.id}
        slug={courseInfo.slug}
      />
    </div>
  );
}
