const ytWrapper = require("./index.cjs");

(async () => {
  const videoData = await ytWrapper.getChannelFromID("UCBR8-60-B28hp2BmDPdntcQ", "AIzaSyB0_UWHLVeov-UZ1I-3l63c8-7CyX9vRMY");
  console.log(videoData);
})();