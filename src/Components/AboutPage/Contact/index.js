import React, { useState } from 'react'
import ContactFrom from './ContactForm'
import { Typography } from 'antd';

const { Text } = Typography;

export default function Contact(){
        return (
            <>
                <Text>Une question ? Une proposition ? Je vous ecoute !</Text>
                <br/>
                <br/>
                <ContactFrom/> 
            </>
            
        );
}

