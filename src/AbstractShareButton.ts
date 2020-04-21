import DOMEventHandler from "./DOMEventHandler";
import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
    eventHandler: DOMEventHandler;
    clazz: string;
    url: string;

    constructor(eventHandler: EventHandler, clazz: string) {
        this.clazz = clazz;
        this.eventHandler = eventHandler;
    }

    abstract createAction(): string;

    bind() {
        const action = this.createAction();

        this.eventHandler.addEventListenerToClass(this.clazz, "click", action);

    }
}