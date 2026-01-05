"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

type ImageWithFallbackProps = Omit<ImageProps, "onLoadingComplete"> & {
  fallbackSrc?: string
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "/placeholder.jpg",
  alt,
  className,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setImgSrc(src as string)
  }, [src])

  return (
    <>
      {isLoading && (
        <div
          className={`bg-neutral-100 animate-pulse ${className}`}
          style={{ height: rest.height || "100%", width: rest.width || "100%" }}
        />
      )}
      <Image
        {...rest}
        src={imgSrc || fallbackSrc}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc)
          setIsLoading(false)
        }}
      />
    </>
  )
}
