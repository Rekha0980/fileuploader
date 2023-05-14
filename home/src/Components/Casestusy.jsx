import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const CaseStudy = () => {



    return (
        <div className='container mt-3' >
            <h2 className='text-initial'>How Much Does</h2>
            <h2 className='text-left'>Business Plan Cost?</h2>
            <p style={{textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, laboriosam enim non neque obcaecati rem praesentium eius recusandae quaerat facilis nobis, tenetur voluptate? Consequatur saepe minus eaque impedit delectus laborum.</p>

            <div className="row d-flex justify-content-center align-items-center">

            <Card style={{ width: '20rem',border:"none"}} className="mx-1 mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }} 
                     src='https://thumbs.dreamstime.com/b/portrait-young-smiling-cheerful-entrepreneur-casual-office-making-phone-call-working-laptop-155845824.jpg'
                     alt='Green double couch with wooden legs'className="mt-3" />
                    
                </Card>
                <Card style={{ width: '20rem', border:"none"}} className="mx-1 mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }} 
                      src='https://thumbs.dreamstime.com/b/happy-businesswoman-sitting-desk-behind-her-laptop-talking-somebody-mobile-phone-working-office-258208773.jpg'
                      alt='Green double couch with wooden legs'
                    className="mt-3" />
                    
                </Card>
               
                <Card style={{ width: '20rem', border:"none"}} className="mx-1 mt-4 card_style">
                    <Card.Img variant="top" style={{ height: "15rem", }}
                       src='https://blog.adobe.com/en/publish/2022/05/06/media_1d10e3b66d6c701779a44c3e281cce3ff091aa884.jpeg?width=750&format=jpeg&optimize=medium'
                       alt='Green double couch with wooden legs'
                    className="mt-3" />
                    
                </Card>


            </div>
        </div>
    )
}

export default CaseStudy