import {  Link, Outlet } from 'react-router-dom'
import Header from './Header'
import { Box, Button } from '@mui/material'
import Footer from './Footer'

const Home = () => {

    return (
    <>
      <Header title='Popular titles'/>
      <Box sx={{ marginTop: '80px', marginBottom: '80px' }}>
        <Button component={Link} to="/series" variant="contained" sx={{ marginRight: 2 }}>
          Series
        </Button>
        <Button component={Link} to="/movies" variant="contained">
          Movies
        </Button>
      </Box>
        <Outlet />
      <Footer /> 
    </>
    )
  }
  
  export default Home