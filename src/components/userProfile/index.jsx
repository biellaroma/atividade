import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import logon from '../../assets/images/x.jpg';

export default function UserProfile() {
    return (
        <Card>
            <Row>
                <Col s={8} m={8} offset="s2 m2">
                    <img src={logon} className="circle responsive-img" />
                </Col>
            </Row>
            <Row className="center-align">
                <h5>Equipe X</h5>
                <p className="grey darken-2 white-text">
                    Analista e Desenvolvedor de Sistemas. Professor de Informática e criador de conteúdo.
                </p>                
            </Row>           
        </Card>
    );
}
