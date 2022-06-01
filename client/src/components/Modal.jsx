import React from 'react';

const modalStyles = {
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
	if (!open) return null;

	return (
		<>
			<div style={overlayStyles} onClick={onClose} />
			<div style={modalStyles} className="rounded-xl">
				{children}
			</div>
			;
		</>
	);
};

export default Modal;
