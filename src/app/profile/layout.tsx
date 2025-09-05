import ProfileLayoutCompnent from "@/components/profile/sidebar/layout";
import AccountProvider from "@/context/accountProvider";
import { SidebarProvider } from "@/context/dashboardSidebar";
import ShopStepProvider from "@/context/shopStepsProvider";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AccountProvider>
      <SidebarProvider>
        <ShopStepProvider>
        <ProfileLayoutCompnent>{children}</ProfileLayoutCompnent>
        </ShopStepProvider>
      </SidebarProvider>
    </AccountProvider>
  );
};

export default ProfileLayout;
