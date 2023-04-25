import React from 'react';
import { useMediaQuery } from 'react-responsive';

const modalDesktopStyles = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: '#FFF',
	padding: '50px',
	width: '800px',
	height: '600px',
	zIndex: 1000,
};
const modalMobileStyles = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: '#FFF',
	padding: '10px',
	width: '350px',
	height: '250px',
	zIndex: 1000,
};
const overlayStyles = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0,0,0,.7)',
	zIndex: 1000,
};

const Modal = ({ open, children, onClose }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
	if (!open) return null;

	return isMobile ? (
		<>
			<div style={overlayStyles} onClick={onClose} />
			<div style={modalMobileStyles} className="rounded-xl">
				{children}
			</div>
			;
		</>
	) : (
		<>
			<div style={overlayStyles} onClick={onClose} />
			<div style={modalDesktopStyles} className="rounded-xl">
				{children}
			</div>
			;
		</>
	);
};

export default Modal;
