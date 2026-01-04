"use client"

import { useEffect } from "react"

interface FacebookFeedProps {
    pageUrl?: string
    width?: number
    height?: number
}

export default function FacebookFeed({
    pageUrl = "https://www.facebook.com/Clubsharephoto",
    width = 500,
    height = 700
}: FacebookFeedProps) {

    useEffect(() => {
        // Load Facebook SDK
        if (typeof window !== 'undefined' && !(window as any).FB) {
            const script = document.createElement('script')
            script.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v18.0'
            script.async = true
            script.defer = true
            script.crossOrigin = 'anonymous'
            document.body.appendChild(script)
        } else if ((window as any).FB) {
            (window as any).FB.XFBML.parse()
        }
    }, [])

    return (
        <div className="glass-card p-6 flex justify-center">
            <div
                className="fb-page"
                data-href={pageUrl}
                data-tabs="timeline"
                data-width={width}
                data-height={height}
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
            >
                <blockquote
                    cite={pageUrl}
                    className="fb-xfbml-parse-ignore"
                >
                    <a href={pageUrl}>
                        Clubs by Bo - ช่างภาพ ส่งรูปด่วนภายใน 24 ชม.
                    </a>
                </blockquote>
            </div>
        </div>
    )
}
