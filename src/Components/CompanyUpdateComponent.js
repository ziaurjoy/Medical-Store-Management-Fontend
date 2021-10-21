import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import APIHandler from '../utils/APIHandler';

export default class CompanyUpdateComponent extends Component {
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
    
    
      async formSubmit(event){
        event.preventDefault();
        var apiHandler = new APIHandler();
        var response = await apiHandler.saveCompanyDataUpdate(event.target.name.value, event.target.license.value, event.target.address.value, 
          event.target.phone.value, event.target.email.value, event.target.description.value, event.target.company_id.value);
          console.log(response);
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
                   
    
                    <div className="col-md-8 m-auto">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Update Company</h3>
                    </div>
                    <form onSubmit = {this.formSubmit}>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputText">Company Name</label>
                         <input type="text" defaultValue={this.state.name} name="name" className="form-control" id="exampleInputCompanyName" placeholder="Enter Company Name ...." />
                        </div>
                       <div className="form-group">
                          <label htmlFor="exampleInputText">License ID</label>
                          <input type="text" defaultValue={this.state.license_id} name="license" className="form-control" id="exampleInputlicenseId" placeholder="Enter License ID ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Address</label>
                        <input type="text" defaultValue={this.state.address} name="address" className="form-control" id="exampleInputAddress" placeholder="Enter Address ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputNumber">Phone</label>
                        <input type="number" defaultValue={this.state.phone} name="phone" className="form-control" id="exampleInputPhone" placeholder="Enter Phone ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email</label>
                        <input type="email" defaultValue={this.state.email} name="email" className="form-control" id="exampleInputEmail" placeholder="Enter Email ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Description</label>
                        <input type="textarea" defaultValue={this.state.description} name="description" className="form-control" id="exampleInputDescription" placeholder="Enter Description ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Company ID</label>
                        <input type="textarea" defaultValue={this.props.match.params.id} name="company_id" className="form-control" id="exampleInputDescription" placeholder="Enter Description ..." />
                      </div>
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" onClick={() => this.conpanyListRedirect()} className="btn btn-primary">Update</button>
                    </div>
                  </form>
                </div>
                </div>
    
    
                  </div>         
            )
        }
}
