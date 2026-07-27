import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../features/cart/cartSlice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <li className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      <img src={item.image} alt={item.title} className="h-24 w-full rounded-2xl object-cover sm:w-24" />
      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-slate-900">{item.title}</h3>
            <p className="text-sm text-slate-500">{item.category}</p>
          </div>
          <button
            type="button"
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-sm font-medium text-rose-600 transition hover:text-rose-700"
          >
            Remove
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              −
            </button>
            <span className="min-w-8 text-center font-semibold text-slate-900">{item.quantity}</span>
            <button
              type="button"
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="flex h-8 w-8 items-center justify-center rounded-full text-lg font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              +
            </button>
          </div>
          <p className="text-lg font-semibold text-slate-900">₹{item.price * item.quantity}</p>
        </div>
      </div>
    </li>
  )
}

export default CartItem
