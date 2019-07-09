import React from "react";

const Reports = () => (
  <div clasName="reports-page page">
    <div className="reports-page-header page-header">
      <div className="page-header-nav">
        <ul>
          <li>OVERVIEW</li>
          <li>ALL REPORTS</li>
          <li>FAVORITES</li>
          <li>GENERATED</li>
          <li>
            <button>GENERATE REPORT</button>
          </li>
        </ul>
      </div>
      <div className="page-header-content">
        <h3>Report_name</h3>
      </div>
    </div>
    <div className="page-content">
      <h5>Last Reviewed</h5>
      <div className="table">TABLE</div>
    </div>
  </div>
);

export default Reports;
