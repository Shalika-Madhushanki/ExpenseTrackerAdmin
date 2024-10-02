import React from "react";
import { Card, Col, Row } from "antd";


interface ResponseDetailsProps {
    icon: JSX.Element;
    code: number;
    responseCount?: number;
    color: string;
}
const ResponseDetails: React.FC<ResponseDetailsProps> = ({ icon, code, responseCount, color }) => {
    const date = new Date();
    const formattedDate = date.toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: undefined // Exclude seconds
    });

    return (
        <Card style={{background : color, color: '#ffffff'}}>

            <Row>
                <Col  span={18}>{icon} { code} Response</Col>
                <Col span={6}><b>{responseCount}</b></Col>
            </Row>
            <Row> Updated :
                {formattedDate}
            </Row>
        </Card>
    );
}

export default ResponseDetails;