import { Box, Button, Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// eslint-disable-next-line react/prop-types
const Header = ({ title }) => {

    return (
        <Stack spacing={7} sx={{ flexGrow: 1 }}>
        <AppBar position='absolute'>
          <Toolbar>
          <Typography variant="h6" sx={{ marginLeft: 1 }}>
            DEMO Streaming
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant='outlined' color='blue' size='small' > Login</Button>
          <Button variant='outlined' color='inherit' size='small' > Start your free trial</Button>
          </Toolbar>
        </AppBar>
        <AppBar  position='absolute'color='inherit'>
          <Toolbar variant="dense">
            <Typography>{title}</Typography>
          </Toolbar>
        </AppBar>
    </Stack>
    )
  }
  
  export default Header