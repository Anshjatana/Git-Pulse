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

const FollowersComponent: React.FC<FollowersComponentProps> = ({ followersData }) => {
    const recentFollowers = followersData.slice(0, 5);
    return (
        <Box className='bg-[var(--color-bg-primary)] rounded-[2rem] [box-shadow:0_0.25rem_0.5rem_rgba(0,_0,_0,_0.15)] p-6 md:max-w-[400px] w-full md:h-[378px] mx-auto sm:mx-0 max-w-[500px] sm:w-full my-4' >
            <Typography sx={{ fontSize: '1.125rem', marginBottom: '0.5rem', fontWeight:'bold' }}>Recent Followers</Typography>
            <Box>
            {recentFollowers.length > 0 ? (
          recentFollowers.map((follower) => (
            <Box key={follower.login} className='flex items-center gap-1 mb-4'>
              <Avatar src={follower.avatar_url} alt={follower.login} className='h-[40px] w-[40px]' />
              <Box className='flex flex-col gap-1'>
                <Typography sx={{ fontSize: '14px', marginLeft: '0.5rem' }}>@{follower.login}</Typography>
                <Link href={follower.html_url} target="_blank">
                  <Typography sx={{ fontSize: '12px', marginLeft: '0.5rem' }}>{follower.html_url}</Typography>
                </Link>
              </Box>
            </Box>
          ))
        ) : (
          <Typography sx={{ fontSize: '1rem', color: 'gray', textAlign: 'center', marginTop: '2rem' }}>
            Followers data not available
          </Typography>
        )}</Box>
        </Box>
    )
}

export default FollowersComponent
