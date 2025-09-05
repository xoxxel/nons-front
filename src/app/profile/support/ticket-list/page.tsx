import TicketList from "@/components/profile/support/ticketList";
import { fetchTickets } from "@/api/data";
import MobileTicketList from "@/components/profile/support/ticketList/mobile";

const TicketListPage = async () => {

  const tickets:{results:TicketModel[]} = await fetchTickets()

  return (
    <>
      <MobileTicketList tickets={tickets?.results} />
      <TicketList tickets={tickets?.results} />
    </>
  );
};

export default TicketListPage;
