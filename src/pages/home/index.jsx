import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../../components/userProfile';
import Experience from '../../components/experience';
import soitic from '../../assets/images/soitic.jpg';
import soitechLogo from '../../assets/images/soitech_logo.png';

export default function Home() {
    return (
        <Row>
            <Col m="3" s="12">
                <UserProfile />
            </Col>
            <Col m="8" s="12">
                <h5 className="subtitle">Seja bem vindo!</h5>
                <Card>
                    <div>
                        <p><b>Equipe X</b></p>
                        <p>
                        Olá, seja bem-vindo (a) a Empresa X. É um prazer recebê-lo (a) aqui. Sou fundadora da Equipe 
                        e gostaria de agradecer por acessar o nosso site e aproveite a oportunidade de conhecer os nossos serviços.
                        Estabelemos Equipe X para missão de gerar resultados, dentro da ética e legalidade para atender 
                        as expectativas dos Clientes.
        
                        </p>
                        <br />
                        <p><b>Estamos a disposição</b></p>
                        <p>"
                        Nós da equipe X, temos o prazer em ajudar você. Conte-nos sua dúvida que estaremos lhe atendendo em breve. 
                        </p>
                    </div>
                </Card>
                <h5 className="subtitle">Experiences</h5>
                <Experience
                    title=".NET Developer"
                    company="MedSystem S/V"
                    description=".NET Developer Full-Stack | C# | React.js | Vue.js | ASP.NET Core"
                    avatar={soitic}
                />                
                <Experience
                    title="Profissionais de Desenvolvimento Web"
                    company="SOITECH"
                    description="Ensina as seguintes tecnologias: C#, ASP.NET, HTML/CSS/JS, TS, React.js e Vue.js"
                    avatar={soitechLogo}
                />               
            </Col>
        </Row>
    );
}
