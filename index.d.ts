declare const ytWrapper: {
  getVideoID(videoURL: string): string;
  getVideo(videoURL: string, apiKey: string): string;
  getVideoFromID(videoID: string, apiKey: string): string;
  getChannelFromID(channelID: string, apiKey: string): string;
  getChannelFromHandle(handle: string, apiKey: string): string;
}

export = ytWrapper;