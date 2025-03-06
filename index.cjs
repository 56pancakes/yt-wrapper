async function request(apiKey, filter, endpoint, options) {
  let url = `https://www.googleapis.com/youtube/v3/${endpoint}?${filter}&key=${apiKey}${options || ""}`
  const res = await fetch(url)
  return await res.json()
}

async function formatVideo(data) {
  try{
    const match = data.contentDetails.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    let obj = {
      "success": true,
      "id": data.id,
      "title": data.snippet.title,
      "description": data.snippet.description || "",
      "channel": data.snippet.channelTitle,
      "duration": (parseInt(match[1] || 0, 10) * 3600) + (parseInt(match[2] || 0, 10) * 60) + parseInt(match[3] || 0, 10),
      "uploadedAt": data.snippet.publishedAt,
      "views": data.statistics.viewCount,
      "likes": data.statistics.likeCount || 0,
      "comments": data.statistics.commentCount,
      "link": `https://www.youtube.com/watch?v=${data.id}`,
      "thumbnails": data.snippet.thumbnails,
      "tags": data.snippet.tags || []
    }
    return obj;
  } catch (e) {
    return {"success": false, "error": e};
  }
}

async function formatChannel(data) {
  try {
    let obj = {
      "success": true,
      "id": data.id,
      "name": data.snippet.title,
      "handle": data.snippet.customUrl || "",
      "description": data.snippet.description || "",
      "createdOn": data.snippet.publishedAt,
      "views": data.statistics.viewCount,
      "subscribers": data.statistics.subscriberCount || 0,
      "link": `https://www.youtube.com/channel/${data.id}`,
      "channelPfp": data.snippet.thumbnails,
      "country": data.snippet.country
    }
    return obj;
  } catch (e) {
    return {"success": false, "error": e};
  }
}

async function getVideoID(videoURL) {
  let videoID = null;
  if (/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(videoURL)) {
    let regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    videoID = videoURL.match(regex)[1];
  }
  return videoID || null;
}

async function getVideo(videoURL, apiKey) {
  let id = await getVideoID(videoURL);
  if(!id){
    return {"success": false, "error": "Invalid Youtube URL"};
  }
  try {
    let data = await request(apiKey, `id=${id}`, "videos", "&part=snippet,statistics,contentDetails")
    return await formatVideo(data.items[0]);
  } catch (e) {
    return {"success": false, "error": e};
  }
}

async function getVideoFromID(videoID, apiKey) {
  try {
    let data = await request(apiKey, `id=${videoID}`, "videos", "&part=snippet,statistics,contentDetails")
    return await formatVideo(data.items[0]);
  } catch (e) {
    return {"success": false, "error": e};
  }
}

async function getVideos(videoURLs, apiKey) {
  if(videoURLs.length > 50) return {"success": false, "error": "Too many videos requested - 50 videos maximum"}
  let finalData = { success: false, videos: [] }
  let videos = ""
  await videoURLs.forEach(async v => {
    let id = await getVideoID(v);
    videos = videos+id+",";
  })
  videos = videos.substring(0, videos.length-1);
  let data = await request(apiKey, `id=${videos}`, "videos", "&part=snippet,statistics,contentDetails");
  data.items.forEach(async v => {
    try {
      finalData.videos.push(await formatVideo(v));

    } catch (e) {
      finalData.videos.push({"success": false, "error": e});
    }
  })
  finalData.success = true;
  return finalData;
}

async function getVideosFromID(videoIDs, apiKey) {
  if(videoIDs.length > 50) return {"success": false, "error": "Too many videos requested - 50 videos maximum"}
  let finalData = { success: false, videos: [] }
  let videos = ""
  await videoIDs.forEach(async v => {
    videos = videos+id+",";
  })
  videos = videos.substring(0, videos.length-1);
  let data = await request(apiKey, `id=${videos}`, "videos", "&part=snippet,statistics,contentDetails")
  data.items.forEach(async v => {
    try {
      finalData.videos.push(await formatVideo(v));

    } catch (e) {
      finalData.videos.push({"success": false, "error": e});
    }
  })
  finalData.success = true;
  return finalData;
}

async function getChannelFromID(channelID, apiKey) {
  try {
    let data = await request(apiKey, `id=${channelID}`, "channels", "&part=snippet,statistics,contentDetails")
    return await formatChannel(data.items[0]);
  } catch (e) {
    return {"success": false, "error": e};
  }
}

async function getChannelFromHandle(handle, apiKey) {
  try {
    let data = await request(apiKey, `forHandle=${handle}`, "channels", "&part=snippet,statistics,contentDetails")
    return await formatChannel(data.items[0]);
  } catch (e) {
    return {"success": false, "error": e};
  }
}

module.exports = { getVideoID, getVideo, getVideoFromID, getChannelFromID, getChannelFromHandle, getVideos, getVideosFromID };