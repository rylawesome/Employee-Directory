import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import "../styles/Result.css";

class SearchResultContainer extends Component {
    state = {
        result: [],
        filter: "",
        filterBy: "lastName",
        currentSort: "default",
        sortField: ""
    };

    componentDidMount() {
        API.search().then(result => {
            this.setState({
                result: result.data.results.map((e, i) => ({
                    firstName: e.name.first,
                    lastName: e.name.last,
                    picture: e.picture.large,
                    email: e.email,
                    phone: e.phone,
                    dob: e.age,
                    key: i
                }))
            })
        }).catch(err => console.log(err));
    }
    filterEmployee = (searchkey) => {
        var filterResult = this.state.result.filter(
            person => person.firstName === searchkey)
            this.setState({
                result:filterResult
            })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        this.filterEmployee(value);
        this.setState({
            [name]:value
        });
        this.filterEmployee(value);
        this.filterEmployee(this.state.search);
    };

    handleInputChange = event => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Employee Directory</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <SearchForm
                        value = {this.state.search}
                        handleInputChange = {this.handleInputChange}
                        handleFormSubmit = {this.handleFormSubmit} />
                    </div>
                </div>
                <thead className="row">
                    <tbody className="table">
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                        {[...this.state.result].map((item) => 
                            <EmployeeCard
                                picture = {item.picture}
                                firstName = {item.firstName}
                                lastName = {item.lastName}
                                email = {item.emailName}
                                phone = {item.phone}
                                key = {item.key}/>
                                )}
                    </tbody>
                </thead>
            </div>
        );
    }
}

export default SearchResultContainer;