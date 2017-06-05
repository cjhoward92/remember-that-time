// @flow

export class Entry {
    src: string
    title: string
    description: string
    date: string
    id: number
    constructor(
        src: string,
        title: string,
        description: string,
        date: string,
        id: number) {
        this.src = src
        this.title = title
        this.description = description
        this.date = date
        this.id = id
    }
};