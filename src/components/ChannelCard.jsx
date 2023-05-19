import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle, FiberManualRecordSharp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail)
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto'
      }}
    >
      <Link to={`/channel/${channelDetail?.channel?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            image={channelDetail?.channel?.avatar[0]?.url || demoProfilePicture}
            alt={channelDetail?.channel?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, ml: 4, border: '1px solid #e3e3e3'}}
          />
          <Typography variant='h6'>
            {channelDetail?.channel?.title}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          <Typography sx={{ fontSize: 14, color: 'gray' }} >{channelDetail?.channel?.username} <FiberManualRecordSharp sx={{ fontSize: 6 }} /> {channelDetail?.channel?.stats?.subscribersText}</Typography>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard