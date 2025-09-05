import { Box, Typography } from "@mui/material";
import jalaliDate from "@/utils/jalaliDate";
import TicketBadge from "../../ticketList/ticketBadge";
import Link from "next/link";

const ChatHead = ({ ticket }: { ticket: TicketModel }) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.element",
        position: "sticky",
        top: "0px",
        borderRadius: { xs: "0px", md: "8px 8px 0 0" },
        zIndex: 10,
        mt: { xs: "-1px", md: "0px" },
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          py: { xs: "10px", md: "30px" },
          px: "10px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "36px",
              height: "36px",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              bgcolor: "background.secondary",
              color: "icon.main",
            }}
          >
            <svg
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 9.5H4.88197C5.56717 9.5 6.19357 9.88713 6.5 10.5C6.80643 11.1129 7.43283 11.5 8.11803 11.5H13.882C14.5672 11.5 15.1936 11.1129 15.5 10.5C15.8064 9.88713 16.4328 9.5 17.118 9.5H20.5M7.96656 1.5H14.0334C15.1103 1.5 15.6487 1.5 16.1241 1.66396C16.5445 1.80896 16.9274 2.0456 17.2451 2.35675C17.6043 2.7086 17.8451 3.1902 18.3267 4.15337L20.4932 8.4865C20.6822 8.86449 20.7767 9.05348 20.8434 9.25155C20.9026 9.42745 20.9453 9.60847 20.971 9.79226C21 9.99923 21 10.2105 21 10.6331V12.7C21 14.3802 21 15.2202 20.673 15.862C20.3854 16.4265 19.9265 16.8854 19.362 17.173C18.7202 17.5 17.8802 17.5 16.2 17.5H5.8C4.11984 17.5 3.27976 17.5 2.63803 17.173C2.07354 16.8854 1.6146 16.4265 1.32698 15.862C1 15.2202 1 14.3802 1 12.7V10.6331C1 10.2105 1 9.99923 1.02897 9.79226C1.05471 9.60847 1.09744 9.42745 1.15662 9.25155C1.22326 9.05348 1.31776 8.86448 1.50675 8.4865L3.67331 4.15337C4.1549 3.19019 4.3957 2.7086 4.75495 2.35675C5.07263 2.0456 5.45551 1.80896 5.87589 1.66396C6.35125 1.5 6.88969 1.5 7.96656 1.5Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
          <Box
            sx={{
              mx: { xs: "0px", md: 1.5 },
            }}
          >
            <Typography
              sx={{
                color: "text.main",
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "600",
              }}
            >
              {`${ticket?.ticket_code}#`}
            </Typography>
            <Typography
              sx={{
                color: "#8899A6",
                fontSize: { xs: "13px", md: "16px" },
                fontWeight: "400",
              }}
            >
              {`ایجاد شده در ${jalaliDate(ticket?.date_created, "D MMMM")}`}
            </Typography>
          </Box>
        </Box>
        <Box>
          <TicketBadge type={ticket?.status_ticket} />
        </Box>
      </Box>
      {ticket?.status_ticket === "close" && (
        <Box
          sx={{
            background: "#A0E1E1",
            height: "40px",
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          <Typography
            sx={{
              color: "#344054",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {`تیکت در تاریخ ${jalaliDate(
              ticket?.date_created,
              "D MMMM YYYY"
            )} توسط ${ticket?.responder?.name} بسته شده`}
          </Typography>
          <Link href="/profile/support/">
            <Typography
              sx={{
                color: "button.main",
                fontSize: "16px",
                fontWeight: "500",
                textDecoration: "underline",
              }}
            >
              تیکت جدید
            </Typography>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default ChatHead;
