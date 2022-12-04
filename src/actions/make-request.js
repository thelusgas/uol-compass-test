export function makeRequest({ url, method, body }) {
  const params = new URLSearchParams(body);

  return fetch(`${url}?${params}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      throw new Error(`Error on request: ${err}`);
    });
}
