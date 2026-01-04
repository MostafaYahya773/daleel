import React from 'react';
import ProfilePathes from './_Components/ProfilePathes/ProfilePathes';
import getSession from '../../../lib/GetSession';
import { UserProps } from '../interfaces';
export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getSession();
  const personalInfo = user?.user;

  return (
    <div className="grid grid-cols-[25%_75%] gap-3 mt-24">
      <ProfilePathes personalInfo={personalInfo} />
      <div className="show">{children}</div>
    </div>
  );
}
