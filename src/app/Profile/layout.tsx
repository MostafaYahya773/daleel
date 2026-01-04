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
    <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-3 lg:mt-24 mt-16">
      <ProfilePathes personalInfo={personalInfo} />
      <div className="show">{children}</div>
    </div>
  );
}
