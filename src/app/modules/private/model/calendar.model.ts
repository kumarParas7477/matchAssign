export interface ICalendarEvent {

    start: Date,
    end: Date,
    title: string,
    allDay: false,
    color: string,
    resizable: {
        beforeStart: true,
        afterEnd: true
    },
    draggable: false

}