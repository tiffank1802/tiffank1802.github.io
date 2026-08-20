const ASSET_PATH_REGEX = /\/[^/]+\.[^/]+$/

function isSpaRoute(request, pathname) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return false

  const accept = request.headers.get('Accept') || ''
  const acceptsHtml = accept.includes('text/html') || accept.includes('*/*')

  return acceptsHtml && !ASSET_PATH_REGEX.test(pathname)
}

async function fetchAsset(env, request, pathname) {
  const url = new URL(request.url)
  url.pathname = pathname
  url.search = pathname === '/' || pathname === '/index.html' || pathname === '/404.html' ? '' : url.search

  return env.ASSETS.fetch(new Request(url.toString(), request))
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname !== '/' && isSpaRoute(request, url.pathname)) {
      return fetchAsset(env, request, '/')
    }

    const assetResponse = await env.ASSETS.fetch(request)
    if (assetResponse.status !== 404) {
      return assetResponse
    }

    const notFoundResponse = await fetchAsset(env, request, '/404.html')
    if (notFoundResponse.status !== 404) {
      return new Response(notFoundResponse.body, {
        status: 404,
        headers: notFoundResponse.headers,
      })
    }

    return new Response('Not found', { status: 404 })
  },
}
