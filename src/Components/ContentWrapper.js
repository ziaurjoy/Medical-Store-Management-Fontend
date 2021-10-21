import React, { Component } from 'react'

export default class ContentWrapper extends Component {
    render() {
        return (
            <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Dashboard</h1>
                  </div>
                </div>
              </div>
            </div>
            <section className="content">
              <div className="container-fluid">
             
                <div className="row">
                  <div className="col-lg-3 col-6">
                    
                    <div className="small-box bg-info">
                      <div className="inner">
                        <h3>150</h3>
        
                        <p>New Orders</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag"></i>
                      </div>
                      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                  </div>
                  
                  <div className="col-lg-3 col-6">
                  
                    <div className="small-box bg-success">
                      <div className="inner">
                        <h3>53<sup style={{fontSize: "20px"}}>%</sup></h3>
        
                        <p>Bounce Rate</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-stats-bars"></i>
                      </div>
                      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                  </div>
                  
                  <div className="col-lg-3 col-6">
                    
                    <div className="small-box bg-warning">
                      <div className="inner">
                        <h3>44</h3>
        
                        <p>User Registrations</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-person-add"></i>
                      </div>
                      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                  </div>
                 
                  <div className="col-lg-3 col-6">
                
                    <div className="small-box bg-danger">
                      <div className="inner">
                        <h3>65</h3>
        
                        <p>Unique Visitors</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-pie-graph"></i>
                      </div>
                      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
         
          </div>
        )
    }
}
