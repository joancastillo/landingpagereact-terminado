import React from "react";
import rigoUrl from "../../img/rigo-baby.jpg";

const BootstrapCard = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-4 p-1">
						<div className="card" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src={rigoUrl}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src={rigoUrl}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card" style={{ width: "18rem" }}>
							<img
								className="card-img-top"
								src={rigoUrl}
								alt="Card image cap"
							/>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BootstrapCard;
