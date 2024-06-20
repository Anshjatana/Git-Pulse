import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import Image from "next/image";


const Footer = () => {
    return (
        <Box className="bg-[var(--color-bg-primary)] rounded-[2rem] [box-shadow:0_0.25rem_0.5rem_rgba(0,_0,_0,_0.15)] gap-1 p-4 my-2 md:max-w-[80%] w-full mx-[auto] flex items-center justify-center h-15 font-bold ">
                <Typography component={'span'} >Made with ❤️ by </Typography>
                <Link href="https://github.com/Anshjatana" target='_blank' >{' '}Ansh Jatana</Link>
        </Box>
    );
};

export default Footer;
