// ==UserScript==
// @name Blackboard Collaborate Playback URL Extractor
// @namespace yiannis
// @match https://eu-lti.bbcollab.com/collab/ui/session/playback
// @grant none
// @author Yiannis Charalambous
// ==/UserScript==

// Licence: GPL V3
// GitHub Link: https://github.com/Yiannis128/bc-pamp4/tree/master

var link = "";

function openUrl()
{
  window.open(link);
}

function getUrl()
{
  let video_player = document.getElementsByClassName("vjs-tech")[0];
  
  if(video_player == null)
  {
    console.log("Video player did not load on time.");
    return;
  }

  link = video_player.src;
  
  let element = document.createElement("button");
  element.innerText = "Open as MP4";
  element.style.position = "absolute";
  element.style.zIndex = "99999";
  element.style.top = "10px";
  element.style.left  = "120px";
  element.style.color = "black";
  element.style.backgroundColor = "white";
  element.style.padding = "10px";
  element.onclick = openUrl;
  
  document.getElementsByTagName("body")[0].appendChild(element);
  
  console.log("~~~ADDED BUTTON~~~");
}

window.setTimeout(getUrl, 8000);
