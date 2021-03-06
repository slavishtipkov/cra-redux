import React from "react";

import "./reports.scss";

const Reports = () => (
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
          <div>Recently Added</div>
        </div>
      </div>
    </div>
    <div className="page-content">
      <div>Last Reviewed</div>
      <div className="table">TABLE</div>
    </div>
  </div>
);

export default Reports;
