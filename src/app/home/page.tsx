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
   <Box className="my-4 mx-2 " >
    <GithubUsernameInput/>
   </Box>
  );
};

export default Home;
