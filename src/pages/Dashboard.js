import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {

  return (
    <React.Fragment>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Projects</h1>
      </div>

      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <Link to={`/app/project/1`}>
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="h5 mb-0 font-weight-bold text-gray-800 text-uppercase">CovidX-19</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
