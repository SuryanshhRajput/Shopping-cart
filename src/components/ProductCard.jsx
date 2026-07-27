import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-900">{product.title}</h3>
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-sm font-semibold text-amber-700">
              ★ {product.rating}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-600">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Price</p>
            <p className="text-xl font-semibold text-slate-900">₹{product.price}</p>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
