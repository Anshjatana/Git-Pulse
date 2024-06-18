"use client"
import React, { useContext } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { themeContext } from "@/theme/ThemeProvider";


const Navbar = () => {
    const { theme } = useContext(themeContext) ?? {};
    const imageUrl =
        theme === 'light'
            ? 'https://res.cloudinary.com/dywhcxdix/image/upload/v1718447422/idf0zsys6mlyz9f6dqmd.svg'
            : 'https://res.cloudinary.com/dywhcxdix/image/upload/v1718439235/qzaflvrvcz05spxiy39k.svg';
    return (
        <Box className="bg-[var(--color-bg-primary)] rounded-[2rem] [box-shadow:0_0.25rem_0.5rem_rgba(0,_0,_0,_0.15)] p-4 mt-4 max-w-[800px] w-full mx-[auto] my-[0] flex items-center justify-between h-15 font-bold ">
                <Box className='flex justify-center items-center gap-3 ' >
                    <Image src={imageUrl} alt="github_icon" height={288} width={288} className="h-[36px] w-[36px] " />
                    <Typography component={'h2'} id='logo' sx={{fontSize: "2rem", lineHeight:'2.5rem'}} >Git Pulse</Typography>
                </Box>
                <ThemeToggle />
        </Box>
    );
};

export default Navbar;
