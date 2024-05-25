"use server"

import { cookies } from "next/headers"


export const setCookie = (value: string) => {
    const cookie = cookies()
    cookie.set("userId", value)
}

export const deleteCookie = () => {
    const cookie = cookies()
    cookie.delete("userId")
}