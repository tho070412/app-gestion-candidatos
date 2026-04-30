export function saveLocalStorage(llave, valor) {
  localStorage.setItem(llave, JSON.stringify(valor));
}
export function getLocalStorage(llave) {
  let data = localStorage.getItem(llave);
  return JSON.parse(data)
}
export function removeLocalStorage(llave) {
  localStorage.removeItem(llave);
}
