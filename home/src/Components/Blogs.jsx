import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Blogs = () => {
    return (
        <div style={{paddingBottom:"60px",paddingTop:"60px",backgroundImage: 'url(https://media.istockphoto.com/id/1376036104/vector/fawn-or-beige-or-very-light-brown-pastel-coloured-smudged-scuffed-grunge-horizontal-vector.jpg?s=612x612&w=0&k=20&c=54ey-5cJk5miWXMBaQHmhGdlq9uqI5D7vAlFyig89N8=)'}}>
        <div className='container mt-3'   >
            <h2 className='text-initial'>See Latest News</h2>
            <h2 className='text-left'>and Updates</h2>

            <div className='row d-flex justify-content-center align-items-center' >

                <Card style={{ width: '16rem', border: "none" ,backgroundImage: 'url(https://media.istockphoto.com/id/1376036104/vector/fawn-or-beige-or-very-light-brown-pastel-coloured-smudged-scuffed-grunge-horizontal-vector.jpg?s=612x612&w=0&k=20&c=54ey-5cJk5miWXMBaQHmhGdlq9uqI5D7vAlFyig89N8=)'}} className=" mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }}
                           src='https://media.istockphoto.com/id/905746182/photo/couple-of-business-persons-on-a-meeting.jpg?s=612x612&w=0&k=20&c=XBe07TcoYuNWmIlF1UdA23Oe-7xOgC3Ar0IQKQMk-LI='
                           alt='Green double couch with wooden legs' className="mt-3" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "15px" }}>BY NAME LASTNAME</Card.Title>
                        <Card.Text style={{ textAlign: "justify", fontSize: "13px", fontWeight: "bold" }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing who elit.
                        </Card.Text>
                        <Card.Text style={{ textAlign: "justify", fontSize: "13px" }} >
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design
                        </Card.Text>
                        <div className="button_div d-flex justify-content-center">
                            <Button className='col-lg-8' style={{ borderRadius: "15px", color: "black", backgroundColor: "#f2bb07", border: "none", fontSize: "12px", fontWeight: "bold" }}>READ MORE</Button>
                        </div>

                    </Card.Body>
                </Card>
                <Card style={{ width: '16rem', border: "none" ,backgroundImage: 'url(https://media.istockphoto.com/id/1376036104/vector/fawn-or-beige-or-very-light-brown-pastel-coloured-smudged-scuffed-grunge-horizontal-vector.jpg?s=612x612&w=0&k=20&c=54ey-5cJk5miWXMBaQHmhGdlq9uqI5D7vAlFyig89N8=)'}} className=" mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }}
                         src='https://media.istockphoto.com/id/910449906/photo/success-is-a-dual-effort.jpg?s=612x612&w=0&k=20&c=7fj1_WE9e9aSDjhQVEak1ynjI6-1I0kx8zqphWRlB4k='
                         alt='Green double couch with wooden legs'
                        className="mt-3" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "15px" }}>BY NAME LASTNAME</Card.Title>
                        <Card.Text style={{ textAlign: "justify", fontSize: "13px", fontWeight: "bold" }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing who elit.
                        </Card.Text>
                        <Card.Text style={{ textAlign: "justify", fontSize: "13px" }} >
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design
                        </Card.Text>
                        <div className="button_div d-flex justify-content-center">
                            <Button className='col-lg-8' style={{ borderRadius: "15px", color: "black", backgroundColor: "#f2bb07", border: "none", fontSize: "12px", fontWeight: "bold" }}>READ MORE</Button>
                        </div>

                    </Card.Body>
                </Card>

                <Card style={{ width: '16rem', border: "none",backgroundImage: 'url(https://media.istockphoto.com/id/1376036104/vector/fawn-or-beige-or-very-light-brown-pastel-coloured-smudged-scuffed-grunge-horizontal-vector.jpg?s=612x612&w=0&k=20&c=54ey-5cJk5miWXMBaQHmhGdlq9uqI5D7vAlFyig89N8=)' }} className="mx-1 mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }}
                        src='https://media.istockphoto.com/id/1448698225/photo/excited-office-women-giving-five.jpg?s=170667a&w=0&k=20&c=OJcc8P6LclPhwc3sjqoOvwFIZsBo5wLDnjg9tDXqj1k='
                        alt='Green double couch with wooden legs'
                        className="mt-3" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "15px" }}>BY NAME LASTNAME</Card.Title>
                        <Card.Text style={{ textAlign: "justify", fontSize: "13px", fontWeight: "bold" }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing who elit.
                        </Card.Text>
                        <Card.Text style={{ textAlign: "justify", fontSize: "13px" }} >
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design
                        </Card.Text>
                        <div className="button_div d-flex justify-content-center">
                            <Button className='col-lg-8' style={{ borderRadius: "15px", color: "black", backgroundColor: "#f2bb07", border: "none", fontSize: "12px", fontWeight: "bold" }}>READ MORE</Button>
                        </div>

                    </Card.Body>
                </Card>
                <Card style={{ width: '16rem', border: "none",backgroundImage: 'url(https://media.istockphoto.com/id/1376036104/vector/fawn-or-beige-or-very-light-brown-pastel-coloured-smudged-scuffed-grunge-horizontal-vector.jpg?s=612x612&w=0&k=20&c=54ey-5cJk5miWXMBaQHmhGdlq9uqI5D7vAlFyig89N8=)' }} className="mx-1 mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }}
                        src='https://media.istockphoto.com/id/910449906/photo/success-is-a-dual-effort.jpg?s=612x612&w=0&k=20&c=7fj1_WE9e9aSDjhQVEak1ynjI6-1I0kx8zqphWRlB4k='
                        alt='Green double couch with wooden legs'
                        className="mt-3" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "15px" }}>BY NAME LASTNAME</Card.Title>
                        <Card.Text style={{ textAlign: "justify", fontSize: "13px", fontWeight: "bold" }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing who elit.
                        </Card.Text>
                        <Card.Text style={{ textAlign: "justify", fontSize: "13px" }} >
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design
                        </Card.Text>
                        <div className="button_div d-flex justify-content-center">
                            <Button className='col-lg-8' style={{ borderRadius: "15px", color: "black", backgroundColor: "#f2bb07", border: "none", fontSize: "12px", fontWeight: "bold" }}>READ MORE</Button>
                        </div>

                    </Card.Body>
                </Card>


            </div>
        </div>
        </div>
    )
}

export default Blogs