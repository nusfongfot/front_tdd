import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageDialog from "@/components/image_dialog";
import { useInfoStore } from "@/zustand/auth";

type Props = {};

const country = [
  {
    value: "Thailand",
    label: "Thailand",
  },
  {
    value: "Laos",
    label: "Laos",
  },
];

const codePhone = [
  {
    value: "+66",
    label: "+66",
  },
  {
    value: "+11",
    label: "+11",
  },
];

const province = [
  {
    value: "Bangkok",
    label: "Bangkok",
  },
];

const district = [
  {
    value: "Bang Khen",
    label: "Bang Khen",
  },
];

const subDistrict = [
  {
    value: "Bang Khen",
    label: "Bang Khen",
  },
];

const zipcode = [
  {
    value: "10110",
    label: "10110",
  },
];
export default function SignInPage({}: Props) {
  const router = useRouter();
  const { setInfo } = useInfoStore();
  const refInputFile = React.useRef<HTMLInputElement | null>(null);

  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [openImage, setOpenImage] = React.useState(false);
  const [values, setValues] = React.useState({
    email: "",
  });

  const handleChangeValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickOpenImage = () => {
    setOpenImage(true);
  };
  const handleCloseImage = () => {
    setOpenImage(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleFileUpload = () => {
    if (refInputFile.current) {
      refInputFile.current.click();
    }
  };

  const handleSubmit = () => {
    const body = {
      email: values.email,
      picture: selectedImage,
    };
    setInfo(body);
  };
  return (
    <Container maxWidth='lg' sx={{ mt: 13 }}>
      <Paper sx={{ p: 2, borderRadius: "0.5rem" }}>
        <Stack flexDirection={"row"} justifyContent={"center"} mt={2} mb={2}>
          <Box
            onClick={handleFileUpload}
            className='w-[122px] h-[122px] p-1 flex items-center justify-center border-solid border-[1px] rounded-full border-[#021E42] cursor-pointer'
          >
            {selectedImage ? (
              <div>
                <Avatar
                  sx={{ width: 120, height: 120 }}
                  src={selectedImage}
                  onMouseEnter={() => setIsHovered(true)}
                  // onMouseLeave={() => setIsHovered(false)}
                />
              </div>
            ) : (
              <Avatar
                sx={{ width: 60, height: 60 }}
                src={"/assets/images/pic.png"}
              />
            )}
            <input
              type='file'
              ref={refInputFile}
              onChange={handleFileChange}
              accept='image/jpeg, image/png'
              style={{ display: "none" }}
            />
          </Box>

          {isHovered && (
            <Paper
              sx={{
                p: 3,
                border: "1px solid red",
                height: 250,
                width: 180,
                ml: 4,
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Stack
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                minHeight={"20vh"}
              >
                <div className='w-[122px] h-[122px] p-1 flex items-center justify-center border-solid border-[1px] rounded-full border-[#021E42] cursor-pointer'>
                  <Avatar
                    src={selectedImage ? selectedImage : ""}
                    sx={{
                      width: 120,
                      height: 120,
                      position: "relative",
                      opacity: 0.7,
                    }}
                  />
                </div>

                <Stack
                  flexDirection={"row"}
                  sx={{ position: "absolute" }}
                  gap={1}
                >
                  <RemoveRedEyeIcon
                    sx={{ cursor: "pointer" }}
                    onClick={handleClickOpenImage}
                  />
                  <DeleteIcon
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedImage(null);
                      setIsHovered(false);
                    }}
                  />
                </Stack>
              </Stack>
            </Paper>
          )}
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Email</Typography>
              <OutlinedInput
                fullWidth
                startAdornment={
                  <InputAdornment position='start'>
                    <img
                      src='/assets/images/Vector.png'
                      className='w-[20px] h-[15px]'
                    />
                  </InputAdornment>
                }
                placeholder='Enter your email'
                size='small'
                type='email'
                name='email'
                value={values.email}
                onChange={handleChangeValues}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Password</Typography>
              <OutlinedInput
                fullWidth
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position='start'>
                    <img
                      src='/assets/images/Vector2.png'
                      className='w-[15px] h-[15px]'
                    />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      <img
                        src='/assets/images/Vector3.png'
                        className='w-[20px] h-[15px]'
                      />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder='Enter your password'
                size='small'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Confirmed Password</Typography>
              <OutlinedInput
                fullWidth
                id='outlined-adornment-amount3'
                type={showPassword ? "text" : "password"}
                startAdornment={
                  <InputAdornment position='start'>
                    <img
                      src='/assets/images/Vector2.png'
                      className='w-[15px] h-[15px]'
                    />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      <img
                        src='/assets/images/Vector3.png'
                        className='w-[20px] h-[15px]'
                      />
                    </IconButton>
                  </InputAdornment>
                }
                placeholder='Enter your password'
                size='small'
              />
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 4, mb: 4 }} />
        <Typography color={"#255FA8"} fontWeight={700} variant='h5' mb={2}>
          Information
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Company Name</Typography>
              <TextField
                fullWidth
                size='small'
                placeholder='Enter company name'
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Tax ID</Typography>
              <TextField fullWidth size='small' placeholder='Enter Tax ID' />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Full Name</Typography>
              <TextField fullWidth size='small' placeholder='Enter Full name' />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Country</Typography>
              <TextField
                id='outlined-select-currency'
                select
                defaultValue='Thailand'
                size='small'
                fullWidth
              >
                {country.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Phone Number</Typography>
              <Stack flexDirection={"row"} gap={1}>
                <TextField
                  id='outlined-select-currency'
                  select
                  defaultValue='+66'
                  size='small'
                  sx={{ width: 110 }}
                >
                  {codePhone.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  size='small'
                  placeholder='Enter Phone number'
                />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Website</Typography>
              <TextField fullWidth size='small' placeholder='Enter Website' />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Address</Typography>
              <TextField
                size='small'
                fullWidth
                multiline
                minRows={4}
                maxRows={4}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>State/Province</Typography>
              <TextField select size='small' fullWidth defaultValue={""}>
                {province.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Typography>City/District</Typography>
              <TextField select size='small' fullWidth defaultValue={""}>
                {district.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box>
              <Typography>Sub-District</Typography>
              <TextField select defaultValue='' size='small' fullWidth>
                {subDistrict.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Typography>Zip code</Typography>
              <TextField select defaultValue='' size='small' fullWidth>
                {zipcode.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Grid>
        </Grid>

        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={5}
          mb={3}
        >
          <button
            onClick={() => router.push("/")}
            className='bg-[#021E42] text-white rounded-3xl p-2 w-[110px] font-bold'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className='bg-[#5FC198] text-white rounded-3xl p-2 w-[110px] font-bold'
          >
            Submit
          </button>
        </Stack>
      </Paper>
      <ImageDialog
        openImage={openImage}
        handleCloseImage={handleCloseImage}
        selectedImage={selectedImage}
      />
    </Container>
  );
}
