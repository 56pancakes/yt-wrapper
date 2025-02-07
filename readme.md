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

<details>
  <summary><b>Output</b></summary>
  <br>
  
```yaml
MILSirUni5E
```
</details>
<br>

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

<details>
  <summary><b>Output</b></summary>
  <br>

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
</details>
<br>

## Get Video Info From ID

Requires Youtube Data API key
```js
const { getVideoFromID } = require("yt-wrapper");

const videoID = "MILSirUni5E";
const apiKey = "";

getVideoFromID(videoID, apiKey)
  .then((video) => {
    console.log(video)
  })
```

<details>
  <summary><b>Output</b></summary>
  <br>

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
</details>
<br>


## Get Info From Array of Video Links

Requires Youtube Data API key
```js
const { getVideos } = require("yt-wrapper");

const videos = ["https://www.youtube.com/watch?v=MILSirUni5E", "https://www.youtube.com/watch?v=RjUlmco7v2M"];
const apiKey = "";

getVideos(videos, apiKey)
  .then((videos) => {
    console.log(videos)
  })
```

<details>
  <summary><b>Output</b></summary>
  <br>

```yaml
{
  success: true,
  videos: [
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
      thumbnails: [Object],
      tags: [Array]
    },
    {
      success: true,
      id: 'RjUlmco7v2M',
      title: "Getting a channel's uploads in YouTube Data API v3",
      description: 'Migrating from the YouTube Data API v2 to v3? Jeff Posnick walks you through the v3 API calls needed to get a list of the videos uploaded in a given channel, with live demos using the API Explorer (https://developers.google.com/apis-explorer).',
      channel: 'Google for Developers',
      duration: 659,
      uploadedAt: '2014-01-29T17:53:13Z',
      views: '61056',
      likes: '440',
      comments: '78',
      link: 'https://www.youtube.com/watch?v=RjUlmco7v2M',
      thumbnails: [Object],
      tags: [Array]
    }
  ]
}
```
</details>
<br>

## Get Info From Array of Video IDs

Requires Youtube Data API key
```js
const { getVideosFromID } = require("yt-wrapper");

const videos = ["MILSirUni5E", "RjUlmco7v2M"];
const apiKey = "";

getVideosFromID(videos, apiKey)
  .then((videos) => {
    console.log(videos)
  })
```

<details>
  <summary><b>Output</b></summary>
  <br>

```yaml
{
  success: true,
  videos: [
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
      thumbnails: [Object],
      tags: [Array]
    },
    {
      success: true,
      id: 'RjUlmco7v2M',
      title: "Getting a channel's uploads in YouTube Data API v3",
      description: 'Migrating from the YouTube Data API v2 to v3? Jeff Posnick walks you through the v3 API calls needed to get a list of the videos uploaded in a given channel, with live demos using the API Explorer (https://developers.google.com/apis-explorer).',
      channel: 'Google for Developers',
      duration: 659,
      uploadedAt: '2014-01-29T17:53:13Z',
      views: '61056',
      likes: '440',
      comments: '78',
      link: 'https://www.youtube.com/watch?v=RjUlmco7v2M',
      thumbnails: [Object],
      tags: [Array]
    }
  ]
}
```
</details>
<br>


## Get Channel Info From Handle

Requires Youtube Data API key
```js
const { getChannelFromHandle } = require("yt-wrapper");

const handle = "youtube";
const apiKey = "";

getChannelFromHandle(handle, apiKey)
  .then((channel) => {
    console.log(channel)
  })
```

<details>
  <summary><b>Output</b></summary>
  <br>

```yaml
{
  success: true,
  id: 'UCBR8-60-B28hp2BmDPdntcQ',
  name: 'YouTube',
  handle: '@youtube',
  description: "YouTube's Official Channel helps you discover what's new & trending globally. Watch must-see videos, from music to culture to Internet phenomena",
  createdOn: '1970-01-01T00:00:00Z',
  views: '2536027678',
  subscribers: '42500000',
  link: 'https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ',
  channelPfp: {
    default: {
      url: 'https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s88-c-k-c0x00ffffff-no-rj',
      width: 88,
      height: 88
    },
    medium: {
      url: 'https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s240-c-k-c0x00ffffff-no-rj',
      width: 240,
      height: 240
    },
    high: {
      url: 'https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj',
      width: 800,
      height: 800
    }
  },
  country: 'US'
}
```
</details>
<br>

## Get Channel Info From ID

Requires Youtube Data API key
```js
const { getChannelFromID } = require("yt-wrapper");

const channelID = "UCBR8-60-B28hp2BmDPdntcQ";
const apiKey = "";

getChannelFromHandle(channelID, apiKey)
  .then((channel) => {
    console.log(channel)
  })
```

<details>
  <summary><b>Output</b></summary>
  <br>

```yaml
{
  success: true,
  id: 'UCBR8-60-B28hp2BmDPdntcQ',
  name: 'YouTube',
  handle: '@youtube',
  description: "YouTube's Official Channel helps you discover what's new & trending globally. Watch must-see videos, from music to culture to Internet phenomena",
  createdOn: '1970-01-01T00:00:00Z',
  views: '2536027678',
  subscribers: '42500000',
  link: 'https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ',
  channelPfp: {
    default: {
      url: 'https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s88-c-k-c0x00ffffff-no-rj',
      width: 88,
      height: 88
    },
    medium: {
      url: 'https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s240-c-k-c0x00ffffff-no-rj',
      width: 240,
      height: 240
    },
    high: {
      url: 'https://yt3.ggpht.com/Bg5wS82KGryRmcsn1YbPThtbXoTmj2XJ9_7LmuE2RF6wbKJBkovfRypbSz6UD3gEu_nHiwGZtQ=s800-c-k-c0x00ffffff-no-rj',
      width: 800,
      height: 800
    }
  },
  country: 'US'
}
```
</details>
<br>