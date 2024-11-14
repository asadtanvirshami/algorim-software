import { atom } from "jotai";
import Cookies from "js-cookie";

// Function to load data from cookies
const loadFromCookies = () => {
  const token = Cookies.get("token");
  const user = Cookies.get("user");
  const isLoggedIn = token && user ? true : false;
  return { token, user: JSON.parse(user || null), isLoggedIn };
};

// Create an atom with cookies
export const userAtom = atom(loadFromCookies());

// Function to persist data into cookies
export const setUserAtom = atom(
  null,
  (get, set, { token, user, isLoggedIn }) => {
    // Set data to cookies
    Cookies.set("token", token, { secure: true, sameSite: "Strict" });
    Cookies.set("user", JSON.stringify(user), {
      secure: true,
      sameSite: "Strict",
    });

    // Update the userAtom state
    set(userAtom, { token, user, isLoggedIn });
  }
);
