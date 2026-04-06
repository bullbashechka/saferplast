import type { CSSProperties, ImgHTMLAttributes } from "react";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fill?: boolean;
  priority?: boolean;
  unoptimized?: boolean;
};

export function Image({ alt, fill = false, priority = false, style, ...rest }: ImageProps) {
  const mergedStyle: CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
    : { ...style };

  return <img alt={alt} loading={priority ? "eager" : "lazy"} style={mergedStyle} {...rest} />;
}
