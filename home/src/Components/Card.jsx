import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { MdLabel } from 'react-icons/md'
import "./cards.css"


const Cards = () => {

    return (
        <div className='container mt-3' style={{ border: "1px solid red" }} >
            {/* <div className='card1'>
                <div >  <MdLabel color='#f2bb07' size="40px" /></div>
                <div style={{ padding: "5px" }}><h2>OUR TEAM</h2></div>
            </div> */}
            {/* <h1>Most Experienced</h1>
            <h1>Team Member</h1> */}

            <div className="row d-flex justify-content-center align-items-center">

                <Card style={{ width: '20rem', border: "none" }} className="mx-1 mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }}
                        src='https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=' alt="image1" className="mt-3" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "15px" }}>NAME LASTNAME</Card.Title>
                        <Card.Text style={{ fontSize: "13px", color: "#f2bb07", fontWeight: "bold" }}>
                            Position
                        </Card.Text>
                        <Card.Text style={{ fontSize: "13px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repellendus rerum, amet in iusto inventore et accusantium, similique eaque harum fuga modi.
                        </Card.Text>
                        <div className="button_div d-flex justify-content-center">
                            <Button className='col-lg-6' style={{ borderRadius: "15px", color: "black", backgroundColor: "#f2bb07", border: "none", fontSize: "12px", fontWeight: "bold" }}>READ MORE</Button>
                        </div>

                    </Card.Body>
                </Card>
                <Card style={{ width: '20rem', border: "none" }} className="mx-1 mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }}
                        src='https://as2.ftcdn.net/v2/jpg/00/88/53/89/1000_F_88538986_5Bi4eJ667pocsO3BIlbN4fHKz8yUFSuA.jpg'
                        alt='Green double couch with wooden legs'
                        className="mt-3" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "15px" }}>NAME LASTNAME</Card.Title>
                        <Card.Text style={{ fontSize: "13px", color: "#f2bb07", fontWeight: "bold" }}>
                            Position
                        </Card.Text>
                        <Card.Text style={{ fontSize: "13px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repellendus rerum, amet in iusto inventore et accusantium, similique eaque harum fuga modi.
                        </Card.Text>
                        <div className="button_div d-flex justify-content-center">
                            <Button className='col-lg-6' style={{ borderRadius: "15px", color: "black", backgroundColor: "#f2bb07", border: "none", fontSize: "12px", fontWeight: "bold" }}>READ MORE</Button>
                        </div>

                    </Card.Body>
                </Card>

                <Card style={{ width: '20rem', border: "none" }} className="mx-1 mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }}
                        src='https://media.istockphoto.com/id/981750034/photo/run-your-company-with-confidence.jpg?s=170667a&w=0&k=20&c=6MVxxfCNz5Rpm1MeKID4a2QZdYV2HRlD7khM6_f-9RM='
                        alt='Green double couch with wooden legs'
                        className="mt-3" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "15px" }}>NAME LASTNAME</Card.Title>
                        <Card.Text style={{ fontSize: "13px", color: "#f2bb07", fontWeight: "bold" }}>
                            Position
                        </Card.Text>
                        <Card.Text style={{ fontSize: "13px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, repellendus rerum, amet in iusto inventore et accusantium, similique eaque harum fuga modi.
                        </Card.Text>
                        <div className="button_div d-flex justify-content-center">
                            <Button className='col-lg-6' style={{ borderRadius: "15px", color: "black", backgroundColor: "#f2bb07", border: "none", fontSize: "12px", fontWeight: "bold" }}>READ MORE</Button>
                        </div>

                    </Card.Body>
                </Card>


            </div>
        </div>
    )
}

export default Cards