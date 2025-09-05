import { Box, Button, Container, Typography } from "@mui/material";
import BalanceCard from "../activitiesMenu/balanceCard";
import MobileTransaction from "./transaction";
import ActivityModel from "@/models/Activity";
import Link from "next/link";
import ActivitiesEmptyState from "../emptyState";

const MobileActivities = ({ activities }: { activities: ActivityModel[] }) => {
  return (
    <Container sx={{ display: { md: "none", xs: "block" }, pt: "10px" }}>
      <BalanceCard />
      <Box sx={{ mt: "10px", py: 3, px: "10px" }}>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "600", color: "text.main" }}
        >
          فعالیت های اخیر
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", my: "20px" }}>
          <Link href="/profile/activities">
          <Button
            sx={{
              color: "white",
              height: "24px",
              bgcolor: "black.main",
              minWidth: "10px",
              fontSize: "14px",
              py: 1.5,
              ":hover": { bgcolor: "black.main" },
            }}
          >
            همه
          </Button>
          </Link>
          <Link href="/profile/activities/?type=incomes">
          <Button
            sx={{
              color: "white",
              height: "24px",
              bgcolor: "black.main",
              minWidth: "10px",
              fontSize: "14px",
              py: 1.5,
              ":hover": { bgcolor: "black.main" },
            }}
          >
            ورودی ها
          </Button>
          </Link>
          <Link href="/profile/activities/?type=outgoings"><Button
            sx={{
              color: "white",
              height: "24px",
              bgcolor: "black.main",
              minWidth: "10px",
              fontSize: "14px",
              py: 1.5,
              ":hover": { bgcolor: "black.main" },
            }}
          >
            خروجی ها
          </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: "10px",
            gap: "10px",
            mb: "60px",
          }}
        >
          {activities?.length > 0 ? activities?.map((activity) => (
            <MobileTransaction
              type={
                activity?.order
                  ? "trade"
                  : activity?.transaction?.status_type === "deposite"
                  ? "deposit"
                  : "withdraw"
              }
              activity={activity}
            />
          )) : <ActivitiesEmptyState />}
        </Box>
      </Box>
    </Container>
  );
};

export default MobileActivities;
