import Cookies from "js-cookie"

export const setCookie = (name: string, value: string, expiry: number) => {
  Cookies.set(name, value, {
    expires: expiry,
    sameSite: "Strict",
    secure: true,
  });
}