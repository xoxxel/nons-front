import ProfileLayout from "@/components/profile/userInfo/profileMenu/profileLayout";
import UserProvider from "@/context/UserProvider";

const ProfileMainRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <ProfileLayout>{children}</ProfileLayout>
  );
};

export default ProfileMainRootLayout;
