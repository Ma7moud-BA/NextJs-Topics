import { addProductToDB } from "@/actions/serverActions";
import AddProductButton from "@/components/addProductButton";
import { Product } from "@/typing";
/**
 * Benefits of Server Actions
 * 1. Allows server side mutations without unnecessary API Endpoints
 * 2. Reduces the amount of client side js
 * 3. Supports progressively enhanced forms
 */

export default async function Home() {
	//using mockapi for endpoint
	const res = await fetch(
		"https://64f48baa932537f4051a7506.mockapi.io/products",
		{
			cache: "no-store",
			next: {
				tags: ["products"],
			},
		}
	);

	const products: Product = await res.json();

	return (
		<main>
			<h1 className="text-3xl fong-bold text-center">Products Warehouse</h1>
			<form
				action={addProductToDB}
				className=" flex flex-col gap-5 max-w-xl mx-auto p-5"
			>
				<input
					name="product"
					type="text"
					className="border border-gray-300 rounded-md"
				/>
				<input
					name="price"
					type="text"
					className="border border-gray-300 rounded-md"
				/>
				<button className="bg-blue-500 text-white p-2 rounded-md">
					Add Product
				</button>
			</form>
			<h2 className="font-bold p-5">List of Products</h2>
			<div className="flex flex-wrap gap-5">
				{products.map((product) => {
					return (
						<div key={product.id} className="p-5 shadow">
							<p>{product.product}</p>
							<p>${product.price}</p>
						</div>
					);
				})}
			</div>
			<AddProductButton></AddProductButton>
		</main>
	);
}
