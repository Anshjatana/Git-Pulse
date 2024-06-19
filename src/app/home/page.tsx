import { NextPage } from 'next';
import { Box } from '@mui/material';
import GithubUsernameInput from '../../components/GithubUsernameInput';
import "../index.css";

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
