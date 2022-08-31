export async function server(
  endpoint: string,
  method: string,
  body?: object | null
): Promise<any> {
  const headers = { 'Content-Type': 'application/json' }
  const baseUrl = 'https://630f056e498924524a8423e9.mockapi.io/'
  const config: RequestInit = {
    method,
    headers: {
      ...headers,
    },
  }

  if (body !== null) {
    config.body = JSON.stringify(body)
  }

  let data
  try {
    const response = await window.fetch(baseUrl + endpoint, config)
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
    return await Promise.reject(message)
  }
}

server.req = async function (
  endpoint: string,
  method: string = 'GET',
  body?: object
) {
  return await server(endpoint, method, body)
}
