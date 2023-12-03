import React from "react";
import "./Profile.css"; // Import the CSS file for styling
import "bootstrap/dist/css/bootstrap.css";
import Search from "../search/Search";

export const Profile = () => {
  const data = [
    { name: "Awoke", image: "/awoke.jpg" },
    { name: "Amsalu", image: "/Amsalu.jpg" },
    { name: "Yohnnis ", image: "/yoha.jpg" },
    { name: "Samrawit ", image: "/samri.jpg" },
    // Add more data as needed
  ];
  return (
    <div className=" pro container-fluid">
      <div className="row">
        <div className="col-md-2  left-pane">
          <div className="col-12 ">
            <button
              className="btn btn-success btn-block custom-width-70 "
              style={{ width: "150px", marginTop: "40px" }}
            >
              profile
            </button>
          </div>
          <div className="my-3">
            <button
              className="btn btn-success btn-block custom-width-90"
              style={{ width: "145px", marginTop: "20px" }}
            >
              user name
            </button>
          </div>
          <div className="my-3">
            <button
              className="btn btn-success btn-block custom-width-70"
              style={{ width: "150px", marginTop: "20px" }}
            >
              Chates{" "}
            </button>
          </div>
          <div className="my-3">
            <button
              className="btn btn-success btn-block custom-width-70"
              style={{ width: "150px", marginTop: "20px" }}
            >
              Groups{" "}
            </button>
          </div>
          <div className="my-3">
            <button
              className="btn btn-success btn-block custom-width-70"
              style={{ width: "150px", marginTop: "20px" }}
            >
              Videos{" "}
            </button>
          </div>
        </div>

        <div
          className="col-md-7 middle-pane "
          style={{ boxShadow: "0px 0px 12px 0px" }}
        >
          <h2 className="text-center">Type new vent</h2>
          <div className="text-center ">
            <textarea
              className="form-control mx-5 "
              style={{ width: "70%", height: "200px" }}
              placeholder="Vent here"
            ></textarea>
            <button className="btn btn-primary mt-1 ml-3 btn-block">
              Release
            </button>
          </div>
          <hr />
          <div
            className="text-center"
            style={{ height: "370px", overflow: "scroll" }}
          >
            <div className="card">
              <div className="card-body shadow-sm">
                <h1 className="card-title">Your Recent Vents</h1>
                <div
                  style={{
                    height: "200px",
                    overflowY: "scroll",
                    overflowX: "hidden",
                  }}
                >
                  <p className="text-center " style={{ color: "black" }}>
                    Your recent vents the count button will count the button
                    that you have to get comment in lot of the event in the
                    quality fo majk that is oky do the bestand intesed in hoy
                    tive your recent vents the count button will count the
                    button that you have to get comment in lot of the event in
                    the quality yocoun t the button that you have to get comment
                    in lot of the event in the quality buount button will count
                    the button that you have to get comment in lot of the event
                    in the quality yocount the button that you t the button that
                    you have to get comment in lot of the event in the quality
                    buount button will count the button that you have to get
                    comment in lot of the event in the quality yocount the
                    button that you t the button that you have to get comment in
                    lot of the event in the quality buount button will count the
                    button that you have to get comment in lot of the event in
                    the quality yocount the button that you have to get comment
                    in lot of the event in the quality your recent vents the
                    count button will count tet comment in lot of the event in
                    the quality
                  </p>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-end align-items-center"
              style={{}}
            >
              <button className="btn btn-primary">Reaction count</button>
            </div>

            <div className="card">
              <div className="card">
                <div
                  className="card-body"
                  style={{ maxHeight: "300px", overflowY: "scroll" }}
                >
                  <div
                    className="text-center"
                    style={{ background: "#8AAAE5" }}
                  >
                    <details>
                      <summary>Comments</summary>
                      <div style={{ overflowY: "scroll", overflowX: "hidden" }}>
                        <p className="custom-width-70 border">
                          Your comments will be displayed here. The target is to
                          do the best and be interested in the life you are
                          interested in. Your comments will be displayed here.
                          The target is to do the best and be interested in the
                          life you are interested in. be displayed here. The
                          target is to do the best and be interested in the life
                          you are interested in. Your comments will be displayed
                          here. The taerested in. Your comments will be
                          displayed here. The target is to do the best and be
                          interested in the life you are interested in. be
                          displayed here. The target is to do the best and be
                          interested in the life you are interested in. Your
                          comments will be displayed here. The taerested in.
                          Your comments will be displayed here. The target is to
                          do the best and be interested in the life you are
                          interested in. be displayed here. The target is to do
                          the best and be interested in the life you are
                          interested in. Your comments will be displayed here.
                          The taerested in. Your comments will be displayed
                          here. The target is to do the best and be interested
                          in the life you are interested in. be displayed here.
                          The target is to do the best and be interested in the
                          life you are interested in. Your comments will be
                          displayed here. The taerested in. Your comments will
                          be displayed here. The target is to do the best and be
                          interested in the life you are interested in. be
                          displayed here. The target is to do the best and be
                          interested in the life you are interested in. Your
                          comments will be displayed here. The tae life you are
                          interested in. be displayed here. The target is to do
                          the best and be interested in the life you are
                          interested in. Your comments will be displayed here.
                          The target is to do the best and be interested in the
                          life you are interested in.
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 right-pane">
          <Search size="12px" />
          <ul className="list-unstyled">
            {data.map((item, index) => (
              <li className="my-3" key={index}>
                <img
                  src={item.image}
                  alt="a"
                  className="img-thumbnail"
                  style={{ width: "70px", height: "70px" }}
                />
                <span style={{ fontSize: '24px' ,color:"white"}}>{item.name}</span>
              </li>
            ))}
          </ul>
          {/* Content for the right pane goes here */}
        </div>
      </div>
    </div>
  );
};
