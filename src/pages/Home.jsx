import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import products from '../data/products'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { totalQuantity } = useSelector((state) => state.cart)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-4xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-2xl sm:p-10 lg:p-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">Redux Toolkit Mini Hackathon</p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">Build your dream cart with a modern storefront.</h1>
            <p className="mt-4 text-lg text-slate-300">
              Discover premium products, manage your cart with centralized Redux state, and enjoy a polished shopping experience.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-slate-300">Items in cart</p>
            <p className="mt-2 text-3xl font-semibold">{totalQuantity}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Featured Products</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Curated picks for your next upgrade</h2>
          </div>
        </div>

        {isLoading ? (
          <div className="flex min-h-60 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 text-slate-600">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />
              <span className="font-medium">Loading products...</span>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home
