import UserMobileTabs from "./tabs";

const UserProfileMobileLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <>
  <UserMobileTabs />
  {children}
  </>;
};

export default UserProfileMobileLayout;
