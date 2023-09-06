import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<>
			<h1 className="text-5xl">Home</h1>
			<Link href="/products?showDialog=y" className="text-3xl underline">
				Go to products with modal
			</Link>
			<br />
			<Link href="/products" className="text-3xl underline">
				Go to products without modal
			</Link>
		</>
	);
}
