"use client";
import { useSearchParams } from "next/navigation";

import { useRef, useEffect, ReactNode } from "react";

type DialogProps = {
	title: string;
	onClose: () => void;
	onOk: () => {};
	children: ReactNode;
};

const Dialog = ({ title, onClose, onOk, children }: DialogProps) => {
	const searchParams = useSearchParams();
	const dialogRef = useRef<null | HTMLDialogElement>(null);
	const showDialog = searchParams.get("showDialog");

	useEffect(() => {
		if (showDialog === "y") {
			dialogRef.current?.show();
		} else {
			dialogRef.current?.close();
		}
	}, [showDialog]);

	const closeDialog = () => {
		dialogRef.current?.close();
		onClose();
	};
	const clickOk = () => {
		onOk();
		closeDialog();
	};

	const dialog: JSX.Element | null =
		showDialog === "y" ? (
			<dialog
				ref={dialogRef}
				className="fixed top-52  left-72 -translate-x-52 -translate-y-52 z-10 rounded-xl backdrop:bg-gray-800/60"
			>
				<div className="w-[500px] max-w-full bg-gray-200 flex flex-col ">
					<div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
						<h1 className="text-2xl">{title}</h1>
						<button
							onClick={closeDialog}
							className="mb-2 py-1 px-2 cursor-pointer rounded-border-none w-8 h-8 font-bold bg-red-500 text-white"
						>
							X
						</button>
					</div>
					<div className="px-5 pb-6">
						{children}
						<div className="flex flex-row justify-end">
							<button onClick={clickOk}>OK</button>
						</div>
					</div>
				</div>
			</dialog>
		) : null;

	return dialog;
};

export default Dialog;
