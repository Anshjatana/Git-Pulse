import { Avatar, Box, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'

interface followersData {
    login: string;
    avatar_url: string;
    html_url: string;
}

interface FollowersComponentProps {
    followersData: followersData[];
}

const FollowersComponent: React.FC<FollowersComponentProps> = ({followersData}) => {
    const recentFollowers = followersData.slice(0, 5);
  return (
    <Box className='bg-[var(--color-bg-primary)] rounded-[2rem] [box-shadow:0_0.25rem_0.5rem_rgba(0,_0,_0,_0.15)] p-6 md:max-w-[400px] w-full  mx-auto sm:mx-0 max-w-[500px] sm:w-full my-4' >
      <Typography className='text-lg mb-2 ' >Recent Followers</Typography>
      <Box>
        {recentFollowers?.map((follower)=>(
        <Box key={follower.login} display="flex" alignItems="center" mb={2}>
            <Avatar src={follower.avatar_url} alt={follower.login} className='h-[32px] w-[32px] ' />
            <Box className='flex flex-col gap-1' >
            <Typography className='text-[14px]' ml={2}>@{follower.login}</Typography>
            <Link href={follower.html_url} target="_blank" ><Typography className='text-[12px]' ml={2}>{follower.html_url}</Typography></Link>
            </Box>
          </Box>
      ))}</Box>
    </Box>
  )
}

export default FollowersComponent
