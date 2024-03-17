import React from "react";
import "./Test_Instructions.css"; // Custom CSS file for additional styling
import logo from "./Image/1.jpg";

function TestInstructions() {
  return (
    <div className="container-fluid">
      <div className="test1">
        <img src={logo} width={80} height={80} alt="" className="logo" />
        <label htmlFor="text" className="name">
          <h5></h5>
        </label>
      </div>
      <div className="row justify-content-center align-items-center full-height">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-light">
              <center><h1 className="card-title">CyberSigma Mock Test</h1>
              </center>
            </div>
            <div className="card-body">
              <div className="instructions-section">
                  <h2 className="text-primary heading-2">Online Test</h2>
                <h2 className="text-primary"style={{color : 'black'}}>General Instructions:</h2>
                <ul class="list-group">
                  <li class="list-group-item">
                    This test consists of multiple-choice questions.
                  </li>
                  <li class="list-group-item">
                    Read each question carefully before selecting an answer.
                  </li>
                  <li class="list-group-item">
                    You cannot go back to previous questions once answered.
                  </li>
                  <li class="list-group-item">
                    Ensure you have a stable internet connection.
                  </li>
                  <li class="list-group-item">
                    Find a quiet and well-lit area to take the test.
                  </li>
                  <li class="list-group-item">
                    Avoid distractions and interruptions during the test
                    duration.
                  </li>
                  <li class="list-group-item">
                    Have your login credentials ready.
                  </li>
                  <li class="list-group-item">
                    Once the test begins, the timer will start.
                  </li>
                  <li class="list-group-item">
                    Ensure to complete the test within the specified time.
                  </li>
                </ul>
              </div>
              <div className="instructions-section">
                <h2 className="text-primary">Terms and Conditions:</h2>
                <p className="text-muted">
                  By accessing this online test, you agree to the following
                  terms and conditions:
                </p>
                <ol>
                  <li>This test is provided for educational purposes only.</li>
                  <li>
                    Do not attempt to cheat or use any unauthorized aids during
                    the test.
                  </li>
                  <li>Your activity during the test may be monitored.</li>
                  <li>
                    We reserve the right to terminate your test session if any
                    suspicious activity is detected.
                  </li>
                  <li>
                    Your results may be used for statistical analysis and
                    research purposes.
                  </li>
                </ol>
                <p>
                  <input type="checkbox" /> {/* Add closing tag here */}
                  <label>I agree to all the Terms and Conditions.</label>
                </p>

                <p className="text-muted">
                  By clicking "Start Test", you acknowledge that you have read
                  and agree to the above terms and conditions.
                </p>
                {/* Add Start Test Button */}
                <button className="btn btn-primary btn-lg">Start Test</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestInstructions;
