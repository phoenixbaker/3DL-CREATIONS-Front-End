export function saveUser(user: string) {
  return localStorage.setItem("user", user);
}

export function getUser() {
  return localStorage.getItem("user");
}

export function removeUser() {
  return localStorage.removeItem("user");
}
