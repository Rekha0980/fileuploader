import React from 'react'
import { Box, Card, CardHeader, CardBody, CardFooter, Text, Image, Heading, Stack, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { MdLabel } from 'react-icons/md'
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { AiOutlineRocket } from "react-icons/ai"
import { RiComputerLine } from "react-icons/ri"
import { GiMagnifyingGlass } from "react-icons/gi"
import { CiWallet } from "react-icons/ci"
import { CiDollar } from "react-icons/ci"
import "./services.css"

const Items = () => {
    return (
        <div className='serv'>
            <div className='serv1'>
                <div className='serv2' >
                    <MdLabel color='#f2bb07' size="40px" />
                    <h3>
                        SERVICES
                    </h3></div>
                <h1>Get Absolute <span style={{ color: "#f2bb07", fontWeight: "bold" }}>Professtional Services</span></h1>
                <h1>From our company</h1>
                <div className='servgrid'>
                    <div>

                        <HiOutlineSpeakerphone className='icon' size={"70px"} />

                        <h4 className='servname'>SERVICE NAME</h4>
                        <h4  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quo quaerat, numquam rerum ut  Magni quo quaerat, numquam rerum
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam itaqu</h4>

                    </div>
                    <div>

                        <AiOutlineRocket size={"70px"} className='icon' />

                        <h4 className='servname'>SERVICE NAME</h4>
                        <h4  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quo quaerat, numquam rerum ut  Magni quo quaerat, numquam rerum
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam itaqu</h4>

                    </div>
                    <div>

                        <RiComputerLine size={"70px"} className='icon' />

                        <h4 className='servname' >SERVICE NAME</h4>
                        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quo quaerat, numquam rerum ut  Magni quo quaerat, numquam rerum
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam itaqu</h4>

                    </div>
                    <div>

                        <GiMagnifyingGlass size={"70px"} className='icon' />

                        <h4 className='servname' >SERVICE NAME</h4>
                        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quo quaerat, numquam rerum ut  Magni quo quaerat, numquam rerum
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam itaqu</h4>

                    </div>
                    <div>

                        <CiWallet size={"70px"} className='icon' />

                        <h4 className='servname' >SERVICE NAME</h4>
                        <h4 textAlign={"justify"} fontSize={"13px"} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quo quaerat, numquam rerum ut  Magni quo quaerat, numquam rerum
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam itaqu</h4>

                    </div>
                    <div>

                        <CiDollar size={"70px"} className='icon' />

                        <h4 className='servname' >SERVICE NAME</h4>
                        <h4  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quo quaerat, numquam rerum ut  Magni quo quaerat, numquam rerum
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam itaqu</h4>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Items