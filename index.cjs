async function request(apiKey, id, endpoint, options) {
  let url = `https://www.googleapis.com/youtube/v3/${endpoint}?id=${id}&key=${apiKey}${options || ""}`
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
    let data = await request(apiKey, id, "videos", "&part=snippet,statistics,contentDetails")
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
    let data = await request(apiKey, videoID, "videos", "&part=snippet,statistics,contentDetails")
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


module.exports = { getVideoID, getVideo, getVideoFromID };