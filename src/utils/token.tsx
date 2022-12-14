export function setToken(token: string) {
  return localStorage.setItem('TOKEN', token);
}

export function getToken() {
  return localStorage.getItem('TOKEN');
}

export function clearToken() {
  return localStorage.clear();
}
