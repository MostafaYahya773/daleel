import getSession from '../../../../lib/GetSession';
import PersonalInfomForm from '../_Components/PersonalInfoForm/PersonalInfomForm';

const PersonalInfo = async () => {
  const user = await getSession();
  const userInfo = user?.user;

  return (
    <div className="flex flex-col gap-2 p-3">
      <h3 className="text-[25px] font-medium">المعلومات الشخصية</h3>
      <PersonalInfomForm userInfo={userInfo} />
    </div>
  );
};

export default PersonalInfo;
