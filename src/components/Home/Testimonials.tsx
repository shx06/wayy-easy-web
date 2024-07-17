import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";

import { Box, IconButton, Typography } from "@mui/material";
import Slider from "react-slick";

import logo from "@/assets/images/logo-with-bg.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

type Props = {};

const data = [
  {
    _id: 1,
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis ullamcorper, bibendum felis vel, congue sem. Fusce auctor nisi eu nunc commodo, sit amet interdum sapien.",
  },
  {
    _id: 2,
    name: "Ben Smith",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    quote:
      "Sed pellentesque eleifend velit quis rutrum. Pellentesque sit amet ultricies nisl. Praesent dignissim massa vel euismod dignissim. Proin lacinia suscipit nisl, non finibus risus semper id.",
  },
  {
    _id: 3,
    name: "Mr. Bean",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    quote:
      "Sed pellentesque eleifend velit quis rutrum. Pellentesque sit amet ultricies nisl. Praesent dignissim massa vel euismod dignissim. Proin lacinia suscipit nisl, non finibus risus semper id.",
  },
  {
    _id: 4,
    name: "Afia",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    quote:
      "Sed pellentesque eleifend velit quis rutrum. Pellentesque sit amet ultricies nisl. Praesent dignissim massa vel euismod dignissim. Proin lacinia suscipit nisl, non finibus risus semper id.",
  },
];

export default function Testimonials({}: Props) {
  const CustomPrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <IconButton
        size="medium"
        color="primary"
        onClick={onClick}
        sx={{
          display: "grid",
          placeItems: "center",
          color: "primary.light",
          bgcolor: "background.primary",
          position: "absolute",
          top: -30,
          right: 50,
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <MdArrowBackIos />
      </IconButton>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <IconButton
        size="medium"
        color="primary"
        onClick={onClick}
        sx={{
          display: "grid",
          placeItems: "center",
          color: "primary.light",
          bgcolor: "background.primary",
          position: "absolute",
          top: -30,
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <MdArrowForwardIos />
      </IconButton>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    cssEase: "linear",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <SectionWrapper bgColor="secondary">
      <SectionHeading
        heading="Happy Clients"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            incidunt rerum dolores pariatur. Odio, id. Iure commodi, similique."
        position="center"
      />

      <Box sx={{ py: 6, position: "relative" }}>
        <Box
          component="div"
          sx={{
            width: 300,
            height: 2,
            bgcolor: "divider",
            mb: 3,
            ml: "auto",
            mr: 13,
          }}
        />
        <Slider {...settings}>
          {data.map((testimonial) => (
            <Box key={testimonial._id} sx={{ textAlign: "left", px: 1.5 }}>
              <Box sx={{ p: 2.5, bgcolor: "background.primary", borderRadius: 3 }}>
                <Box component={Image} src={logo} alt={testimonial.name} width={100} height={100} sx={{ display: "block" }} />

                <Typography variant="subtitle1" sx={{ mt: 3, fontSize: "18px", color: "text.primary" }}>
                  {testimonial.name}
                </Typography>

                <Box
                  component="div"
                  sx={{
                    width: 40,
                    height: 3,
                    bgcolor: "primary.main",
                    my: 2.5,
                  }}
                />

                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {testimonial.quote}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </SectionWrapper>
  );
}
