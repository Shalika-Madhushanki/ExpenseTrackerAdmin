import React from "react";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import { Button, Col, Divider, Row} from "antd";

const ListBlock = ()=>{

    return (
        <>
        <Row >
            <Col style={{ textAlign: 'left' }} span={6}>HTTP Traces</Col>
            <Col style={{ textAlign: 'right' }} span={6} offset={12}><Button>Export to excel</Button></Col>
        </Row>
        <Divider />
        <ListHeader></ListHeader>
        <Divider />
        <ListItem />
        <Divider style={{ color: 'blue', margin: '20px 0' }} />
        <ListItem />
        </>
    );
}

export default ListBlock;