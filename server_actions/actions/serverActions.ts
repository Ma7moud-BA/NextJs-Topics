"use server";
import { revalidateTag } from "next/cache";
import { Product } from "@/typing";
export const addProductToDB = async (e: FormData) => {
	const product = e.get("product")?.toString();
	const price = e.get("price")?.toString();
	if (!product || !price) return;

	const newProduct: Product = {
		product: product,
		price: price,
	};
	await fetch("https://64f48baa932537f4051a7506.mockapi.io/products", {
		method: "POST",
		body: JSON.stringify(newProduct),
		headers: { "Content-Type": "application/json" },
	});
	// this line causes a refetch and fetch call with the tag "products"
	revalidateTag("products");
};
