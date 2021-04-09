import React from "react";

function resultList(props) {
    return (
        <thead className="table">
            {props.results.map(result => (
                <tbody style="width:100%">
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <th>John</th>
                        <th>Doe</th>
                        <th>25</th>
                    </tr>
                </tbody>
        ))}
            </thead>
    );
}

export default resultList;