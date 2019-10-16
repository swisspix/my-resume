import React from 'react'
import { Form, Input,SubmitButton} from "@jbuschke/formik-antd";
import {Button, Modal, Icon} from "antd"
import { Formik } from 'formik'
import * as Yup from "yup"
import * as emailjs from 'emailjs-com'

const validationSchema = Yup.object().shape({
    name : Yup.string()
    .min(3, "Votre nom doit avoir plus de 3 lettres !")
    .max(255, "Doit être plus court que 255 caractères.")
    .required("Et votre nom ?"),
    email : Yup.string()
    .email("Votre adresse email doit être valide.")
    .max(255, "Votre adresse email doit être plus courte que 255.")
    .required("Votre adresse email pour vous repondre ?"),
    subject : Yup.string()
    .max(255, "Le sujet doit faire max. 255 char."),
    message : Yup.string()
    .max(500, "max. 500 charactères pour les message")
    .required("Je vous ecoute !")
})

export default function ContactFrom() {
    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 8 },
      };

    return (
        <Formik
                initialValues={{ name: "", email:"", message: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm}) => {
                    setSubmitting(true)
                    let templateParams = {
                        from_name: values.name,
                        from_email: values.email,
                        subject: values.subject,
                        message_html: values.message,
                    }
                    setTimeout(() => {
                        emailjs.send(
                            'gmail',
                            'template_Tw9R4mk1',
                                templateParams,
                            'user_XzdzupV6BnA7nTIKz5ghT'
                            )
                        Modal.success({
                            title: 'Merci pour votre message ! ',
                            content: 'Je vous repondrais dans les plus brefs délais. Meilleures salutations, Antoine Lot',
                            });
                        resetForm()
                        setSubmitting(false)
                    }, 500);
                }}
            >
                {({values, errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting})=> (
                    <Form 
                        onSubmit={handleSubmit}
                        labelAlign='right'>
                        <Form.Item 
                            hasFeedback
                            validateStatus={touched.name && errors.name ? "warning" : ""}
                            help={touched.name && errors.name ? errors.name : ""}>
                            <Input 
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                name="name" 
                                placeholder="Josselin Dupont"
                                onBlur={handleBlur} />
                        </Form.Item>
                        <Form.Item 
                            hasFeedback
                            validateStatus={touched.email && errors.email ? "warning" : ""}
                            help={touched.email && errors.email ? errors.email : ""}>
                            <Input 
                                prefix={<Icon type="inbox" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                name="email" 
                                placeholder="josdup@gmail.com"
                                onBlur={handleBlur} />
                        </Form.Item>
                        <Form.Item >
                            <Input 
                                prefix={<Icon type="folder-open" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                name="subject" 
                                placeholder="Sujet (optionnel)"
                                onBlur={handleBlur} />
                        </Form.Item >
                        <Form.Item 
                            help={touched.email && errors.message ? errors.message : "(Max 500 char)"}>
                            <Input.TextArea 
                                prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                name="message" 
                                placeholder="Votre message ici "
                                onBlur={handleBlur}
                                autosize={{ minRows: 3, maxRows: 6 }} />
                        </Form.Item>
                        <Form.Item>
                            <SubmitButton icon="mail">Envoyer</SubmitButton>
                        </Form.Item>
                    </Form>
                )}
            </Formik>
    )
}
