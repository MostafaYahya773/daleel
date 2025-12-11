'use client';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

interface Article {
  id: number;
  image: string;
  title: string;
  readTime: number;
  description: string;
  date: string;
}

const articles: Article[] = [
  {
    id: 1,
    image: '/blogHero.jpg',
    title: 'كيف أصبح الذكاء الاصطناعي يغير وجه التعليم إلى الأبد؟',
    readTime: 8,
    description:
      'في عام 2025 أصبحت الفصول الدراسية الذكية والمدرسين الافتراضيين جزءًا من الواقع اليومي. اكتشف كيف تتكيف المدارس والجامعات مع هذا التغيير الجذري.',
    date: '٢٩ نوفمبر ٢٠٢٥',
  },
  {
    id: 2,
    image: '/blogHero.jpg',
    title: 'أفضل 10 تطبيقات عربية غيرت حياتنا في 2025',
    readTime: 6,
    description:
      'من تطبيقات التوصيل السريع إلى المنصات التعليمية المجانية.. هذه التطبيقات العربية أصبحت لا غنى عنها في حياتنا اليومية.',
    date: '٢٧ نوفمبر ٢٠٢٥',
  },
  {
    id: 3,
    image: '/blogHero.jpg',
    title: 'لماذا فشل معظم المبرمجين العرب في 2025؟',
    readTime: 10,
    description:
      'تحليل صادم لأكثر الأخطاء شيوعًا التي يقع فيها المبرمجون العرب، وكيف يمكن تجنبها للوصول إلى الاحتراف الحقيقي.',
    date: '٢٥ نوفمبر ٢٠٢٥',
  },
  {
    id: 4,
    image: '/blogHero.jpg',
    title: 'السيارات الكهربائية في الوطن العربي: حلم أم واقع قريب؟',
    readTime: 7,
    description:
      'مع إطلاق أول مصنع عربي للسيارات الكهربائية في المغرب والسعودية.. هل نشهد ثورة خضراء في النقل قريبًا؟',
    date: '٢٣ نوفمبر ٢٠٢٥',
  },
  {
    id: 5,
    image: '/blogHero.jpg',
    title: 'هل أصبحت مهنة المبرمج مبالغ في تقديرها؟',
    readTime: 9,
    description:
      'آراء مثيرة للجدل من خبراء تقنيين عرب: هل فعلاً أي شخص يستطيع أن يصبح مبرمجًا ناجحًا في 6 أشهر فقط؟',
    date: '٢١ نوفمبر ٢٠٢٥',
  },
  {
    id: 6,
    image: '/blogHero.jpg',
    title: 'كيف جنى شاب مصري 2 مليون دولار من بيع صور بالذكاء الاصطناعي؟',
    readTime: 5,
    description:
      'قصة نجاح حقيقية لشاب من القاهرة استغل أدوات الـ AI ليصبح مليونيرًا في أقل من سنة.',
    date: '١٩ نوفمبر ٢٠٢٥',
  },
  {
    id: 7,
    image: '/blogHero.jpg',
    title: 'مستقبل العمل عن بعد في العالم العربي بعد 2025',
    readTime: 11,
    description:
      'هل ستبقى الشركات العربية ملتزمة بالعمل الهجين؟ تحليل شامل لاتجاهات سوق العمل في المنطقة.',
    date: '١٧ نوفمبر ٢٠٢٥',
  },
];

export default function BlogCart() {
  const isPriority = (index: number) => index < 3;
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div ref={ref} className="min-h-screen">
      {inView && (
        <div className="max-w-[1200px] mx-auto py-5">
          <h2 className="lg:text-[30px] md:text-[25px]  text-[20px] text-center mb-5 pb-3 border-b-2 border-therd w-fit mx-auto">
            احدث مقالات <span className="text-therd">دليل</span>
          </h2>
          <Link
            href="/blog/id"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl border-2 shadow-md border-gray-200  overflow-hidden duration-300 hover:scale-[103%]"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority={isPriority(index)}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-5">
                  <h3 className="md:text-[15px] font-bold text-fourth mb-4 group-hover:text-therd  transition-colors">
                    {article.title}
                  </h3>

                  {/* مدة القراءة + التاريخ */}
                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-5">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">
                        {article.readTime === 1
                          ? 'دقيقة واحدة'
                          : `${article.readTime} دقائق`}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  {/* الوصف */}
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed line-clamp-2 mb-6">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </Link>
        </div>
      )}
    </div>
  );
}
