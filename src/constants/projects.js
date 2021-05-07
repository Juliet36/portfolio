import riseweb from './images/projects/rise-homepage.png'
import aebezeweb from './images/projects/aebeze-web.png'
import moodriseawards from './images/projects/moodrise-awards.png'
import moodriseweb from './images/projects/moodrise-web.png'
import microsite from './images/projects/microsite.png'
import analytics from './images/projects/analytics.png'
import visualizer from './images/projects/visualizer.png'
import moodrisecms from './images/projects/moodrise-cms.png'
import riseBE from './images/projects/rise-app.png'
import pillcastDemo from './images/projects/pillcast-demo.png'
import moodtube from './images/projects/moodtube.png'
import youtubeScrape from './images/projects/youtube-scrape.png'
import pillcastSmart from './images/projects/pillcast-smart.png'
 
export const PROJECTS = {
  "Web Apps": [
    {
      "name": "Moodrise Analytics",
      "image": analytics,
      "description": "Displays mood and neurotransmitter data for the Youtube channels we've scraped and rated.",
      "tech": ["React", "NextJS", "d3", "CSS", "JSX"],
      "links": ["https://aebeze.com/analytics/all", "https://aebeze.com/analytics/insights/UCdN4aXTrHAtfgbVG9HjBmxQ/"]
    },
    {
      "name": "Moodrise Card Visualizer",
      "image": visualizer,
      "description": "Visualizes content from the mobile app in-browser in the event that a user shares a piece of content with someone who doesn't have the app downloaded",
      "tech": ["React", "NextJS", "Express"],
      "links": ["https://moodrise-mobile.web.app/card?uid=LRi9NNmRpk9qlQ3Dw2kN", "https://moodrise-mobile.web.app/card?uid=eWOiZEfHfbjG7UuKYuEY"]
    },
    {
      "name": "Moodrise CMS",
      "image": moodrisecms,
      "description": "I inherited responsibility for the CMS and have since made changes to design and layout for usability as well as updated the save/publish/delete flow to publish to support multiple endpoints.",
      "tech": ["React", "Material-ui", "React Firebase Redux"],
      "links": []
    }
  ],
  "Static Sites": [
    {
      "name": "Rise Homepage",
      "image": riseweb,
      "description": "Temporary homepage for early subscribers to the app, email form will add the user to a CampaignMonitor list and optionally direct them to a Typeform",
      "tech": ["Vanilla JS", "CSS", "HTML", "JQuery"],
      "links": ["https://www.aebeze.com"]
    },
    {
      "name": "AeBeZe Website",
      "image": aebezeweb,
      "description": "",
      "tech": ["Vanilla JS", "CSS", "HTML", "JQuery", "BarbaJS"],
      "links": ["https://www.aebeze.com/corporate"]
    },
    {
      "name": "Moodrise Awards [beta]",
      "image": moodriseawards,
      "description": "Awards site for top digitally nutritious pieces of content on various streaming platforms. Judge's picks are filler at the moment.",
      "tech": ["Vanilla JS", "CSS", "HTML", "JQuery", "BarbaJS"],
      "links": ["https://moodriseawards.firebaseapp.com/"]
    },
    {
      "name": "Moodrise Website",
      "image": moodriseweb,
      "description": "Static site for Moodrise app suite",
      "tech": ["Vanilla JS", "CSS", "HTML", "JQuery"],
      "links": ["https://moodrise.co"]
    },
    {
      "name": "Microsite",
      "image": microsite,
      "description": "Long-form opinion article with scroll-based animation",
      "tech": ["Vanilla JS", "CSS", "HTML", "JQuery"],
      "links": ["https://aebeze.com/microsite-pink"]
    }
  ],
  "Back-End and Mobile": [
    {
      "name": "Rise (Back End)",
      "image": riseBE,
      "description": "Designed and coded the API for our (unreleased) Rise app. I wrote the server-side renderer that builds the templates to send to the app, as well as implemented caching so the templates are only re-rendered when data is updated. Have also been a part of implementing Firebase Dynamic Links and adding Firebase Analytics for events we wish to track.",
      "tech": ["JavaScript", "NodeJS", "Firebase Functions", "Firestore"],
      "links": []
    },
    {
      "name": "Pillcast (Demo)",
      "image": pillcastDemo,
      "description": "Built a demo with Flutter for the audio player within the Moodrise app.",
      "tech": ["Flutter"],
      "links": []
    }
  ],
  "Miscellaneous": [
    {
      "name": "MoodTube",
      "image": moodtube,
      "description": "Chrome extension that displays our analytics data beneath videos on Youtube.",
      "tech": ["Javascript", "Chrome Developer API"],
      "links": ["https://chrome.google.com/webstore/detail/moodtube/igdpmebkoccejijacebofjlhpledfhbm?hl=en&authuser=0"]
    },
    {
      "name": "Web Scraping and Algorithm Development",
      "image": youtubeScrape,
      "description": "Built a web scraper to scrape youtube channels and videos for data to analyze. Was a part of developing the algorithm that takes a youtube channel and returns a rating of its vibes based on our neuroscience research.",
      "tech": ["Python"],
      "links": []
    },
    {
      "name": "Pillcast (Smart Home) [Currently Unpublished]",
      "image": pillcastSmart,
      "description": "Built the Google Assistant App for our Pillcast audio player. Also created scripts to stitch hundreds of audios together with intros and interstitial sounds and used ffmpeg to reformat them to match Google and Alexa requirements",
      "tech": ["JavaScript", "ffmpeg", "Python"],
      "links": ["https://assistant.google.com/services/a/uid/00000090949b1f75?hl=en-US"]
    }
  ]
}