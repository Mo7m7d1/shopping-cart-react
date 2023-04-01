import OffCanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
	isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
	const { closeCart, cartItems } = useShoppingCart();
	return (
		<OffCanvas show={isOpen} placement="end" onHide={closeCart}>
			<OffCanvas.Header closeButton>
				<OffCanvas.Title>Cart</OffCanvas.Title>
			</OffCanvas.Header>

			<OffCanvas.Body>
				<Stack gap={3}>
					{cartItems.map((item) => (
						<CartItem key={item.id} {...item} />
					))}

					<div className="ms-auto fw-bold fs-5">
						Total:{" "}
						{formatCurrency(
							cartItems.reduce((total, cartItem) => {
								const item = storeItems.find((i) => i.id === cartItem.id);
								return total + (item?.price || 0) * cartItem.quantity;
							}, 0)
						)}
					</div>
				</Stack>
			</OffCanvas.Body>
		</OffCanvas>
	);
}
