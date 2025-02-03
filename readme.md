<h1 align="center">
  Simple wrapper for Youtube Data API v3
</h1>

# Install
Requires Node.js v18+
Supports CommonJS and ESM
```
npm install yt-wrapper
```

# Examples

## Get Video ID

```js
const { getVideoID } = require("yt-wrapper");

const videoLink = "https://www.youtube.com/watch?v=MILSirUni5E";

const videoID = getVideoID(videoLink)
console.log(videoID)
```

Output
```yaml
MILSirUni5E
```

## Get Video Info From Link

Requires Youtube Data API key
```js
const { getVideo } = require("yt-wrapper");

const videoLink = "https://www.youtube.com/watch?v=MILSirUni5E";
const apiKey = "";

getVideo(videoLink, apiKey)
  .then((video) => {
    console.log(video)
  })
```

Output
```yaml
{
  success: true,
  id: 'MILSirUni5E',
  title: 'YouTube Developers Live: API v3 Overview',
  description: "We'll walk developers through things they need to know about the new YouTube API v3 and YouTube Analytics APIs, both of which are currently in a closed preview release. Learning more now will help you get up and running once the APIs are widely available.",
  channel: 'Google for Developers',
  duration: 3314,
  uploadedAt: '2012-08-08T17:59:39Z',
  views: '12946',
  likes: '89',
  comments: '365',
  link: 'https://www.youtube.com/watch?v=MILSirUni5E',
  thumbnails: {
    default: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/default.jpg',
      width: 120,
      height: 90
    },
    medium: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/mqdefault.jpg',
      width: 320,
      height: 180
    },
    high: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/hqdefault.jpg',
      width: 480,
      height: 360
    },
    standard: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/sddefault.jpg',
      width: 640,
      height: 480
    },
    maxres: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/maxresdefault.jpg',
      width: 1280,
      height: 720
    }
  },
  tags: [ 'gdl', 'youtubeapi', 'youtube' ]
}
```

## Get Video Info From ID

Requires Youtube Data API key
```js
const { getVideoFromID } = require("yt-wrapper");

const videoID = "MILSirUni5E";
const apiKey = "";

getVideo(videoID, apiKey)
  .then((video) => {
    console.log(video)
  })
```

Output
```yaml
{
  success: true,
  id: 'MILSirUni5E',
  title: 'YouTube Developers Live: API v3 Overview',
  description: "We'll walk developers through things they need to know about the new YouTube API v3 and YouTube Analytics APIs, both of which are currently in a closed preview release. Learning more now will help you get up and running once the APIs are widely available.",
  channel: 'Google for Developers',
  duration: 3314,
  uploadedAt: '2012-08-08T17:59:39Z',
  views: '12946',
  likes: '89',
  comments: '365',
  link: 'https://www.youtube.com/watch?v=MILSirUni5E',
  thumbnails: {
    default: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/default.jpg',
      width: 120,
      height: 90
    },
    medium: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/mqdefault.jpg',
      width: 320,
      height: 180
    },
    high: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/hqdefault.jpg',
      width: 480,
      height: 360
    },
    standard: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/sddefault.jpg',
      width: 640,
      height: 480
    },
    maxres: {
      url: 'https://i.ytimg.com/vi/MILSirUni5E/maxresdefault.jpg',
      width: 1280,
      height: 720
    }
  },
  tags: [ 'gdl', 'youtubeapi', 'youtube' ]
}
```

