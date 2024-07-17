import { FactsInterface } from "@/utils/interface/FactsInterface";
import { Box, Card, Grid } from "@mui/material";
import { FaUserFriends } from "react-icons/fa";
import CountUpAnimation from "../common/CountUp";
import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";

const facts: FactsInterface[] = [
  {
    id: 1,
    title: "Happy Clients",
    count: 5,
    icon: <FaUserFriends />,
  },
  {
    id: 2,
    title: "Downloads",
    count: 56,
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    title: "Happy Clients",
    count: 15,
    icon: <FaUserFriends />,
  },
  {
    id: 4,
    title: "Happy Clients",
    count: 8000,
    icon: <FaUserFriends />,
  },
];

const Facts = () => {
  return (
    <SectionWrapper bgColor="gradient">
      <SectionHeading
        heading="Some Of Company Real Facts"
        description="Lorem ipsum dolor sit amet, consectadetudzdae rcquisc adipiscing elit. Aenean socada commodo ligaui egets dolor. Nullam quis ante tiam sit ame orci eget erovtiu faucid."
        sx={{ color: "white" }}
      />
      <Grid container spacing={4}>
        {facts.map((fact) => (
          <Grid key={fact.id} item xs={12} sm={6} md={3}>
            <Card sx={{ p: 4, bgcolor: "background.secondary" }}>
              <Box sx={{ fontSize: "5rem" }}>{fact.icon}</Box>
              <Box style={{ fontSize: "2rem" }}>
                <CountUpAnimation end={fact.count} suffix="+" />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Facts;
