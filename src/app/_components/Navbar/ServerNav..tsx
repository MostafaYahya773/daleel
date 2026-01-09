import getSession from '../../../../lib/GetSession';
import getUserAvatar from '../../../../lib/getUserAvatar';
import Nav from './Nav';
export default async function ServerNav() {
  const data = await getSession();
  const personalInfo = data?.user;
  const userImg = await getUserAvatar({ userId: personalInfo?.sub });
  return (
    <Nav
      isLoggedIn={!!data}
      name={data?.user.full_name}
      role={data?.role}
      email={data?.user?.email}
      avatar_url={userImg}
    />
  );
}
