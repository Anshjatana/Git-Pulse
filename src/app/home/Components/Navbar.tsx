import React from "react";
import ThemeToggle from "@/app/home/Components/ThemeToggle";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box className="rounded-div flex items-center justify-between h-15 font-bold ">
      <Link href="/">
      <Box className='flex justify-center items-center gap-2 ' >
      <Image src={'https://res.cloudinary.com/dywhcxdix/image/upload/v1718439235/qzaflvrvcz05spxiy39k.svg'} alt="github_icon" height={288} width={288} className="h-[36px] w-[36px] " />
      <Typography component={'h2'} className="text-2xl ">Git Pulse</Typography>
      </Box>
      </Link>
      <Box className="">
        <ThemeToggle />
      </Box>
    </Box>
  );
};

export default Navbar;
