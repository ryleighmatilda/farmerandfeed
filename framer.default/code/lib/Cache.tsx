import { Storage } from "./Storage"

export const hashCode = s =>
    s.split("").reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0)
        return a & a
    }, 0)

export function corsProxy(url) {
    return `https://cors-anywhere.herokuapp.com/${url}`
}

export async function cachedResponse(
    url: string,
    cache = new Storage("cache")
) {
    const cacheKey = url
    const data = await cache.get(cacheKey)

    if (data) {
        return Promise.resolve(data)
    } else {
        var req = new XMLHttpRequest()
        req.open("GET", url, true)
        req.responseType = "blob"

        return new Promise((resolve, reject) => {
            req.onload = async function() {
                if (this.status === 200) {
                    await cache.set(url, this.response)
                    resolve(this.response)
                } else {
                    reject(
                        new Error(
                            `Response status ${this.status} ${this.statusText}`
                        )
                    )
                }
            }
            req.onerror = function(error) {
                reject(error)
            }

            req.send()
        })
    }
}
