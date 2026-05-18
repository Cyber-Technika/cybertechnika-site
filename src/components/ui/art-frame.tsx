import Image from "next/image";

type ArtFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function ArtFrame({
  src,
  alt,
  className = "",
  imageClassName = "",
}: ArtFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-line bg-background-soft ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${imageClassName}`}
        sizes="100vw"
      />
      <Image
        src="/assets/tactical-overlay.svg"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover opacity-80 mix-blend-screen"
        sizes="100vw"
      />
    </div>
  );
}
