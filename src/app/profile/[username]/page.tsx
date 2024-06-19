import ProfileComponent from '@/components/ProfileComponent';
import FollowersComponent from '@/components/FollowersComponent';
import ReposComponent from '@/components/ReposComponent';
import LanguageChart from '@/components/LanguageChart';
import StartperLanguage from '@/components/StartperLanguage';
import MostStarredRepos from '@/components/MostStarredRepos';
import MostForkedRepos from '@/components/MostForkedRepos';
import { Box } from '@mui/material';
import { env } from 'process';
import React from 'react';

interface PageProps {
  params: {
    username: string;
  };
}

const token = env.GITHUB_ACCESS_TOKEN;

const UserProfilePage: React.FC<PageProps> = async ({ params }) => {
  let userData = null;
  let followersData = null;
  let ReposData = null;
  let error = null;

  try {
    const res = await fetch(`https://api.github.com/users/${params.username}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const res2 = await fetch(`https://api.github.com/rate_limit`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    const res3 = await fetch(`https://api.github.com/users/${params.username}/followers`, {
      headers: {
        'Authorization': `Bearer ${token}`,

      }
    });
    const res4 = await fetch(`https://api.github.com/users/${params.username}/repos`, {
      headers: {
        'Authorization': `Bearer ${token}`,

      }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    userData = await res.json();
    followersData = await res3.json()
    ReposData = await res4.json()
  } catch (err) {
    console.log(err);

  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }

  if (!userData) {
    return <Box>Loading...</Box>;
  }

  return (
    <>
      <Box className='flex flex-col md:flex-row gap-0 md:gap-4 justify-center items-center ' >
        <ProfileComponent userData={userData} />
        <FollowersComponent followersData={followersData} />
      </Box>
      <Box className='flex gap-3 flex-col lg:flex-row items-center justify-center  ' >
        <LanguageChart reposData={ReposData} />
        <MostStarredRepos reposData={ReposData} />
        {/* <MostForkedRepos reposData={ReposData} /> */}
      </Box>
      <Box className='flex gap-3 flex-col lg:flex-row items-center justify-center  ' >
        {/* <MostStarredRepos reposData={ReposData} /> */}
        <MostForkedRepos reposData={ReposData} />
        <StartperLanguage reposData={ReposData} />
      </Box>
      <ReposComponent reposData={ReposData} />
    </>
  );
};

export default UserProfilePage;