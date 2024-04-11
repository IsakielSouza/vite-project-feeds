import { del, get, post, put } from "./client/http-client";


export const postUser = (data: any) => post("/user", data);

export const getUser = (id: string) => get(`/user/${id}`);

export const putUser = (id: string, data: any) => put(`/user/${id}`, data);

export const deleteUser = (id: string) => del(`/user/${id}`);