import React from "react";

const Keypad = () => {
	return (
		<div>
			<div className="container" style={{width: 50%}}>
				<div className="row">
					<div className="col-3">1</div>
					<div className="col-3">2</div>
					<div className="col-3">3</div>
					<div className="col-3">4</div>
				</div>
				<div className="row">
					<div className="col-3"></div>
					<div className="col-3"></div>
					<div className="col-3"></div>
					<div className="col-3"></div>
				</div>
				<div className="row">
					<div className="col-3"></div>
					<div className="col-3"></div>
					<div className="col-3"></div>
					<div className="col-3"></div>
				</div>
				<div className="row">
					<div className="col-3"></div>
					<div className="col-3"></div>
					<div className="col-3"></div>
					<div className="col-3"></div>
				</div>
				<div className="row">
					<div className="col-3"></div>
					<div className="col-3"></div>
					<div className="col-3"></div>
					<div className="col-3"></div>
				</div>
			</div>
		</div>
	);
};

export default Keypad;
