import Info from '../../data/sample.json'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Header from './Header'

const Movies = () => {
    const data = Info.entries
    const moviesData = data.filter(info => info.programType === 'movie')
    
  return (
    <>
    <Header title='Movies'/>
      <Box 
        sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
            gap: 2 
            }}
      >
      {moviesData.map((info) => 
         <Card key={info.title} sx={{ maxWidth: 150 }}>
         <CardMedia
             component='img'
             height='200'
             image={info.images['Poster Art'].url}
             alt=''
         />
         <CardContent>
             <Typography variant='body1' align='center'>
                 {info.title}
             </Typography>
         </CardContent>
     </Card>
      )}
    </Box>
    </>
  )
}

export default Movies
