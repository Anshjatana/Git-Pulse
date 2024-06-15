import { NextPage } from 'next';
import { Box, Stack, Typography } from '@mui/material';
import Navbar from './Components/Navbar';
import GithubUsernameInput from './Components/GithubUsernameInput';

/**
 * Main page of the Application
 * @page Home
 */
const Home: NextPage = () => {
  return (
   <Box className="m-4  " >
    
    <GithubUsernameInput/>
   </Box>
  );
};

export default Home;
