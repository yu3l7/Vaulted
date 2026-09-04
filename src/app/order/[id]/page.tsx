import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { findProduct } from "@/lib/content";
import { OrderForm } from "@/components/order/OrderForm";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) return { title: "Order not found" };
  return {
    title: `Order · ${product.name}`,
    description: `Create an order for ${product.name}.`,
  };
}

export default async function OrderPage({ params }: Props) {
  const { id } = await params;
  const product = findProduct(id);
  if (!product) notFound();

  return (
    <main className="flex-1 py-12 md:py-16">
      <Container>
        {/* Header */}
        <div className="mb-12">
          {/* Breadcrumb */}
          <nav className="mono mb-8 flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted">
            <Link href="/" className="hover:text-accent">
              home
            </Link>
            <span className="text-border-bright">/</span>
            <Link href={`/products/${product.slug}`} className="hover:text-accent">
              {product.id}
            </Link>
            <span className="text-border-bright">/</span>
            <span className="text-fg">order</span>
          </nav>

          <p className="label text-accent">
            <span className="text-accent-2">▸</span> /order/{product.slug}
          </p>
          <h1 className="display mt-3 text-balance text-4xl tracking-tight md:text-5xl">
            Create your ticket.
            </h1>
          <p className="mt-4 max-w-xl text-pretty text-muted">
            Fill in your details below. We&apos;ll send a Discord DM within
            minutes to confirm payment and schedule delivery.
          </p>
        </div>

        {/* Form */}
        <OrderForm
          productSlug={product.slug}
          productName={product.name}
          productCategory={product.category}
          productPrice={product.price}
          variants={product.variants}
        />
      </Container>
    </main>
  );
}
