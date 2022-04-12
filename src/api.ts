const BASE_URL = "https://jsonplaceholder.typicode.com/photos?albumId=";

export function request(endpoint: number) {
  return (
    fetch(`${BASE_URL}${endpoint}`)
      .then((response) => response.json())
  )
}

export function findImage(url: string) {
  return (
    fetch(`${url}`)
  )
}
