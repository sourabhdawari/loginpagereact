import React from "react";
import brain from "../img/brain.png";
const Form = () => {
  return (
    <div className="mt-5">
      <div class="row mt-5 justify-content-center">
        <div class="col-md-12  col-lg-10">
          <div class="d-md-flex">
            <div class="img left  text-start">
              <div class="d-flex container">
                <div class="w-100 ">
                  
                  <div className="row p-4">
				  <h3 class="text-light ml-5 mt-4 h1">Join Us</h3>
                  <p className="text-light">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                    <div className="col skills">
                      <div className="col rounded-circle skill">
                        <img className="skill_img p-2" src={require("../img/brain.png")} alt="" />
                      </div>
                      <h3 className="skill_gap">|</h3>
                      <div className="col rounded-circle skill">
                        <img className="skill_img p-3" src={require("../img/connect.png")} alt="" />
                      </div>
                      <h3 className="skill_gap">|</h3>
                      <div className="col rounded-circle skill ">
                        <img className="skill_img  mt-2" src={require("../img/learn.png")} alt="" />
                      </div>
                    </div>
                    <div className="col skills_desc d-grid gap-3">
                      <div className="col">
                        <h5 class="text-light h5">Learn</h5>
                        <p className="text-light">
                          Lorem ipsum dolor sit amet consectetur.
                       
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                      
                      <div className="col">
                        <h5 class="text-light h5">Connect</h5>
                        <p className="text-light">
                          Lorem ipsum dolor sit amet consectetur.
                        
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>

                      <div className="col">
                        <h5 class="text-light h5">Grow</h5>
                        <p className="text-light">
                          Lorem ipsum dolor sit amet consectetur.
                       
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>
            </div>

            <div class="wrap  login-wrap p-5 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4 h1">Welcome</h3>
                </div>
              </div>
              <form action="#" class="signin-form mt-5">
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control rounded-pill"
                    placeholder="Username"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <input
                    type="password"
                    class="form-control rounded-pill"
                    placeholder="Password"
                    required
                  />
                </div>

                <div class="form-group d-md-flex mt-3 mb-3">
                  <div class="w-50 text-left">
                    <input className="" type="checkbox" />
                    <label class="checkbox-wrap mb-3 checkbox-primary ">
                      Remember Me
                    </label>
                  </div>
                  <div class="w-50 text-md-end ">
                    <a href="#">Forgot Password</a>
                  </div>
                </div>
                <div class="form-group mb-5">
                  <button
                    type="submit"
                    class="form-control rounded-pill btn btn-primary rounded submit px-3"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <p class="text-center">
                "Dont have account yet?{" "}
                <a data-toggle="tab" href="#signup">
                  Sign Up
                </a>
                "
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
