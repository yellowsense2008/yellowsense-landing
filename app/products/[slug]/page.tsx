import { notFound } from "next/navigation"
import { products, getProductBySlug } from "@/lib/products"
import { ProductPageContent } from "@/components/product-page-content"

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const product = getProductBySlug(slug)
    if (!product) {
      return { title: "Product Not Found" }
    }
    return {
      title: `${product.name} | Yellowsense Technologies`,
      description: product.shortDescription,
    }
  })
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return <ProductPageContent product={product} />
}

