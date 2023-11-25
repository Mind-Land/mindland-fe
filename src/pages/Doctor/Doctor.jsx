import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap"
import '../../style/doctor.css'
import { BsChevronLeft, BsSearch } from "react-icons/bs";
import Consul from "../../assets/img/Consul.png";

const Doctor = () => {
  return (
    <>
      <section className="doctor-section min-vh-100 d-flex align-items-center">
        <Container className="px-4">
          <Row>
            <Col className="d-flex flex-column gap-4 headline-col">
              <div className="d-flex align-items-center">
                <Button variant="info" className="text-light"><BsChevronLeft className="mb-1"/></Button>
                <span className="ms-3">Back to checknow</span>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <h1>Konsultasi gratis bersama profesional</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur tenetur eligendi deleniti saepe magnam officiis commodi at enim tempore aliquid dolor,</p>
                </div>
                <img src={Consul} alt="hero-img" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, velit excepturi? Dolore, totam optio veniam temporibus blanditiis</p>
              </div>
            </Col>
            <Col>
              <InputGroup className="mb-3 " size='md'>
                  <Form.Control
                    placeholder="Cari artiker berdasarkan judul, kategori, topik"
                    aria-label="Cari artiker berdasarkan judul, kategori, topik"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="info" className='text-light' id="button-addon2">
                    <BsSearch className='mb-1'/>
                  </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Doctor