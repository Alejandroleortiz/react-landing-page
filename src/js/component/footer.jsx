import React from "react";

const dataFooter = {
	textFooter: "Copyright © Your Website 2023",
}

const Footer = () => {
	return (

<footer className="bg-body-secondary mt-4 py-5 fw-bold text-center text-white" data-bs-theme="dark">{dataFooter.textFooter}</footer>


	);
};

export default Footer;