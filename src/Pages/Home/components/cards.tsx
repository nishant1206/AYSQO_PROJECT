// ServicesSection.tsx
import React from "react";
import Container from "@mui/material/Container";
import { GridLegacy as Grid } from "@mui/material";       
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";

import IconWeb from "./../../../assets/iconbox_4.png";
import IconMobile from "./../../../assets/iconbox_4.png";
import IconDM from "./../../../assets/iconbox_4.png";
import IconInterior from "./../../../assets/iconbox_4.png";

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Web Design",
    description:
      "Professional, mobile-ready websites—fast and tailored for your brand.",
    link: "#",
    image: IconWeb,
  },
  {
    title: "Mobile Applications",
    description:
      "Enterprise-grade Android & iOS apps built for performance and scale.",
    link: "#",
    image: IconMobile,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that amplify your brand’s online presence.",
    link: "#",
    image: IconDM,
  },
  {
    title: "Interior Designing",
    description:
      "Spaces that reflect your style—functional, elegant, unforgettable.",
    link: "#",
    image: IconInterior,
  },
];

const ServicesSection: React.FC = () => (
  <Container maxWidth="lg" sx={{ py: 10 }}>
    <Grid
      container
      rowSpacing={6}
      columnSpacing={{ xs: 4, sm: 6, md: 8 }}
      justifyContent="center"
    >
      {services.map((svc) => (
        <Grid xs={12} sm={6} md={3} key={svc.title}>
          <Card
            elevation={2}
            sx={{
              borderRadius: 3,
              transition: "transform 300ms ease, box-shadow 300ms ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 8,
              },
            }}
          >
            <CardActionArea
              href={svc.link}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                py: 4,
              }}
            >
              {/* Icon backdrop */}
              <CardMedia
                component="div"
                sx={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <CardMedia
                  component="img"
                  src={svc.image}
                  alt={svc.title}
                  sx={{ width: 48, height: 48, objectFit: "contain" }}
                />
              </CardMedia>

              <CardContent sx={{ textAlign: "center", px: 3, pb: 0 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {svc.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {svc.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ServicesSection;
