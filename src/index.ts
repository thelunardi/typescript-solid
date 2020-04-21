import AbstractShareButton from "./AbstractShareButton";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonPrint from "./ShareButtonPrint";
import DOMEventHandler from "./DOMEventHandler";
// import MockEventHandler from "./MockEventHandler";

const eventHandler = new DOMEventHandler();
// const mockEventHandler = new MockEventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, ".btn-twitter", "https://google.com");
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, ".btn-facebook", "https://google.com");
facebook.bind();

const linkedIn: AbstractShareButton = new ShareButtonLinkedIn(eventHandler, ".btn-linkedIn", "https://google.com");
linkedIn.bind();

const print: AbstractShareButton = new ShareButtonPrint(eventHandler, ".btn-print");
print.bind();