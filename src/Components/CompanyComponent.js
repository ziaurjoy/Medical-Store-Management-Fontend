import React, { Component } from 'react'
import APIHandler from '../utils/APIHandler';

import MainComponent from './MainComponent'
export default class CompanyComponent extends Component {

  state = {
    companysdata: []
  }


  async formSubmit(event){
    event.preventDefault();
    var apiHandler = new APIHandler();
    var response = await apiHandler.saveCompanyData(event.target.name.value, event.target.license.value, event.target.address.value, 
      event.target.phone.value, event.target.email.value, event.target.description.value);
      console.log(response);
  }

componentDidMount(){
  this.fatchCompanysData()
}

companyDetails = (company_id) =>{
  console.log(company_id);
  console.log(this.props);
  this.props.history.push("/companydetail/"+company_id)
}

async fatchCompanysData(){
  var apiHandler = new APIHandler();
  var companysData = apiHandler.fetchCompanys();
  // console.log((await companysData).data[0]);
  this.setState({companysdata: (await companysData).data})
  console.log(this.state.companysdata);
}

    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Company Manage</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 m-auto">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Create New Company</h3>
                    </div>
                    <form onSubmit = {this.formSubmit}>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputText">Company Name</label>
                         <input type="text" name="name" className="form-control" id="exampleInputCompanyName" placeholder="Enter Company Name ...." />
                        </div>
                       <div className="form-group">
                          <label htmlFor="exampleInputText">License ID</label>
                          <input type="text" name="license" className="form-control" id="exampleInputlicenseId" placeholder="Enter License ID ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Address</label>
                        <input type="text" name="address" className="form-control" id="exampleInputAddress" placeholder="Enter Address ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputNumber">Phone</label>
                        <input type="number" name="phone" className="form-control" id="exampleInputPhone" placeholder="Enter Phone ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail" placeholder="Enter Email ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Description</label>
                        <input type="text" name="description" className="form-control" id="exampleInputDescription" placeholder="Enter Description ..." />
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
                </div>

                <section className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1>Companys List</h1>
                      </div>
                      <div className="col-sm-6">
                    </div>
                  </div>
                </div>
              </section>

              <section className="content">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-12">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">DataTable with minimal features hover style</h3>
                            </div>
                            <div className="card-body">
                              <table id="example2" className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Name</th>
                                  <th>License_id</th>
                                  <th>Address</th>
                                  <th>Phone</th>
                                  <th>Email</th>
                                  <th>Added_on</th>
                                  <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                  {this.state.companysdata.map((companys) =>(
                                    <tr kye={companys.id}>
                                      <td>#{companys.id}</td>
                                      <td>{companys.name}</td>
                                      <td>{companys.license_id}</td>
                                      <td>{companys.address}</td>
                                      <td>{companys.phone}</td>
                                      <td>{companys.email}</td>
                                      <td>{new Date(companys.added_on).toLocaleString()}</td>
                                      <td><button className="btn btn-block btn-info" onClick={() => this.companyDetails(companys.id)}>View</button></td>

                                    </tr>
                                  ))}
                                
                                </tbody>
                              </table>
                            </div>

                            <div className="row">
                            <div className="col-sm-12 col-md-5">
                              <div className="dataTables_info" id="example2_info" role="status" aria-live="polite">
                                Showing 1 to 10 of 57 entries</div> 
                              </div>
                              <div className="col-sm-12 col-md-7">
                                <div className="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                                  <ul className="pagination">
                                    <li className="paginate_button page-item previous disabled" id="example2_previous">
                                      <a href="#" aria-controls="example2" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                    </li>
                                    <li className="paginate_button page-item active">
                                      <a href="#" aria-controls="example2" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                      <a href="#" aria-controls="example2" data-dt-idx="2" tabIndex="0" className="page-link">2</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                      <a href="#" aria-controls="example2" data-dt-idx="3" tabIndex="0" className="page-link">3</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                      <a href="#" aria-controls="example2" data-dt-idx="4" tabIndex="0" className="page-link">4</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                      <a href="#" aria-controls="example2" data-dt-idx="5" tabIndex="0" className="page-link">5</a>
                                    </li>
                                    <li className="paginate_button page-item ">
                                      <a href="#" aria-controls="example2" data-dt-idx="6" tabIndex="0" className="page-link">6</a>
                                    </li>
                                    <li className="paginate_button page-item next" id="example2_next">
                                      <a href="#" aria-controls="example2" data-dt-idx="7" tabIndex="0" className="page-link">Next</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>                    
                      </div>
                    </div>
                  </section>
              </div>             
        )
    }
}
