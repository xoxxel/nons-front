"use clinet";
import UserProfileLayout from "@/components/profile/userInfo/customerMenu/userProfileLayout";
import UserProvider from "@/context/UserProvider";

const ProfileMainRouteLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
      <UserProfileLayout>{children}</UserProfileLayout>
  );
};

export default ProfileMainRouteLayout;
