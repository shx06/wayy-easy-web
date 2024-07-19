import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";

import { Box, IconButton, Typography } from "@mui/material";
import Slider from "react-slick";

import logo from "@/assets/images/logo.png";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

type Props = {};

const data = [
  {
    _id: 1,
    name: "Mr. Ali",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    quote:
      "Wayy Easy & team created an outstanding delivery website for our company. Their expertise in Next.js and React.js resulted in a visually stunning, highly functional, and user-friendly site. The seamless communication and attention to detail were impressive, and they delivered on time with valuable insights that enhanced the final product. Highly recommended!",
  },
  {
    _id: 2,
    name: "Ben Smith",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    quote:
      "Wayy Easy & team developed a fantastic mobile application for our company. The app boasts robust functionality, intuitive design, and smooth performance. Their professionalism and expertise ensured timely delivery and exceeded our expectations. Highly recommended for top-notch mobile app development!",
  },
  {
    _id: 3,
    name: "Mr. Ben",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    quote:
      "Wayy Easy & team developed an outstanding blockchain project for us. Their deep understanding of blockchain technology and meticulous attention to detail resulted in a secure and efficient solution. The project was delivered on time, with seamless communication throughout. Highly recommended for any blockchain development needs!",
  },
  {
    _id: 4,
    name: "Afia",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    quote:
      "Wayy Easy & team delivered exceptional Android and iOS apps for our business. The apps are user-friendly, feature-rich, and perform flawlessly across both platforms. Their expertise and dedication ensured a smooth development process and timely delivery. Highly recommended for top-tier mobile app development!",
  },
];

export default function Testimonials({ }: Props) {
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
        description="What our clients say about us."
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
                <Box component={Image} src={logo} alt={testimonial.name} width={100} height={50} sx={{ display: "block" }} />

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
