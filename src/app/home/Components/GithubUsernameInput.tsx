'use client'
import { useContext } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import { themeContext } from '@/theme/ThemeProvider';

const GithubUsernameInput = () => {
    const { theme } = useContext(themeContext) ?? {};

    const iconColor = theme === 'light' ? 'var(--color-text-primary)' : 'var(--color-text-primary)';
    const textFieldColor = theme === 'light' ? 'var(--color-text-primary)' : 'var(--color-text-primary)';

    return (
        <Box className="border-[1px] border-[var(--color-bg-secondary)] bg-[var(--color-bg-primary)] rounded-[2rem] [box-shadow:0_0.25rem_0.5rem_rgba(0,_0,_0,_0.15)] p-6 max-w-[800px] w-full flex flex-col sm:flex-row items-center justify-center mx-[auto] my-6">
            <Image
                src="https://res.cloudinary.com/dywhcxdix/image/upload/v1718459636/daktfgvz4jtiokbzlxtu.gif"
                alt="coder"
                height={800}
                width={800}
                className="sm:w-[300x] rounded-full mx-4 aspect-auto w-[310px] "
            />
            <Box className="flex flex-col items-center px-2 justify-center gap-6">
                <Typography component={'h1'} sx={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', mt: 4 }}>
                    Discover the strengths of your Github profile with{' '}
                    <Typography component={'span'} sx={{ fontSize: '2rem', fontWeight: 'bold' }} id="special_font">
                        Git Pulse
                    </Typography>
                </Typography>
                <Box className='rounded-xl p-3 bg-[var(--color-bg-secondary)]  ' sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                    <GitHubIcon fontSize="large" sx={{ color: iconColor, mr: 1, my: 0.5 }} />
                    <TextField
                        id="input-with-sx"
                        label="Enter Github Username"
                        variant="standard"
                        size='medium'
                        InputLabelProps={{
                            style: { color: textFieldColor },
                        }}
                        InputProps={{
                            style: { color: textFieldColor },
                            classes: {
                                underline: 'custom-underline', // Use a custom class for underline
                            },
                        }}
                        sx={{
                            //   '& .MuiInput-underline:before': {
                            //     borderBottomColor: iconColor, // Bottom border before focus
                            //   },
                            //   '& .MuiInput-underline:hover': {
                            //     borderBottomColor: iconColor, // Bottom border on hover
                            //   },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: "#003140", // Bottom border after focus
                            },
                        }}
                    />
                </Box>
                <Button variant="contained"
                    className="normal-case"
                    sx={{
                        textDecoration: 'none',
                        width: "150px",
                        fontSize:"18px",
                        background: '#003140', // Lightish gray color
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#003140', // Maintain the same color
                            opacity: 0.9, // Set opacity to 0.8 on hover
                        },
                    }} >Submit</Button>
            </Box>
        </Box>
    );
};

export default GithubUsernameInput;