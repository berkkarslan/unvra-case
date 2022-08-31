export async function server(endpoint: string, method: string, body?: unknown) {
  const headers = { 'Content-Type': 'application/json' }
  const base_url = 'https://630f056e498924524a8423e9.mockapi.io/'
  const config: RequestInit = {
    method: method,
    headers: {
      ...headers,
    },
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(base_url + endpoint, config)
    data = await response.json()
    if (response.ok) {
      // Return a result object similar to Axios
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      }
    }
    throw new Error(response.statusText)
  } catch (err) {
    let message = 'Unknown Error'
    if (err instanceof Error) message = err.message
    return Promise.reject(message ? message : data)
  }
}

server.req = function (
  endpoint: string,
  method: string = 'GET',
  body?: unknown
) {
  return server(endpoint, method, body)
}
