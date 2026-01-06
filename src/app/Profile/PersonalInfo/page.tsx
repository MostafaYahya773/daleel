import getSession from '../../../../lib/GetSession';
import PersonalInfomForm from '../_Components/PersonalInfoForm/PersonalInfomForm';
import { User } from '../../interfaces';

const PersonalInfo = async () => {
  const session = await getSession();
  const userInfo: User | any = session?.user;

  return (
    <div className="flex flex-col gap-2 p-3">
      <h3 className="lg:text-[25px] md:text-[20px] text-[18px] font-medium">
        المعلومات الشخصية
      </h3>
      <PersonalInfomForm userInfo={userInfo} />
    </div>
  );
};

export default PersonalInfo;
