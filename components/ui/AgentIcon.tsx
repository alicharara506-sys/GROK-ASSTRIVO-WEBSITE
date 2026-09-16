type AgentIconProps = {
  src: string;
  alt: string;
  className?: string;
  size?: number;
};

export function AgentIcon({ src, alt, className, size = 24 }: AgentIconProps) {
  return (
    // Decorative when alt is empty; otherwise named.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
    />
  );
}
