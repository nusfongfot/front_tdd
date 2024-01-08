import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import * as React from "react";

const data = [
  {
    title: "Lorem ipsum",
    subtitle:
      "One-stop Platform community for Agents and Operator in Thailand.",
    src: "/assets/images/pg1.png",
  },
  {
    title: "Lorem ipsum",
    subtitle:
      "One-stop Platform community for Agents and Operator in Thailand.",
    src: "/assets/images/pg2.png",
  },
  {
    title: "Lorem ipsum",
    subtitle:
      "One-stop Platform community for Agents and Operator in Thailand.",
    src: "/assets/images/pg3.png",
  },
  {
    title: "Lorem ipsum",
    subtitle:
      "One-stop Platform community for Agents and Operator in Thailand.",
    src: "/assets/images/pg4.png",
  },
];

export default function CardTour() {
  return (
    <Container maxWidth='xl' sx={{ mt: 3, mb: 3 }}>
      <Typography
        className='text-[#142B41]'
        align='center'
        fontWeight={700}
        variant='h4'
        mb={3}
      >
        Lorem ipsum
      </Typography>
      <Grid container>
        {data.map((item, i) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={i} mb={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={item.src}
                title='green iguana'
              />
              <CardContent>
                <Typography
                  className='text-[#142B41]'
                  align='center'
                  fontWeight={700}
                  variant='h6'
                >
                  {item.title}
                </Typography>
                <Typography variant='body2' color='#142B41' align='center'>
                  {item.subtitle.substring(0, 31)}
                </Typography>
                <Typography variant='body2' color='#142B41' align='center'>
                  {item.subtitle.substring(31, 80)}
                </Typography>
              </CardContent>
              <CardActions>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  width={"100%"}
                >
                  <button className='bg-[#2A4B6A] text-white rounded-3xl p-2 w-[130px] font-bold'>
                    Buy package
                  </button>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
