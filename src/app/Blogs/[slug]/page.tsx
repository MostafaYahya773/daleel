import getBlogBySlug from '../../../../lib/getBlogBySlug';
import Image from 'next/image';
import getSession from '../../../../lib/GetSession';
import getUserAvatar from '../../../../lib/getUserAvatar';
const supjectDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const slugDecoded = decodeURI(slug).normalize('NFC').trim();
  const [blog, user, avatar] = await Promise.all([
    getBlogBySlug(slugDecoded),
    getSession(),
    getUserAvatar(),
  ]);

  return (
    <div className="min-h-screen flex flex-col lg:gap-16 md:gap-10 gap-7 mt-14">
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen ">
        <Image
          src={blog.image_url ?? '/logo.png'}
          alt={blog?.title}
          width={200}
          height={200}
          loading="lazy"
          className="w-full xl:h-[700px]"
        />
      </div>
      <div className="detaile flex justify-between gap-4">
        <div className="puplisher details flex gap-2">
          <Image
            src={avatar ?? '/logo.png'}
            alt={'puplisherimg'}
            width={70}
            height={70}
            loading="lazy"
            className="md:w-[50px] w-[40px] h-[40px] md:h-[50px] rounded-full"
          />
          <div className="flex flex-col gap-1  justify-center">
            <h2 className="text-fourth text-[14px] md:text-[18px] font-bold">
              {user?.user?.full_name}
            </h2>
            <p className="text-gray-500 text-[14px]">
              {blog?.created_at.split('T')[0]}
            </p>
          </div>
        </div>
        <div className="comments">لا يوجد تعليقات</div>
      </div>
      <div className="content flex flex-col gap-4">
        <h2 className="text-therd lg:text-[24px] md:text-[20px] text-[18px] font-bold">
          {blog?.title}
        </h2>
        <p className="text-gray-500 lg:text-[18px] md:text-[16px] text-[14px]">
          {blog?.content}
        </p>
      </div>
    </div>
  );
};

export default supjectDetails;
