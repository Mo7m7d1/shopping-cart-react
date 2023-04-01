import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
type storeItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: storeItemProps) {
	const {
		getItemQuantity,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
	} = useShoppingCart();

	const quantity = getItemQuantity(id);

	return (
		<Card className="h-100">
			<Card.Img
				variant="top"
				src={imgUrl}
				height="200px"
				style={{ objectFit: "cover" }}
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-baseline mb-4">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>

				<div className="mt-auto">
					{quantity === 0 ? (
						<Button className="w-100" onClick={() => increaseCartQuantity(id)}>
							Add to Cart
						</Button>
					) : (
						<div
							className="d-flex flex-column align-items-center"
							style={{ gap: "0.8rem" }}
						>
							<div
								className="d-flex justify-content-center align-items-center"
								style={{ gap: "0.5rem" }}
							>
								<Button onClick={() => decreaseCartQuantity(id)}>-</Button>
								<div>
									<span className="fs-3">{quantity}</span> in Cart
								</div>
								<Button onClick={() => increaseCartQuantity(id)}>+</Button>
							</div>
							<Button
								variant="danger"
								size="sm"
								onClick={() => removeFromCart(id)}
							>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
