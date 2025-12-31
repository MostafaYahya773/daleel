import getSession from '../../../../lib/GetSession';
import Nav from './Nav';

export default async function ServerNav() {
  const data = await getSession();

  return <Nav isLoggedIn={!!data} name={data?.user.full_name} />;
}
