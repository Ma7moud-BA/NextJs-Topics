import Link from "next/link";
import React from "react";
import Dialog from "../components/Dialog";

const Products = () => {
	const onClose = async () => {
		"use server";
		console.log("modal has closed");
	};
	const onOk = async () => {
		"use server";
		console.log("ok has clicked");
	};

	return (
		<>
			<Dialog title="Example modal" onClose={onClose} onOk={onOk}>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
					consequatur recusandae impedit sequi voluptate mollitia necessitatibus
					vero eius inventore. At aliquid atque temporibus placeat est itaque,
					saepe debitis doloribus officia.
				</p>
			</Dialog>
			<h1 className="text-5xl"> Products</h1>
			<Link href="/" className="text-3xl underline">
				Go to Home
			</Link>
			<section className="text-2xl flex flex-col gap-4 p-4">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
					assumenda eligendi odit esse amet, repellat quam pariatur rem sequi
					omnis expedita corporis dolores eaque cupiditate eveniet molestias
					distinctio voluptas alias?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
					assumenda eligendi odit esse amet, repellat quam pariatur rem sequi
					omnis expedita corporis dolores eaque cupiditate eveniet molestias
					distinctio voluptas alias?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
					assumenda eligendi odit esse amet, repellat quam pariatur rem sequi
					omnis expedita corporis dolores eaque cupiditate eveniet molestias
					distinctio voluptas alias?
				</p>{" "}
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
					assumenda eligendi odit esse amet, repellat quam pariatur rem sequi
					omnis expedita corporis dolores eaque cupiditate eveniet molestias
					distinctio voluptas alias?
				</p>
			</section>
		</>
	);
};

export default Products;
