import { FormEvent, ReactNode, useRef } from "react";
import "./PopupStyle.css";

interface PopupProps {
	title: string;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
	onClose: () => void;
	children: ReactNode;
}

export default function Popup({
	title,
	onSubmit,
	onClose,
	children,
}: PopupProps) {
	const popupModelRef = useRef(null);
	return (
		<div
			className="modal"
			ref={popupModelRef}
			onClick={(e) => {
				e.stopPropagation();
				if (popupModelRef.current && e.target == popupModelRef.current) {
					onClose();
				}
			}}
		>
			<form className="popup-frame" onSubmit={onSubmit}>
				<div className="popup-header">
					<div className="popup-logo">
						<img src="/Sportify.png" />
					</div>
					<span className="popup-title">{title}</span>
					<div className="popup-exit">
						<img src="/popup-close.svg" onClick={onClose} />
					</div>
				</div>
				{children}
			</form>
		</div>
	);
}
