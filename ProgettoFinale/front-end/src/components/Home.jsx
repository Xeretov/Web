import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import John_Smith from '../assets/BigThree/John_Smith.jpeg'
import Robert_Williams from '../assets/BigThree/Robert_Williams.jpeg'
import Lisa_Brown from '../assets/BigThree/Lisa_Brown.jpeg'

const employees = [
    {
        name: 'John Smith',
        role: 'CEO',
        bio: 'John is the visionary behind the company. With years of experience in leadership, he ensures the company’s long-term success.',
        img: John_Smith
    },
    {
        name: 'Robert Williams',
        role: 'CTO',
        bio: 'Robert leads the technology team with a focus on innovation and cutting-edge solutions. He loves solving complex technical challenges.',
        img: Robert_Williams
    },
    {
        name: 'Lisa Brown',
        role: 'COO',
        bio: 'Lisa manages day-to-day operations and ensures everything runs smoothly. Her organizational skills keep the team focused and efficient.',
        img: Lisa_Brown
    }
];

const services = [
  {
      title: 'Consulting',
      description: 'We provide top-notch consulting services to guide your business towards success. Our consultants have years of experience in the field.',
      icon: '💼'
  },
  {
      title: 'Development',
      description: 'Our expert development team builds custom software solutions tailored to your business needs. From web to mobile, we have you covered.',
      icon: '🖥️'
  },
  {
      title: 'Marketing',
      description: 'Increase your business visibility with our comprehensive marketing services. From SEO to social media, we have all the tools to help you grow.',
      icon: '📈'
  }
];

const testimonials = [
  {
      name: 'Alice Green',
      position: 'Founder of GreenTech',
      testimonial: 'This company has completely transformed our business! Their strategies and insights were invaluable in taking us to the next level.'
  },
  {
      name: 'Bob White',
      position: 'Director of Marketing at Tech Innovations',
      testimonial: 'The development team worked with us every step of the way, ensuring that we got the perfect solution for our needs. Highly recommended!'
  },
  {
      name: 'Charlie Brown',
      position: 'CEO of Brown Enterprises',
      testimonial: 'A reliable, results-driven team that delivers on promises. The consulting services helped us streamline our operations significantly.'
  }
];

const HomePage = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Welcome to Our Business</h1>
            <Row className="mb-5">
                <Col md={12}>
                    <p className="paragraph-homepage">
                        Our company is a leader in innovative solutions, offering high-quality services to businesses around the world. We focus on driving results, whether you're looking to improve your internal operations, enhance your digital presence, or develop a unique custom solution tailored to your needs. We've helped hundreds of clients reach new heights, and we're here to help you too.
                    </p>
                </Col>
            </Row>
            <Row>
                {employees.map((employee, index) => (
                    <Col key={index} md={4}>
                        <Card>
                            <Card.Img variant="top" src={employee.img} />
                            <Card.Body>
                                <Card.Title>{employee.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{employee.role}</Card.Subtitle>
                                <Card.Text>{employee.bio}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <hr/>
            <Row className="my-5">
                <Col md={12}>
                    <h2 className="text-center mb-4">Our Services</h2>
                </Col>
                {services.map((service, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>{service.icon} {service.title}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className="my-5">
                <Col md={12}>
                    <h2 className="text-center mb-4">What Our Clients Say</h2>
                    <Carousel>
                        {testimonials.map((testimonial, index) => (
                            <Carousel.Item key={index}>
                                <div className="d-flex justify-content-center">
                                    <div className="testimonial-card">
                                        <p className="testimonial-text">"{testimonial.testimonial}"</p>
                                        <h5>- {testimonial.name}, {testimonial.position}</h5>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
            <Row className="my-5 text-center">
                <Col md={12}>
                    <h2>Ready to Take Your Business to the Next Level?</h2>
                    <Button 
                        variant="primary" 
                        size="lg" 
                        as="a" 
                        href="about#contact-us" 
                        className="scroll-to-contact-us">
                        Get Started Now
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
