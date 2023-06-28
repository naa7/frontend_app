import React from "react";

export default function ListItems(props) {
    console.log("LIST ITEMS COMPONENT");
    console.log("PROPS LIST:", props.list);
  
    if (props.list) {
      if (props.list[0]?.company) {
        return (
          <div>
            {props.list.map((item) => (
              <div key={item.id}>
                <p>{item.id}. {item.type}</p>
              </div>
            ))}
          </div>
        );
      } else if (props.list[0]?.firstName) {
        return (
          <div>
            {props.list.map((item) => (
              <div key={item.id}>
                <p>{item.id}. {item.firstName}</p>
              </div>
            ))}
          </div>
        );
      }
    }
  
    return <h1>No list Found!</h1>;
  }