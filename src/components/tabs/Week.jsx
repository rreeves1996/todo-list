import React, { useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';

function WeekDay() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="day-container">
            <div className={collapsed ? "day collapsed" : "day"} >
                <div className="day-header">
                    <h5><strong>Thursday</strong></h5>
                    {collapsed ? (
                        <>
                        </>
                    ) : (
                        <>
                            <h6>Oct. 6th</h6>
                        </>
                    )}
                    
                </div>
                {collapsed ? (
                        <>
                            <h6 className="date">Oct. 6th</h6>
                        </>
                    ) : (
                        <>
                            <h6 className="date hidden">Oct. 6th</h6>
                        </>
                    )}
                <div className={collapsed ? "day-body row collapsed" : "day-body row"}>
                    <div className="col">
                        <MDBListGroup style={{ minWidth: '22rem' }} light>
                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id=""></input>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id=""></input>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id=""></input>
                            </MDBListGroupItem>
                        </MDBListGroup> 
                    </div>
                    <div className="col">
                        <MDBListGroup style={{ minWidth: '22rem' }} light>
                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id=""></input>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id=""></input>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id=""></input>
                            </MDBListGroupItem>
                        </MDBListGroup> 
                    </div>
                </div>
                <i className={collapsed ? "fa-solid fa-caret-down" : "fa-solid fa-caret-down active"} onClick={() => setCollapsed(!collapsed)}></i>

            </div>

        </div>
    )
}

export default function Week(props) {
    return (
        <div className="week-container">
            <WeekDay />
        </div>
    )
}