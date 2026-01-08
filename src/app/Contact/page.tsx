import getSession from '../../../lib/GetSession';
import ContactUsContent from '../_components/ContactUsContent/ContactUsContent';
import HeroContact from '../_components/HeroContact/HeroContact';
import { UserInfoProps } from '../interfaces';
export default async function Contact() {
  const data = await getSession();
  const userInfo: UserInfoProps = {
    name: data?.user?.full_name,
    email: data?.user?.email,
  };

  return (
    <div className="flex flex-col gap-7">
      <HeroContact />
      <ContactUsContent userInfo={userInfo} />
    </div>
  );
}
