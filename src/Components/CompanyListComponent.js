import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import APIHandler from '../utils/APIHandler';


export default class CompanyListComponent extends Component {


  state = {
    companysdata: []
  }

componentDidMount(){
  this.fatchCompanysData()
}

companyDetails = (company_id) =>{
  console.log(company_id);
  console.log(this.props);
  this.props.history.push("/company/detail/"+company_id)
}

companyUpdate = (company_id) =>{
  console.log(company_id);
  console.log(this.props);
  this.props.history.push("/company/update/"+company_id)
}

async fatchCompanysData(){
  var apiHandler = new APIHandler();
  var companysData = apiHandler.fetchCompanys();

  this.setState({companysdata: (await companysData).data})
  console.log(this.state.companysdata);
}


    render() {
        return (
            <div className="content-wrapper">
                

                <section className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6 col-md-12">
                        <Link to="/company/add">
                          <button className="btn btn-primary" style={{"float": 'right'}}>Create New Company</button>
                        </Link>
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
                              <h3 className="card-title">Company List Data</h3>
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
                                      <td>
                                        <button className="btn btn-block btn-info" onClick={() => this.companyDetails(companys.id)}>View</button>
                                        <button className="btn btn-block btn-info" onClick={() => this.companyUpdate(companys.id)}>Update</button>
                                        <button className="btn btn-block btn-info">Delete </button>
                                      </td>

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
