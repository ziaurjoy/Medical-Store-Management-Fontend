
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import APIHandler from '../utils/APIHandler';

export default class CompanyDetails extends Component {
  constructor(props){
    super(props);
   console.log(props.match.params.id);

  }
  state = {
    name: '',
    license_id: '',
    address: '',
    phone: '',
    email: '',
    description: '',
  }


componentDidMount(){
  this.fatchCompanyDetailsData()
}



async fatchCompanyDetailsData(){
  var apiHandler = new APIHandler();
  var companyDetailsData = apiHandler.fetchCompanyDetails(this.props.match.params.id);
  console.log(companyDetailsData);
  // console.log((await companysData).data[0]);
  this.setState({name: (await companyDetailsData).data.name})
  this.setState({license_id: (await companyDetailsData).data.license_id})
  this.setState({address: (await companyDetailsData).data.address})
  this.setState({phone: (await companyDetailsData).data.phone})
  this.setState({email: (await companyDetailsData).data.email})
  this.setState({description: (await companyDetailsData).data.description})
  this.setState({added_on: (await companyDetailsData).data.added_on})
  console.log(this.state.name);
  
}

conpanyListRedirect = () =>{
  this.props.history.push("/company/list")
}
  
    render() {
      
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6 col-md-10">
                                <Link to="/company/list">
                                    <button className="btn btn-primary" style={{"float": 'right'}}>Company List</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
               

                <div class="row">
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="card-title">{this.state.name}</h3>
                      </div>
                      
                      <div class="card-body">
                        <table class="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>License ID</th>
                              <th>Address</th>
                              <th>Phone</th>
                              <th>Email</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr data-widget="expandable-table" aria-expanded="false">
                              <td>{this.state.license_id}</td>
                              <td>{this.state.address}</td>
                              <td>{this.state.phone}</td>
                              <td>{this.state.email}</td>
                            </tr>
                            <tr class="expandable-body">
                              <td colspan="5">
                                <p>{this.state.description}</p>
                              </td>
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>
                      
                    </div>
                  
                  </div>
                </div>


              </div>         
        )
    }
}
