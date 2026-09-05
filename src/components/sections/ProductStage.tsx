import Image from "next/image";

const PRODUCT_IMAGES = [
  {
    src: "/product-placeholder.jpg",
    alt: "Vaulted Fortnite account preview 01",
    className: "product-stage__image--one",
  },
  {
    src: "/product-placeholder.jpg",
    alt: "Vaulted Fortnite account preview 02",
    className: "product-stage__image--two",
  },
  {
    src: "/product-placeholder.jpg",
    alt: "Vaulted Fortnite account preview 03",
    className: "product-stage__image--three",
  },
] as const;

/**
 * A quiet hero focal point: three supplied product previews arranged as a
 * triangular drop with a soft inner-vignette. CSS owns the motion so the
 * visual remains server-rendered and disappears cleanly for reduced-motion
 * users. The frame, scanlines, and corner brackets are gone — only the
 * vignette remains as the visual container.
 */
export function ProductStage() {
  return (
    <aside className="product-stage" aria-labelledby="product-stage-title">
      <div className="product-stage__vignette">
        <h2 id="product-stage-title" className="sr-only">
          Vaulted product previews
        </h2>

        {PRODUCT_IMAGES.map((image, index) => (
          <figure className={`product-stage__image ${image.className}`} key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload={index === 1}
              sizes="(max-width: 639px) 35vw, (max-width: 1023px) 28vw, 202px"
              className="product-stage__image-media"
            />
          </figure>
        ))}
      </div>
    </aside>
  );
}
