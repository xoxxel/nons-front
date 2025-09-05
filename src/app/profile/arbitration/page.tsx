import { fetchArbitrationMessages, fetchUserData } from "@/api/data";
import ProfileMessages from "@/components/profile/messages";
import UserModel from "@/models/User";
import { redirect } from "next/navigation";

const page = async () => {
    const user: UserModel = await fetchUserData()
    const messages = await fetchArbitrationMessages();
    if (user?.is_admin)
        return (
            <ProfileMessages arbitration messages={messages} />)
    else return redirect("/profile/dashboard")
}

export default page;
