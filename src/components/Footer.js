import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { navIcon1, navIcon2, navIcon3, m_logo } from "../assets/img";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={m_logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com" target='_blank'><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://www.facebook.com" target='_blank'><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com" target='_blank'><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}