import React from "react";
import { connect } from "react-redux";

import "./reports.scss";

class Reports extends React.Component {
  render() {
    return (
      <div className="reports-page page">
        <div className="reports-page-header page-header">
          <div className="page-header-nav">
            <ul>
              <li>OVERVIEW</li>
              <li>ALL REPORTS</li>
              <li>FAVORITES</li>
              <li>GENERATED</li>
            </ul>
            <div className="generate-report-wrapper">
              <div className="generate-button">GENERATE REPORT</div>
            </div>
          </div>
          <div className="page-header-heading">
            <h3>Report_name</h3>
          </div>
          <div className="page-header-content">
            <div className="recently-added-wrapper">
              <div className="recently-added-heading">
                <div className="heading">Recently Added</div>
                <div className="see-all">See all</div>
              </div>
              <div className="recently-added-boxes">
                <div className="recently-added-box">
                  <div className="name">Report_name_21421412</div>
                  <div className="info">You reviewed this yesterday.</div>
                </div>
                <div className="recently-added-box">
                  <div className="name">Report_name_023030</div>
                  <div className="info">You reviewed this yesterday.</div>
                </div>
                <div className="recently-added-box">
                  <div className="name">Report_name_99111</div>
                  <div className="info">You reviewed this 2 days ago.</div>
                </div>
                <div className="recently-added-box">
                  <div className="name">Report_name_76888</div>
                  <div className="info">You reviewed this 3 days ago.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div>Last Reviewed</div>
          <div className="table">TABLE</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default Reports;
