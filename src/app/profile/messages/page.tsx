import { fetchMessages } from "@/api/data";
import ProfileMessages from "@/components/profile/messages";
import ChatRoomModel from "@/models/ChatRoom";

const page = async () => {
  const messages: { results: ChatRoomModel[] } = await fetchMessages({});
  return <ProfileMessages messages={messages?.results} />;
};

export default page;
