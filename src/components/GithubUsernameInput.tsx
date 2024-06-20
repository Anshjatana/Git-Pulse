'use client'
import { useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import { themeContext } from '@/theme/ThemeProvider';
import { useRouter } from 'next/navigation';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const GithubUsernameInput = () => {
    const router = useRouter()
    const { theme } = useContext(themeContext) ?? {};
    const [username, setUsername] = useState<String>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmitUsername = () => {
        if (username === '') {
            alert('Please enter a username');
        } else {
            setIsLoading(true)
            router.push(`/profile/${username}`);
            setUsername('');
        }
    }

    const iconColor = theme === 'light' ? 'var(--color-text-primary)' : 'var(--color-text-primary)';
    const textFieldColor = theme === 'light' ? 'var(--color-text-primary)' : 'var(--color-text-primary)';

    return (
        <Box className=" bg-[var(--color-bg-primary)] rounded-[2rem] [box-shadow:0_0.25rem_0.5rem_rgba(0,_0,_0,_0.15)] p-6 max-w-[800px] w-full flex flex-col sm:flex-row mb-10 items-center justify-center mx-[auto] my-6">
            <Image
                src="https://res.cloudinary.com/dywhcxdix/image/upload/v1718459636/daktfgvz4jtiokbzlxtu.gif"
                alt="coder"
                height={800}
                width={800}
                className="sm:w-[300x] rounded-full mx-4 aspect-auto w-[310px] "
            />
            <Box className="flex flex-col items-center px-2 justify-center gap-6">
                <Typography component={'h1'} sx={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', mt: 4 }}>
                    Discover the strengths of your Github profile with Git Pulse
                </Typography>
                <Box className='rounded-xl p-3 bg-[var(--color-bg-secondary)]  ' sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                    <GitHubIcon fontSize="large" sx={{ color: iconColor, mr: 1, my: 0.5 }} />
                    <TextField
                    required
                        id="input-with-sx"
                        label="Enter Github Username"
                        variant="outlined"
                        defaultValue={' '}
                        value={username}
                        size='medium'
                        onChange={(e) => setUsername(e.target.value)}
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
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: 'transparent', // Default border color
                              },
                              '&:hover fieldset': {
                                borderColor: 'transparent', // Border color on hover
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: iconColor, // Border color when focused
                              },
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                              color: iconColor, // Label color when focused
                            },
                          }}
                    />
                </Box>
                <Button variant="contained"
                    className="normal-case"
                    onClick={handleSubmitUsername}
                    sx={{
                        textDecoration: 'none',
                        width: "150px",
                        fontSize: "18px",
                        background: '#003140', // Lightish gray color
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#003140', // Maintain the same color
                            opacity: 0.9, // Set opacity to 0.8 on hover
                        },
                    }} >Submit</Button>
            </Box>
            {isLoading && <Backdrop
                sx={{ color: '#fff', zIndex: 10 }}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>}
        </Box>
    );
};

export default GithubUsernameInput;