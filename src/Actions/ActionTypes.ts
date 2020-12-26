export const ACTIVITY_FAIL = 'ACTIVITY_FAIL';
export const ACTIVITY_SUCCESS = 'ACTIVITY_SUCCESS';
export const ACTIVITY_LOADING = 'ACTIVITY_LOADING';

export const AUTHORS_FAIL = 'AUTHORS_FAIL';
export const AUTHORS_SUCCESS = 'AUTHORS_SUCCESS';
export const AUTHORS_LOADING = 'AUTHORS_LOADING';

export const BOOKS_FAIL = 'BOOKS_FAIL';
export const BOOKS_SUCCESS = 'BOOKS_SUCCESS';
export const BOOKS_LOADING = 'BOOKS_LOADING';

type GeneralData = {
    Activity:Activity[],
    Authors:Authors[],
    Books:Books[]
}

export type Activity = {
    id:number,
    title:string,
    dueDate:Date,
    completed:boolean
}
type Authors = {
    id:number,
    idBook:number,
    firstName:string,
    lastName:string
}
type Books = {
    id:number,
    title:string,
    description:string,
    pageCount:string,
    excerpt:string,
    publishDate:Date
}

export interface IActivityLoading {
    type: typeof ACTIVITY_LOADING
}

export interface IActivityFail {
    type: typeof ACTIVITY_FAIL
}

export interface IActivitySuccess {
    type: typeof ACTIVITY_SUCCESS,
    payload:Activity[]
}

interface IAuthorLoading {
    type: typeof AUTHORS_LOADING
}

interface IAuthorFail {
    type: typeof AUTHORS_FAIL
}

interface IAuthorSuccess {
    type: typeof AUTHORS_SUCCESS,
    payload:Authors[]
}

interface IBooksLoading {
    type: typeof BOOKS_LOADING
}

interface IBooksFail {
    type: typeof BOOKS_FAIL
}

interface IBooksSuccess {
    type: typeof BOOKS_SUCCESS,
    payload:Books[]
}

export type DispatchActivityActionTypes = IActivityLoading | IActivityFail | IActivitySuccess ;
export type DispatchAuthorActionTypes = IAuthorFail | IAuthorLoading | IAuthorSuccess;
export type DispatchBooksActionTypes = IBooksFail | IBooksLoading | IBooksSuccess;