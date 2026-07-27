# Redux Toolkit Shopping Cart

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A polished shopping cart application built with React and Redux Toolkit to demonstrate modern state management in a practical e-commerce UI. This project focuses on clean architecture, reusable components, and a centralized cart flow built around Redux Toolkit best practices.

## Live Demo

Live Demo: [https://shopping-cart-jade-delta.vercel.app/]


## Features

- ✅ Display products from a local product dataset
- ✅ Add items to the cart
- ✅ Remove individual items from the cart
- ✅ Increase product quantity
- ✅ Decrease product quantity
- ✅ Clear the entire cart
- ✅ Dynamic cart badge with live item count
- ✅ Real-time total price and total quantity calculation
- ✅ Responsive design for desktop and mobile screens
- ✅ Local storage persistence for the cart state

## Tech Stack

| Category | Technology |
| --- | --- |
| Frontend | React |
| Build Tool | Vite |
| State Management | Redux Toolkit + React Redux |
| Styling | Tailwind CSS |
| Language | JavaScript |
| Routing | React Router DOM |

## Folder Structure

```text
src/
├── app/
│   └── store.js
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   └── CartSummary.jsx
├── data/
│   └── products.js
├── features/
│   └── cart/
│       └── cartSlice.js
├── pages/
│   ├── Home.jsx
│   └── Cart.jsx
├── App.jsx
└── main.jsx
```

## Redux Toolkit Concepts Used

This project demonstrates core Redux Toolkit concepts in a simple and practical way:

- `configureStore` to create the application store
- `createSlice` to define cart state, actions, and reducers
- `Redux Store` as the single source of truth for cart data
- `Reducers` to update state in a predictable way
- `Actions` to describe cart events such as add, remove, and update
- `useSelector` to read state from the Redux store
- `useDispatch` to send actions to the store
- `Provider` to make the store available throughout the app
- `Centralized State Management` for consistent UI updates across components

## Redux Data Flow

```mermaid
graph TD
    UserClick[User clicks Add to Cart] --> Dispatch[dispatch(action)]
    Dispatch --> Reducer[Reducer updates state]
    Reducer --> Store[Redux Store updates]
    Store --> Selector[useSelector reads updated state]
    Selector --> UI[UI re-renders with fresh cart data]
```

## Installation

```bash
git clone https://github.com/your-username/redux-toolkit-shopping-cart.git
cd redux-toolkit-shopping-cart
npm install
npm run dev
```

## Project Workflow

1. The user browses the product listing on the home page.
2. Clicking the add-to-cart button dispatches an action.
3. The reducer updates the cart state in the Redux store.
4. The store notifies the connected components.
5. Components re-render with the latest cart values.
6. The navbar badge and cart summary update instantly.

## Future Improvements

- Authentication and user profiles
- Product search and filtering
- Category-based browsing
- Wishlist and favorites
- API integration for live product data
- RTK Query for async data fetching
- Payment gateway integration
- Backend support for real checkout flow

## Learning Outcomes

- Learned how to structure a React app around Redux Toolkit
- Understood the difference between actions, reducers, and store state
- Practiced centralizing cart logic instead of managing state locally
- Improved component communication through shared global state
- Learned how to keep reducers predictable and maintainable
- Gained experience with `useSelector` and `useDispatch` in real UI flows
- Understood how state updates trigger re-rendering in React
- Built a stronger mental model for production-grade state architecture
- Learned how to persist cart data using local storage
- Improved confidence in building scalable frontend applications

## Acknowledgements

This project was created as part of a Redux Toolkit self-learning challenge, inspired by the practical frontend curriculum of Sheryians Coding School and the official Redux Toolkit documentation.

## License

MIT License
# Shopping-car
