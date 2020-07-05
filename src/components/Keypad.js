import React from "react";

const Keypad = (props) => {
	return (
		<div>
			<div
				className="container"
				style={{ width: "35%", marginTop: "30vh" }}>
				<div className="row">
					<div className="col border text-center border-primary">
						{props.result || 0}
					</div>
				</div>
				<div className="row">
					<div className="col-3 border text-center bg-primary">1</div>
					<div className="col-3 border text-center bg-primary">2</div>
					<div className="col-3 border text-center bg-primary">3</div>
					<div className="col-3 border text-center bg-primary">4</div>
				</div>
				<div className="row">
					<div className="col-3 border text-center bg-primary">5</div>
					<div className="col-3 border text-center bg-primary">6</div>
					<div className="col-3 border text-center bg-primary">7</div>
					<div className="col-3 border text-center bg-primary">8</div>
				</div>
				<div className="row">
					<div className="col-3 border text-center bg-primary">9</div>
					<div className="col-3 border text-center bg-primary">0</div>
					<div className="col-3 border text-center bg-primary">
						CE
					</div>
					<div className="col-3 border text-center bg-primary">C</div>
				</div>
				<div className="row">
					<div className="col-3 border text-center bg-primary">+</div>
					<div className="col-3 border text-center bg-primary">-</div>
					<div className="col-3 border text-center bg-primary">*</div>
					<div className="col-3 border text-center bg-primary">
						&#247;
					</div>
				</div>
				<div className="row">
					<div className="col-3 border text-center bg-primary">=</div>
					<div className="col-3 border text-center bg-primary">(</div>
					<div className="col-3 border text-center bg-primary">)</div>
					<div className="col-3 border text-center bg-primary">.</div>
				</div>
			</div>
		</div>
	);
};

export default Keypad;
