import { NextPage } from 'next';
import { Box, Stack, Typography } from '@mui/material';
import Navbar from './Components/Navbar';

/**
 * Main page of the Application
 * @page Home
 */
const Home: NextPage = () => {
  return (
   <Box className="m-4  " >
    <Navbar/>
   </Box>
  );
};

export default Home;
