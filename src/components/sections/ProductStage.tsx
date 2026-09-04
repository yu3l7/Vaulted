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
        <div className="product-stage__topbar">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-accent pulse-cyan"
            />
            <span className="mono text-[10px] uppercase tracking-wider text-muted">
              product.preview
            </span>
          </div>
          <span className="mono text-[10px] uppercase tracking-wider text-accent">
            [ curated ]
          </span>
        </div>

        <div className="product-stage__canvas">
          <h2 id="product-stage-title" className="sr-only">
            Curated Vaulted product previews
          </h2>

          <span
            aria-hidden="true"
            className="product-stage__crosshair product-stage__crosshair--top"
          />
          <span
            aria-hidden="true"
            className="product-stage__crosshair product-stage__crosshair--bottom"
          />

          {PRODUCT_IMAGES.map((image, index) => (
            <figure className={`product-stage__image ${image.className}`} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                preload={index === 1}
                sizes="(max-width: 639px) 31vw, (max-width: 1023px) 22vw, 164px"
                className="product-stage__image-media"
              />
            </figure>
          ))}

          <span className="product-stage__readout product-stage__readout--left" aria-hidden="true">
            drop_01
          </span>
          <span className="product-stage__readout product-stage__readout--right" aria-hidden="true">
            drop_03
          </span>
        </div>

        <div className="product-stage__bottombar">
          <span>assets: 03 / hero_drop</span>
          <span className="text-accent-2">motion: slow</span>
        </div>
      </div>
    </aside>
  );
}
