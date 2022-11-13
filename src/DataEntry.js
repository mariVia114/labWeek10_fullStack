import React from "react";
const INITIAL_VALUE = {
    email: "",
    name: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    province: "",
    zip: "",
    
    
}
export default class DataEntry extends React.Component{
    constructor(props){
        super(props)
        this.state = {...INITIAL_VALUE}
        this.provinces = ["Choose a province", "Alberta", "British Columbia","Manitoba", "New Brunswick", "Newfoundland and Labrador","Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan"]
    }

    onSubmit= (event) => {
        event.preventDefault()
    }
    onValueChanged = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render = () => {
        return(
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
                    <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            class="form-control" 
                            placeholder="Email" 
                            value={this.state.email} 
                            onChange={event => this.onValueChanged(event)}/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            class="form-control" 
                            placeholder="Full Name" 
                            value={this.state.name} 
                            onChange={event => this.onValueChanged(event)}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="addressOne">Address</label>
                        <input 
                            type="text" 
                            name="addressOne" 
                            class="form-control" 
                            placeholder="123 Main St" 
                            value={this.state.addressOne} 
                            onChange={event => this.onValueChanged(event)}/>
                    </div>
                    <div class="form-group">
                        <label for="addressTwo">Address 2</label>
                        <input 
                            type="text" 
                            class="form-control"
                            placeholder="Apartment, Unit, or Floor" 
                            value={this.state.addressTwo} 
                            onChange={event => this.onValueChanged(event)}/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="city">City</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            name="city" 
                            placeholder="City" 
                            value={this.state.city} 
                            onChange={event => this.onValueChanged(event)}/>
                        </div>
                        <div class="form-group col-md-4">
                        <label for="province">State</label>
                        <select 
                            name="province" 
                            class="form-control" 
                            value={this.state.province} 
                            onChange={event => this.onValueChanged(event)}>
                        {
                            this.provinces.map(province => (
                                <option key={province} value={province}>{province}</option>
                            ))
                        }
                        </select>
                        </div>
                        <div class="form-group col-md-2">
                        <label for="zip">Zip</label>
                        <input 
                            type="text"
                            name="zip" 
                            class="form-control"
                            value={this.state.zip} 
                            onChange={event => this.onValueChanged(event)}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="zip" onChange={event => this.onValueChanged(event)} />
                        <label class="form-check-label" for="gridCheck">
                            Agree to terms and conditions?
                        </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </form>
            

            Email: {this.state.email} <br/>
            Full Name: {this.state.name} <br/>
            Address: {this.state.addressOne} <br/>
            City: {this.state.city} <br/>
            Province: {this.state.province} <br/>
            Postal Code: {this.state.zip} <br/>
            </>
        )
    }
}