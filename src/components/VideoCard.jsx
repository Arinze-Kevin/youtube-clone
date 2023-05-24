import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { FiberManualRecordSharp } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({  channelDetail, video: { video: { videoId, author, thumbnails, publishedTimeText, descriptionSnippet, title, stats, movingThumbnails }}}) => {
    // console.log( author?.author );
  return (
    <Card sx={{ width: { md: '320px', xs: '100%', sm: '358px' }, boxShadow: 'none', borderRadius: '5%', background: 'none' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia
              image={thumbnails[0]?.url} 
              alt={title}
              sx={{ width: { xs: '100%', sm: '358', md: '320px'}, height: 180 }}
            />
        </Link>
        <CardContent sx={{ background: '#1e1e1e', height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
                    {title.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={author ? `/video/${author?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                    {author?.title || channelDetail?.title}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
            </Link>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle2' color='gray'>
                 {parseInt(stats?.views).toLocaleString()} views <FiberManualRecordSharp sx={{ fontSize: 6 }} /> {publishedTimeText}
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard