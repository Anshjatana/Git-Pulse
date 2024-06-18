import ProfileComponent from '@/components/ProfileComponent';
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
  let error = null;

  try {
    const res = await fetch(`https://api.github.com/users/${params.username}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    // const res2 = await fetch(`https://api.github.com/rate_limit`, {
    //   headers: {
    //     'Authorization': `Bearer ${token}`,
    //     'X-GitHub-Api-Version': '2022-11-28'
    //   }
    // });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    userData = await res.json();
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
    <ProfileComponent userData={userData} />
      {/* <h1>{userData.name}</h1>
      <p>Username: {userData.login}</p>
      <p>Location: {userData.location}</p>
      <p>Bio: {userData.bio}</p>
      <p>Public Repos: {userData.public_repos}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p> */}
    </>
  );
};

export default UserProfilePage;