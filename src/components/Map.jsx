import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import {getCases} from "../api/CovidApi";
import {Tag} from "antd";

const Case = ({text}) => <Tag color="red">{text}</Tag>;

const Map = () => {
    const [cases, setCases] = useState([])

    useEffect(async () => {
        const result = await getCases()
        setCases(result);
    });

    return (
        <div style={{height: '80vh', width: '100%'}}>
            <GoogleMapReact
                defaultCenter={{
                    lat: 26.8206,
                    lng: 30.8025
                }}
                defaultZoom={2}
            >
                {cases && cases.map((_case) =>
                    <Case
                        key={`${_case.createdAt}${_case.name}`}
                        lat={_case.location.lat}
                        lng={_case.location.lng}
                        text={`${_case.temperature}°C - ${_case.name}`}
                    />)}

            </GoogleMapReact>
        </div>
    )
}

export default Map
