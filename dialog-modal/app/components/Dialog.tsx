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

    /**
     * ! Why using search parameters to show the dialog instead of using a state
     *  1. users can bookmark or share a link to the open dialog
     *  2. if a dialog represent a unique location, it probably warrants a unique url. meaning that if you want to open the same page sometime with a dialog and sometimes without
     *  3. you can use a plain anchor to open the dialog. no button or onClick is required 
     */
	const showDialog = searchParams.get("showDialog");

	useEffect(() => {
		if (showDialog === "y") {
			//? the show method shows a dialog not a modal
			// dialogRef.current?.show();
			//? the showModal method shows a modal not a dialog
            // !the main difference between them that the modal prevents the user from interacting with the page until you close it  
			dialogRef.current?.showModal();
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
				// backdrop:bg-gray-800/60 will apply if u use a modal not a dialog
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
