import React from "react";
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            className="card-img-top img-cards"
            src={props.imgsrc}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title text-center font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At saepe
              repellat doloribus. Dolor, nemo porro. Voluptas aliquid labore
              asperiores dignissimos harum nulla quaerat consequuntur ipsam
              delectus, quia, accusantium enim exercitationem!
            </p>
            <NavLink to="/contact" className="btn btn-purchase-course">
              Purchase course
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
