import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class DashBoard extends Component {
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="card card-chart">
                                <div className="card-header card-header-success">
                                    <div className="ct-chart" id="dailySalesChart"></div>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Daily Sales</h4>
                                    <p className="card-category">
                                        <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in
                            today sales.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">access_time</i> updated 4 minutes ago
                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card card-chart">
                                <div className="card-header card-header-warning">
                                    <div className="ct-chart" id="websiteViewsChart"></div>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Email Subscriptions</h4>
                                    <p className="card-category">Last Campaign Performance</p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">access_time</i> campaign sent 2 days ago
                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="card card-chart">
                                <div className="card-header card-header-danger">
                                    <div className="ct-chart" id="completedTasksChart"></div>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Completed Tasks</h4>
                                    <p className="card-category">Last Campaign Performance</p>
                                </div>
                                <div className="card-footer">
                                    <div className="stats">
                                        <i className="material-icons">access_time</i> campaign sent 2 days ago
                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard; 