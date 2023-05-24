import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { channelVideos, channelDetails } from '../utils/fetchFromAPI';

const ChannelDetails = () => {
  const [channelDetail2, setChannelDetail2] = useState(null);
  const [videos, setvideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    channelDetails(id)
      .then((data) => setChannelDetail2(data));

    channelVideos(id)
      .then((data) => setvideos(data?.contents));

}, [id]);

// console.log('channel detailsss', channelDetail2);
// console.log('channel videosssss', videos);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px' 
        }}
        />
        <ChannelCard channelDetail2={channelDetail2} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '30px',  md: '130px' }}} />
        <Videos videos={videos} channelDetail={channelDetail2} />
      </Box>
    </Box>
    
  )
}

export default ChannelDetails