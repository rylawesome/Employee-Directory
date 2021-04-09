import React from "react";

function EmployeeCard(props) {
    return (
        <tr>
            <th scope="row"><img alt={props.firstName} src={props.picture} /></th>
            <th>{props.firstName}</th>
            <th>{props.lastName}</th>
            <th>{props.email}</th>
            <th>{props.phone}</th>
        </tr>
    );
}

export default EmployeeCard;