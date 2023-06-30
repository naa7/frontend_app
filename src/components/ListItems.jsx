import React from "react";

export default function ListItems(props) {
    console.log("LIST ITEMS COMPONENT");
    console.log("PROPS LIST:", props.list);
  
    if (props.list) {
      if (props.list[0]?.firstName) {
        return (
          <div>
            <h2>Shoppers Table</h2>
            <table>
              <thead>
                <tr>
                  <th  style={{ padding: "15px"}}>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Size</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {props.list.map((shopper) => (
                  <tr key={shopper.id}>
                    <td  style={{ padding: "15px"}}>{shopper.id}</td>
                    <td  style={{ padding: "10px"}}>{shopper.firstName}</td>
                    <td  style={{ padding: "10px"}}>{shopper.lastName}</td>
                    <td  style={{ padding: "10px"}}>{shopper.size}</td>
                    <td  style={{ padding: "10px"}}>{shopper.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else if (props.list[0]?.company) {
        return (
          <div>
            <h2>Shoes Table</h2>
            <table>
              <thead>
                <tr>
                  <th  style={{ padding: "15px"}}>ID</th>
                  <th>Company</th>
                  <th>Type</th>
                  <th>Laces</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                {props.list.map((shoe) => (
                  <tr key={shoe.id}>
                    <td  style={{ padding: "15px"}}>{shoe.id}</td>
                    <td  style={{ padding: "10px"}}>{shoe.company}</td>
                    <td  style={{ padding: "10px"}}>{shoe.type}</td>
                    <td  style={{ padding: "10px"}}>{shoe.laces ? "Yes" : "No"}</td>
                    <td  style={{ padding: "10px"}}>{shoe.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
  
    return <h1>No list Found!</h1>;
  }