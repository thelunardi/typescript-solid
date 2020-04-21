import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
    constructor(eventHandler: EventHandler, clazz: string, url: string) {
        super(eventHandler, clazz, url)
    }

    createLink(): string {
        return `https://linkedin.com/shareArticle?url=${this.url}`;
    }
}