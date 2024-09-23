import { Box, Typography } from "@mui/material";
import appStore from '../../assets/store/app-store.svg';
import googlePlay from '../../assets/store/play-store.svg';
import windowsStore from '../../assets/store/windows-store.svg';
import Facebook from '../../assets/social/facebook-white.svg';
import Twitter from '../../assets/social/twitter-white.svg';
import Instagram from '../../assets/social/instagram-white.svg';

const Footer = () => {
    return (
        <>
            <Box
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-around',
                    padding: 2,
                    borderTop: '1px solid #ccc',
                    backgroundColor: 'black',
                    color: 'white'
                }}
            >
                <p>Home</p>
                <p>Terms and conditions</p>
                <p>Privacy policy</p>
                <p>Collection statement</p>
                <p>Help</p>
                <p>Manage account</p>
            </Box>    

            <Box
                sx={{
                    padding: 8,
                    backgroundColor: 'black',
                    color: 'white',
                }}
            >
                <Typography variant='body2' align='left'>
                    copyright 2016 DEMO streaming. All rights reserved
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    marginTop: 3,
                }}>
                    <img alt='' height={50} src={Facebook} />
                    <img alt='' height={50} src={Twitter} />
                    <img alt='' height={50} src={Instagram} />
                <div style={{ marginLeft: 300 }}>
                    <img alt='' height={50} src={appStore} />
                    <img alt='' height={50} src={googlePlay} />
                    <img alt='' height={50} src={windowsStore} />
                </div>
                </Box>
            </Box>
        </>
    );
}

export default Footer
