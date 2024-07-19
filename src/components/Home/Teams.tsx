import {
  Box,
  Grid,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";

import teamMembers from "@/assets/data/teamMembers";
import { ITeamMember } from "@/utils/interface/dataModels";

type Props = {};

export default function Teams({}: Props) {
  const theme = useTheme();
  // const [teamMembers, setTeamMembers] = useState([]);
  // const { data: teamMembers } = useGetTeamsQuery("", {
  //   refetchOnMountOrArgChange: true,
  // });

  const linearGradient: string = `linear-gradient(45deg,  #1565c0, #64b5f6  )`;
  return (
    <SectionWrapper bgColor="primary">
      <SectionHeading
        heading="Meet our Experts"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            incidunt rerum dolores pariatur. Odio, id. Iure commodi, similique."
        position="left"
      />

      <Grid container spacing={{ xs: 3, md: 8 }} sx={{ my: 6 }}>
        {teamMembers?.map((item: ITeamMember) => (
          <Grid item xs={12} sm={6} lg={4} key={item._id}>
            <Box
              // className={styles.card}
              sx={{
                p: { xs: 4, sm: 2, md: 4 },
                position: "relative",
                overflow: "visible",
                borderRadius: 2,
                boxShadow: 5,
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "background.secondary"
                    : "background.primary",

                "&::after": {
                  content: "''",
                  borderRadius: 2,
                  width: "100%",
                  height: "2%",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "primary.darker"
                      : "primary.main",
                  transition: "all 0.3s linear",
                  zIndex: 0,
                },
                "&:hover::after": {
                  height: "100%",
                },
                "&:hover img": {
                  transform: "scale(1.02)",
                },
                "&:hover h4": {
                  color: "white",
                },

                "&:hover h6": {
                  color: "white",
                },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={{ xs: 3, sm: 2, md: 5 }}
                sx={{ ml: { xs: 0, md: 1 } }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{ zIndex: 2 }}
                >
                  {/* <Link
                    href={item?.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      color="primary"
                      sx={{ background: linearGradient }}
                    >
                      <FaFacebookF color="white" size={20} />
                    </IconButton>
                  </Link>
                  <Link
                    href={item?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      color="primary"
                      sx={{ background: linearGradient }}
                    >
                      <FaTwitter color="white" size={20} />
                    </IconButton>
                  </Link>
                  <Link
                    href={item?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      color="primary"
                      sx={{ background: linearGradient }}
                    >
                      <FaLinkedinIn color="white" size={20} />
                    </IconButton>
                  </Link>
                  <Link
                    href={item?.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      color="primary"
                      sx={{ background: linearGradient }}
                    >
                      <FaGoogle color="white" size={20} />
                    </IconButton>
                  </Link> */}
                </Stack>
                <Box
                  component="img"
                  src={item?.img}
                  sx={{
                    display: "block",
                    height: { xs: 200, lg: 250 },
                    width: { xs: 200, lg: 250 },
                    objectFit: "contain",
                    position: "relative",
                    mr: { xs: 0, md: -50 },
                    borderRadius: 4,
                    zIndex: 2,
                    transition: "transform .3s",
                  }}
                />
              </Stack>

              <Stack
                direction="column"
                alignItems="center"
                justifyContent="flex-start"
                spacing={1}
                sx={{ mt: 5, zIndex: 2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "text.primary",
                    transition: "color 0.3s",
                    fontWeight: 600,
                    zIndex: 2,
                  }}
                >
                  {item?.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "primary.main",
                    transition: "color 0.3s",
                    fontWeight: 500,
                    zIndex: 2,
                  }}
                >
                  {item?.designation}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
