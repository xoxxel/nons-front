import { fetchRecentActivities } from "@/api/data";
import UserActivities from "@/components/profile/activities";
import MobileActivities from "@/components/profile/activities/mobileActivities";
import ActivityModel from "@/models/Activity";

const UserActivitiesPage = async ({
  searchParams,
}: {
  searchParams: { type: "incomes" | "outgoings" };
}) => {
  const activities: { results: ActivityModel[] } = await fetchRecentActivities({
    limit:18,
    is_input:
      searchParams?.type === "incomes"
        ? "true"
        : searchParams?.type === "outgoings"
        ? "false"
        : "",
  });
  return (
    <>
      <UserActivities activities={activities?.results} />
      <MobileActivities activities={activities?.results} />
    </>
  );
};

export default UserActivitiesPage;
