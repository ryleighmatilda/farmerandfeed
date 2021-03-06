import * as React from "react"
import { useState, useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"
import * as urls from "./lib/urls"
import { poweredByGiphy } from "./assets/poweredByGiphy"
import { emptyStateStyle, defaultEvents } from "./lib/constants"

/*
 ** GIF
 */

export interface GifProps {
    search: string
    id: string
    lockImage: boolean
    radius: number
    topLeft: number
    topRight: number
    bottomRight: number
    bottomLeft: number
    isMixed: boolean
    onClick: any
    onMouseEnter: any
    onMouseLeave: any
    onMouseDown: any
    onMouseUp: any
}

export function Gif({
    search,
    id,
    lockImage,
    radius,
    topLeft,
    topRight,
    bottomRight,
    bottomLeft,
    isMixed,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
}: GifProps) {
    const key = `unsplash_${id.includes("id_") ? id.substring(3, id.length) : id}`
    const cache = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {}
    const [url, setUrl] = useState(cache.imageUrl || null)
    const borderRadius = isMixed ? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` : `${radius}px`

    function setGif(term: any) {
        const type = "/gifs"
        const searchType = `/random?tag=`
        const placeholder = `_key=${urls.giphyPlaceholder.replace(/[^a-zA-Z0-9 -]/g, "")}`
        const searchTerm = term
        const url = `${urls.giphyBase}${type}${searchType}${searchTerm}&api${placeholder}`

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }
                return res.json()
            })
            .then((res) => {
                setUrl(res.data.images.downsized_small.mp4)
                localStorage.setItem(
                    key,
                    JSON.stringify({
                        search,
                        imageUrl: res.data.images.downsized_small.mp4,
                    })
                )
            })
            .catch((err) => {})
    }

    useEffect(() => {
        const cache = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {}

        if (!lockImage || search !== cache.search) setGif(search)
    }, [search])

    return search.length > 0 ? (
        <div
            {...{ onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave }}
            style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundColor: "#000",
                color: "#333",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                fontSize: "14px",
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                borderRadius,
            }}
        >
            <video
                key={`#${true}`}
                autoPlay
                loop
                muted
                controls={false}
                preload="auto"
                playsInline
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                }}
                src={url}
            />
            Your browser does not support HTML5 video.
        </div>
    ) : (
        <div style={emptyStateStyle} {...{ onClick, onMouseEnter, onMouseLeave }}>
            <img style={{ width: 80, maxWidth: "80%" }} src={poweredByGiphy} />
        </div>
    )
}

// <img style={{ width: 80, maxWidth: "80%" }} src={assetUrl("./code/assets/powerByGiphyLight.png")} />

Gif.defaultProps = {
    height: 200,
    width: 200,
    search: "Abstract",
    lockImage: true,
    radius: 0,
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Gif, {
    search: {
        type: ControlType.String,
        title: "Search",
        placeholder: "design, cats, dogs",
    },
    lockImage: {
        type: ControlType.Boolean,
        title: "Shuffle",
        enabledTitle: "No",
        disabledTitle: "Yes",
        defaultValue: true,
    },
    radius: {
        title: "Radius",
        type: ControlType.FusedNumber,
        defaultValue: Gif.defaultProps.radius,
        toggleKey: "isMixed",
        toggleTitles: ["Radius", "Radius per corner"],
        valueKeys: ["topLeft", "topRight", "bottomRight", "bottomLeft"],
        valueLabels: ["TL", "TR", "BR", "BL"],
        min: 0,
    },
    ...defaultEvents,
})

Gif.displayName = "GIF"
