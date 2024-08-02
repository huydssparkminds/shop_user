export const SESSTION_USER = "user";
export const STORE_USER = sessionStorage.getItem("user");

//REGEX

export const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

// CateGORY

export const Options_category = [
  { id: 1, name: "Sofa" },
  { id: 2, name: "Chair" },
  { id: 3, name: "Lamp" },
];
