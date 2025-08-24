import { CartCounter } from "@/shopping-cart/components/CartCounter";


export const metadata = {
    title: 'Shopping Cart',
    description: 'A simple counter'
}

export default function CounterPage() {
    return (
        <div className={`flex flex-col items-center justify-center w-full h-full`}>
            <span className={``}>Products in the cart</span>

            <CartCounter />

        </div>
    )
}