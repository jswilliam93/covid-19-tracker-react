import React, {useState} from 'react';
import {Form, Input, Button, Alert} from 'antd';
import {addCase} from "../api/CovidApi";
import arrayToSentence from 'array-to-sentence';
import {isEmpty} from 'lodash'

const NewCase = () => {
    const [errors, setErrors] = useState([])
    const [success, setSuccess] = useState(false)
    const [location, setLocation] = useState()

    const getLocation = () => {
        const showPosition = (position) => setLocation({lng: position.coords.longitude, lat: position.coords.latitude})
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            setErrors(['Geolocation is not supported by this browser.'])
        }
    }
    getLocation()


    const onFinish = async values => {
        const response = await addCase({...values, location})
        if (response.problems)
            setErrors(response.problems)
        else {
            setErrors([])
            setSuccess(true)
        }
    };

    return (
        <Form style={{width: '50%', margin: '0 auto'}} onFinish={onFinish}>
            {success && <Alert message="Thank you for submitting" type="success"/>}
            {!isEmpty(errors) && <Alert message={arrayToSentence(errors)} type="error"/>}
            <br/>
            <Form.Item name="name" label="Name" rules={[{required: true}]}>
                <Input disabled={success}/>
            </Form.Item>
            <Form.Item name="temperature" label="Temperature" rules={[{required: true}]}>
                <Input disabled={success}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={success}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default NewCase
