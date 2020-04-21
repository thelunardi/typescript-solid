import EventHandler from "./EventHandler";

export default class MockEventHandler implements EventHandler {
    addEventListenerToClass(clazz: string, event: string, fn: any) {
        console.log(event, clazz, fn);
    }
}