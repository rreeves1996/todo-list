import React, { useState } from "react";
import { MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';
import dayjs from "dayjs";

function WeekDay(props) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="day-container">
            <div className={collapsed ? "day collapsed" : "day"} >
                <div className="day-collapsed-header">
                    <div className="day-header">
                        <h5><strong>{props.day}</strong></h5>
                        {collapsed ? (
                            <>
                                <h6 className="date hidden">{props.date}</h6>
                            </>
                        ) : (
                            <>
                                <h6 className="date">{props.date}</h6>
                            </>
                        )}
                        
                    </div>
                    {collapsed ? (
                        <>
                            <h6 className="date">{props.date}</h6>
                        </>
                    ) : (
                        <>
                            <h6 className="date hidden">{props.date}</h6>
                        </>
                    )}
                </div>
                <div className={collapsed ? "day-body row collapsed" : "day-body row"}>
                    <div className="col">
                        <MDBListGroup style={{ minWidth: '22rem' }} light>
                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id="list-item-input"></input>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id="list-item-input"></input>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id="list-item-input"></input>
                            </MDBListGroupItem>
                        </MDBListGroup> 
                    </div>
                    <div className="col">
                        <MDBListGroup style={{ minWidth: '22rem' }} light>
                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id="list-item-input"></input>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id="list-item-input"></input>
                            </MDBListGroupItem>

                            <MDBListGroupItem>
                                <MDBCheckbox inline className="checkbox"/>
                                <input name="to-do-input" id="list-item-input"></input>
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
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="week-container">
            {props.week === "This Week" ? 
                days.map((day, index) => (
                    <>
                        <WeekDay day={dayjs().day(index).format('dddd')} date={dayjs().day(index).format('MMM D')}/>
                    </>
                ))
                : days.map((day, index) => (
                    <>
                        <WeekDay day={dayjs().day(index + 7).format('dddd')} date={dayjs().day(index + 7).format('MMM D')}/>
                    </>
                ))}
        </div>
    )
}