async function request(apiKey, filter, endpoint, options) {
  let url = `https://www.googleapis.com/youtube/v3/${endpoint}?${filter}&key=${apiKey}${options || ""}`
  const res = await fetch(url)
  return await res.json()
}

async function getVideoID(videoURL) {
  let videoID = null;
  if (/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(videoURL)) {
    let regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    videoID = videoURL.match(regex)[1];
  }
  return videoID;
}

async function getVideo(videoURL, apiKey) {
  let id = await getVideoID(videoURL);
  if(!id){
    return {"success": false, "error": "Invalid Youtube URL"};
  }
  try {
    let data = await request(apiKey, `id=${id}`, "videos", "&part=snippet,statistics,contentDetails")
    const match = data.items[0].contentDetails.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    let obj = {
      "success": true,
      "id": data.items[0].id,
      "title": data.items[0].snippet.title,
      "description": data.items[0].snippet.description || "",
      "channel": data.items[0].snippet.channelTitle,
      "duration": (parseInt(match[1] || 0, 10) * 3600) + (parseInt(match[2] || 0, 10) * 60) + parseInt(match[3] || 0, 10),
      "uploadedAt": data.items[0].snippet.publishedAt,
      "views": data.items[0].statistics.viewCount,
      "likes": data.items[0].statistics.likeCount || 0,
      "comments": data.items[0].statistics.commentCount,
      "link": `https://www.youtube.com/watch?v=${data.items[0].id}`,
      "thumbnails": data.items[0].snippet.thumbnails,
      "tags": data.items[0].snippet.tags || []
    }
    return obj;
  } catch (e) {
    return {"success": false, "error": e};
  }
}

async function getVideoFromID(videoID, apiKey) {
  try {
    let data = await request(apiKey, `id=${videoID}`, "videos", "&part=snippet,statistics,contentDetails")
    const match = data.items[0].contentDetails.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    let obj = {
      "success": true,
      "id": data.items[0].id,
      "title": data.items[0].snippet.title,
      "description": data.items[0].snippet.description || "",
      "channel": data.items[0].snippet.channelTitle,
      "duration": (parseInt(match[1] || 0, 10) * 3600) + (parseInt(match[2] || 0, 10) * 60) + parseInt(match[3] || 0, 10),
      "uploadedAt": data.items[0].snippet.publishedAt,
      "views": data.items[0].statistics.viewCount,
      "likes": data.items[0].statistics.likeCount || 0,
      "comments": data.items[0].statistics.commentCount,
      "link": `https://www.youtube.com/watch?v=${data.items[0].id}`,
      "thumbnails": data.items[0].snippet.thumbnails,
      "tags": data.items[0].snippet.tags || []
    }
    return obj;
  } catch (e) {
    return {"success": false, "error": e};
  }
}

async function getChannelFromID(channelID, apiKey) {
  try {
    let data = await request(apiKey, `id=${channelID}`, "channels", "&part=snippet,statistics,contentDetails")
    let obj = {
      "success": true,
      "id": data.items[0].id,
      "name": data.items[0].snippet.title,
      "handle": data.items[0].snippet.customUrl || "",
      "description": data.items[0].snippet.description || "",
      "createdOn": data.items[0].snippet.publishedAt,
      "views": data.items[0].statistics.viewCount,
      "subscribers": data.items[0].statistics.subscriberCount || 0,
      "link": `https://www.youtube.com/channel/${data.items[0].id}`,
      "channelPfp": data.items[0].snippet.thumbnails,
      "country": data.items[0].snippet.country
    }
    return obj;
  } catch (e) {
    return {"success": false, "error": e};
  }
}

async function getChannelFromHandle(handle, apiKey) {
  try {
    let data = await request(apiKey, `forHandle=${handle}`, "channels", "&part=snippet,statistics,contentDetails")
    let obj = {
      "success": true,
      "id": data.items[0].id,
      "name": data.items[0].snippet.title,
      "handle": data.items[0].snippet.customUrl || "",
      "description": data.items[0].snippet.description || "",
      "createdOn": data.items[0].snippet.publishedAt,
      "views": data.items[0].statistics.viewCount,
      "subscribers": data.items[0].statistics.subscriberCount || 0,
      "link": `https://www.youtube.com/channel/${data.items[0].id}`,
      "channelPfp": data.items[0].snippet.thumbnails,
      "country": data.items[0].snippet.country
    }
    return obj;
  } catch (e) {
    return {"success": false, "error": e};
  }
}

module.exports = { getVideoID, getVideo, getVideoFromID, getChannelFromID, getChannelFromHandle };