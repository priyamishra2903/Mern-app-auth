import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['May1', 'May2', 'May3',
           'May4', 'May5', 'May6'],
  datasets: [
    {
      label: 'Fasting hours',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0.3,
      data: [65, 59, 80, 81, 56, 34]
    }
  ]
}

class Dashboard extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
    return (
      <div  className="container text-center mt-15">
        <div className="row">
          <div className="col-sm-12">
            <h4>
              Hey there, <b className="name-lable">{user.name.split(" ")[0]}</b>
              <p className="mt-4">
                You are logged into the app
              </p>
            </h4>
            <button
              onClick={this.onLogout}
              className="btn btn-large btn-light hoverable font-weight-bold"
            >
              Logout
            </button>
            <div>
            <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:2
            },
            legend:{
              display:true,
              position:'right',
              innerWidth:10
            }
          }}
        />                       
          </div>
            
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);