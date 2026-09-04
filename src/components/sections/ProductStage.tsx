import Image from "next/image";

const PRODUCT_IMAGES = [
  {
    src: "/product-01.png",
    alt: "Vaulted Fortnite product preview 01",
    className: "product-stage__image--one",
  },
  {
    src: "/product-02.png",
    alt: "Vaulted Fortnite product preview 02",
    className: "product-stage__image--two",
  },
  {
    src: "/product-03.png",
    alt: "Vaulted Fortnite product preview 03",
    className: "product-stage__image--three",
  },
] as const;

/**
 * A quiet hero focal point: three supplied product previews arranged as a
 * triangular drop. CSS owns the motion so the visual remains server-rendered
 * and disappears cleanly for reduced-motion users.
 */
export function ProductStage() {
  return (
    <aside className="product-stage" aria-labelledby="product-stage-title">
      <div className="product-stage__frame">
        <div className="product-stage__canvas">
          <h2 id="product-stage-title" className="sr-only">
            Vaulted product previews
          </h2>

          <div className="product-stage__corners" aria-hidden="true">
            <span className="product-stage__corner product-stage__corner--top-left" />
            <span className="product-stage__corner product-stage__corner--top-right" />
            <span className="product-stage__corner product-stage__corner--bottom-left" />
            <span className="product-stage__corner product-stage__corner--bottom-right" />
          </div>

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
      </div>
    </aside>
  );
}
