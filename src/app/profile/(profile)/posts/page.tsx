import ProfilePosts from "@/components/profile/userInfo/main/profilePosts";
import ProfilePostsMobile from "@/components/profile/userInfo/main/mobileProfile/profilePosts";

const ProfilePostsPage = () => {
  return (
    <>
      <ProfilePostsMobile />
      <ProfilePosts />
    </>
  );
};

export default ProfilePostsPage;
