import React, { useState } from 'react'
import ContactFrom from './ContactForm'
import { Typography, Icon, Row, Col } from 'antd';

const { Text } = Typography;

export default function Contact(){
        return (
            <>
                <Text>Une question ? Une proposition ? Je vous ecoute !</Text>
                <br/>
                <br/>
                <ContactFrom/>
                <p><Icon type="mail" /> : <a href={"mailto:" + "antoinum@gmail.com"}>antoinum@gmail.com</a></p>
                <p><Icon type="phone" /> : <a href="tel:0041799190157">+41 79 919 01 57</a></p>
                    
                    
            </>
            
        );
}

