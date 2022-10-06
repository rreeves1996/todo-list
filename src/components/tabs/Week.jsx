import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';
function WeekDay() {
    return (
        <div className="day">
            <div className="day-header">
                <h6><strong>Thursday</strong></h6>
                <h6>Oct 6th</h6>
            </div>
            <div className="day-body row">
                <div className="col">
                    <MDBListGroup style={{ minWidth: '22rem' }} light>
                        <MDBListGroupItem>
                            <MDBCheckbox inline />
                            <input name="to-do-input" id=""></input>
                        </MDBListGroupItem>

                        <MDBListGroupItem>
                            <MDBCheckbox inline />
                            <input name="to-do-input" id=""></input>
                        </MDBListGroupItem>

                        <MDBListGroupItem>
                            <MDBCheckbox inline />
                            <input name="to-do-input" id=""></input>
                        </MDBListGroupItem>

                        <MDBListGroupItem>
                            <MDBCheckbox inline />
                            <input name="to-do-input" id=""></input>
                        </MDBListGroupItem>

                        <MDBListGroupItem>
                            <MDBCheckbox inline />
                            <input name="to-do-input" id=""></input>
                        </MDBListGroupItem>
                    </MDBListGroup> 
                </div>
                <div className="col">
                    <div className="to-do-item">
                        <div className="check-mark"></div>
                    <div className="to-do-item">
                        <div className="check-mark"></div><input name="to-do-input" id=""></input></div>
                    <div className="to-do-item">
                        <div className="check-mark"></div><input name="to-do-input" id=""></input></div>
                    <div className="to-do-item">
                        <div className="check-mark"></div><input name="to-do-input" id=""></input></div>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Week(props) {
    return (
        <div className="week-container">
            <WeekDay />
            <h1>Hello</h1>
        </div>
    )
}