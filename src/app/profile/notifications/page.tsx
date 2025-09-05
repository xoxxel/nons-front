import { fetchNotifications } from "@/api/data";
import Notifications from "@/components/profile/notifications";
import MobileNotifications from "@/components/profile/notifications/mobileNotifications";

const ProfileNotifications = async () => {
  const notifications: NotificationModel[] = await fetchNotifications();

  return (
    <>
      <Notifications notifications={notifications} />
      <MobileNotifications notifications={notifications} />
    </>
  );
};

export default ProfileNotifications;
