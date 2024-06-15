import { Box } from '@mui/material'
import React from 'react'

// Define the type for the component props
interface PageProps {
  params: {
    user: string; // Replace 'string' with the actual type of 'user' if it's different
  };
}

// Define the dynamic page component
const Page = ({ params }: PageProps) => {
  const { user } = params;
  return (
    <Box>
      Hi {user}
    </Box>
  );
};

export default Page;