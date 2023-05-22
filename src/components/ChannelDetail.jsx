import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { channelVideos, channelDetails } from '../utils/fetchFromAPI';

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideo, setChannelVideo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    channelDetails(id)
      .then((data) => setChannelDetail(data));

    channelVideos(id)
      .then((data) => setChannelVideo(data?.contents));

}, [id]);

console.log('channel detailsss', channelDetail);
console.log('channel videosssss', channelVideo);

  return (
    <div>{id}</div>
  )
}

export default ChannelDetails