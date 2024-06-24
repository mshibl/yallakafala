import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const items = [
  {
    number: "01",
    title: "Yalla Family House",
    description:
      "A haven for vulnerable Egyptian children, providing a nurturing home environment with high-standard education and vocational skills.",
  },
  {
    number: "02",
    title: "Safe Independent Future",
    description:
      "A haven for vulnerable Egyptian children, providing a nurturing home environment with high-standard education and vocational skills.",
  },
  {
    number: "03",
    title: "Safe Family Guidelines",
    description:
      "Comprehensive guidelines for orphans and kafala families, ensuring safety and well-being.",
  },
  {
    number: "04",
    title: "Safe Family Placement",
    description:
      "Matching orphans, migrants, and refugees with loving Kafala families for long-term stability.",
  },
  {
    number: "05",
    title: "Safe Little Home",
    description:
      "Providing a safe, nurturing home environment for refugee and migrant children, facilitating placement with families.",
  },
];

const Initiatives = () => {
  return (
    <Box
      sx={{
        paddingX: { xs: "40px", md: "180px" },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "50px" },
          fontWeight: "bold",
          marginBottom: { xs: "10px", md: "35px" },
          marginTop: { xs: "20px", md: "40px" },
          lineHeight: { sx: "32px", md: "61px" },
          color: "primary.main",
        }}
        variant="h2"
      >
        Yalla Kafala's <br />
        Initiatives
      </Typography>
      <Box
        sx={{
          paddingX: { xs: "0px", md: "180px" },
        }}
      >
        {items.map((item, index) => {
          return (
            <Box
              sx={{
                width: "100%",
              }}
              key={index}
            >
              <Typography
                textAlign={index % 2 === 0 ? "left" : "right"}
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "55px", md: "95px" },
                }}
                color={"primary.main"}
                variant="h1"
              >
                {item.number}
              </Typography>
              <Typography
                textAlign={index % 2 === 0 ? "left" : "right"}
                sx={{
                  fontSize: { xs: "16px", md: "24px" },
                }}
                color={"secondary.main"}
                variant="h3"
              >
                {item.title}
              </Typography>
              <Typography
                textAlign={index % 2 === 0 ? "left" : "right"}
                variant="body1"
              >
                {item.description}
              </Typography>
            </Box>
          );
        })}

        {/* <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid item xs={12} key={index}>
              <Grid
                container
                spacing={2}
                justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
              >
                <Grid item xs={5} sm={4} md={3}>
                  <Box
                    display="flex"
                    flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
                    alignItems="center"
                  >
                    <Typography
                      variant="h2"
                      component="span"
                      sx={{
                        color: "#5a2d55",
                        fontWeight: "bold",
                        marginRight: index % 2 === 0 ? 2 : 0,
                        marginLeft: index % 2 !== 0 ? 2 : 0,
                      }}
                    >
                      {item.number}
                    </Typography>
                    <Box>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          fontWeight: "bold",
                          color: index % 2 === 0 ? "#5a2d55" : "#0000ff",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1" component="div">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </Box>
  );
};

export default Initiatives;
