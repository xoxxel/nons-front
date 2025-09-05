import { fetchTicketSubjects } from "@/api/data";
import CreateTicket from "@/components/profile/support/createTicket";

const ProfileSupport = async () => {
  const ticketSubjects = await fetchTicketSubjects();

  return (
    <>
      <CreateTicket subjects={ticketSubjects} />
    </>
  );
};

export default ProfileSupport;
