import React, { useEffect, useState } from "react";

const Card = () => {
  const [Emp, SetEmp] = useState();

  useEffect(
    () =>
      fetch("http://localhost:3000/Employee")
        .then((data) => data.json())
        .then((data) => {
          SetEmp(data);
        }),
    []
  );

  return (
    <div className="d-flex flex-nowrap">
      <div>
        {Emp ? (
          <ul className="d-flex flex-wrap">
            {Emp.map((datas) => {
              return (
                <div class="card mt-4 p-2 ml-2" style={{ width: "18rem" }}>
                  <img src={`${datas.image}`} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{datas.name}</h5>
                    <p class="card-text">
                      I am Good Engineering in IT Technology. I can do my best
                      for organization growth...
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{`Role: ${datas.role}`}</li>
                    <li class="list-group-item">{`Experince: ${datas.experince}`}</li>
                    <li class="list-group-item">{`Project Name: ${datas.project}`}</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">
                      Bio link
                    </a>
                    <a href="#" class="card-link">
                      Contact link
                    </a>
                  </div>
                </div>
              );
            })}
          </ul>
        ) : (
          <h3>
                <div class="text-center" style={{position: "fixed", display: "block", top: "50%", right: "50%"}}>
            <div class="spinner-border" role="status">
             <span class="visually-hidden">Loading...</span>
          </div>
          </div>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Card;
