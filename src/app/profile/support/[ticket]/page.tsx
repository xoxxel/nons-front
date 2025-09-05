import { fetchTicketDetails } from "@/api/data";
import TicketDetails from "@/components/profile/support/ticketList/ticketDetails";

const TicketDetailsPage = async ({params}:{params:{ticket:number}}) => {
    const ticket:TicketModel = await fetchTicketDetails(params?.ticket);
    return (
        <>
            <TicketDetails ticket={ticket} />
        </>
    )
}

export default TicketDetailsPage;