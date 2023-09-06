"use client";

import { addProductToDB } from "@/actions/serverActions";
import { useTransition } from "react";
//useTransition
/**
 *
 * Allows components to avoid undesirable loading states by waiting for content to load before transitioning to the next screen.
 * It also allows components to defer slower, data fetching updates until subsequent renders so that more crucial updates can be rendered immediately.
 * The useTransition hook returns two values in an array.
 * The first is a boolean, React’s way of informing us whether we’re waiting for the transition to finish. The second is a function that takes a callback. We can use it to tell React which state we want to defer.
 */
const AddProductButton = () => {
	const [isPending, startTransition] = useTransition();

	const formData = new FormData();
	formData.append("product", "Mackbook pro");
	formData.append("price", "1299,99");
	return (
		<button
			className="fixed bottom-10 right-10 border bg-green-500 text-white p-2 rounded-md w-48"
			onClick={() => {
				startTransition(() => {
					addProductToDB(formData);
				});
			}}
		>
			{isPending ? "Adding..." : "Add Mackbook Pro"}
		</button>
	);
};

export default AddProductButton;
