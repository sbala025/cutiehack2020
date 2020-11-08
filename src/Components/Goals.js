import React from 'react'
import AddForm from "./AddForm";
import LinkDisplay from "./LinkDisplay";
import { Container } from "react-grid-system";


const LinksStyle = {
    position: "relative",
    height: "230px",
    width: "383px",
    backgroundColor: "#84A9AC",
    border: "4px solid #204051",
    boxSizing: "border-box",
    
    marginTop:"37%",
    marginBottom: "14%",

}

const HeadingStyle = {
    fontFamily: "Rock Salt",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "57px",
    marginTop: "10px",
    marginLeft: "0px",
    color: "#E7DFD5"
}

function Goals({user, updateUser}) {
    const onDelete = (index) => () => {
        user.goals.splice(index, 1);
        updateUser(user);
    };

    return (
        <div>
            <div style={LinksStyle}>
                <h1 style={HeadingStyle}>Goals</h1>
                <Container>
                    {user.goals.map((goal, index) => {
                        return (<LinkDisplay link={goal} onDelete={onDelete(index)} />);
                    })}
                </Container>
                <AddForm user={user} updateUser={updateUser} updateType={"goals"} />
            </div>
        </div>
    )
 }

 export default Goals
