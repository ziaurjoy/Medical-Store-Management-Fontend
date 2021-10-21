import React, { Component } from 'react'

import APIHandler from '../utils/APIHandler';

import MainComponent from './MainComponent'

export default class AddMedicineComponent extends Component {
    state = {
        companysdata: [],
        // medicinedetails: [{
        //   salt_name: '',
        //  salt_quantity: '', 
        //  salt_quantity_type: '', 
        //  description: ''}]
      }
    
    
      async formSubmit(event){
        event.preventDefault();
        console.log(event.target.company_id.value);
        var apiHandler = new APIHandler();
        var response = await apiHandler.saveMedicineData(
          event.target.name.value, 
          event.target.medical_type.value, 
          event.target.buy_price.value, 
          event.target.sell_price.value, 
          event.target.CGST.value, 
          event.target.SGST.value,
          event.target.batch_no.value,
          event.target.shelf_no.value,
          event.target.exp_date.value,
          event.target.mfg.value,
          event.target.company_id.value,
          event.target.description.value,
          event.target.in_stock.value,
          event.target.quantity_in_strip.value
          );
          console.log(response);
      }
    
    componentDidMount(){
      this.fatchCompanysData();
    }
    
    companyDetails = (company_id) =>{
      console.log(company_id);
      console.log(this.props);
      this.props.history.push("/companydetail/"+company_id)
    }
    
    async fatchCompanysData(){
      var apiHandler = new APIHandler();
      var companysData = apiHandler.fetchCompanys();
      this.setState({companysdata: (await companysData).data})
      console.log(this.state.companysdata);
    }

    async fatchMedicineData(){
      var apiHandler = new APIHandler();
      var medicineData = apiHandler.saveMedicineData();
      this.setState({medicineData: (await medicineData).data})
      console.log(this.state.medicineData);
    }


    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Medicine</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 m-auto">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Create New Medicine</h3>
                    </div>
                    <form onSubmit = {this.formSubmit}>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputText">Medicine Name</label>
                         <input type="text" name="name" className="form-control" id="exampleInputCompanyName" placeholder="Medicine Name ...." />
                        </div>
                       <div className="form-group">
                          <label htmlFor="exampleInputText">Medical Type</label>
                          <input type="text" name="medical_type" className="form-control" id="exampleInputlicenseId" placeholder="Medicine Type ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Buy Price</label>
                        <input type="number" name="buy_price" className="form-control" id="exampleInputAddress" placeholder="Buy Price ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputNumber">Sell Price</label>
                        <input type="number" name="sell_price" className="form-control" id="exampleInputPhone" placeholder="Cell Price ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail">CGST</label>
                        <input type="text" name="CGST" className="form-control" id="exampleInputEmail" placeholder="Central Goods and Services Tax ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">SGST</label>
                        <input type="text" name="SGST" className="form-control" id="exampleInputDescription" placeholder="State Goods and Services Tax ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Batch No</label>
                        <input type="text" name="batch_no" className="form-control" id="exampleInputDescription" placeholder="Batch No ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Shelf No</label>
                        <input type="date" name="shelf_no" className="form-control" id="exampleInputDescription" placeholder="Self No ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">exp_date</label>
                        <input type="date" name="exp_date" className="form-control" id="exampleInputDescription" placeholder="Date of Expiry ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">mfg</label>
                        <input type="text" name="mfg" className="form-control" id="exampleInputDescription" placeholder="Mfg ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Company Name</label>
                        <select className="form-control" name="company_id" id="company_id">
                        {this.state.companysdata.map((companys) =>(
                            <option className="form-control" name="company_id" value={companys.id}>{companys.name}</option>
                            ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">description</label>
                        <input type="text" name="description" className="form-control" id="exampleInputDescription" placeholder="Enter Description ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">In Stock</label>
                        <input type="text" name="in_stock" className="form-control" id="exampleInputDescription" placeholder="In Stock ..." />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputText">Quantity In Strip</label>
                        <input type="text" name="quantity_in_strip" className="form-control" id="exampleInputDescription" placeholder="Quantity In Strip ..." />
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
        </div>
        )
    }
}
