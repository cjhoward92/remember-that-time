// @flow

export type Entry = {
    src: string,
    title: string,
    description: string,
    date: string,
    id: number
}

export type PhotoItem = {
    src: string,
    title: string,
    isSelected: boolean
}

export type State = {
    entries: Array<Entry>,
    photos: Array<PhotoItem>
}