import React from 'react'
import { Container, Row, Col, Card, Form, Button, Alert, NavLink} from 'react-bootstrap'
import { skillset, projectOne, projectTwo } from '../data'
import BannerImage from '../assets/images/IMG_3040.jpg'
import Resume from '../assets/pfd/Lakshman_Resume.pdf'
import CodeIcon from '../assets/svgs/code.svg'
import PreviewIcon from '../assets/svgs/preview.svg'
import MailIcon from '../assets/svgs/mail.svg'
import Callicon from '../assets/svgs/call.svg'
import TwitterIcon from '../assets/svgs/twitter.svg'
import LinkedinIcon from '../assets/svgs/linkedin.svg'
import InstagramIcon from '../assets/svgs/instagram.svg'


const Body = (props) => {
    const [formMessage, setFormMessage] = React.useState('')

    const {aboutRef, skillsRef, projectsRef, contactRef} = props;


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a2579214-708c-46bc-acae-decde8c0ae03");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            setFormMessage("Details Submission Successfully")
        }else{
            setFormMessage("Detail Submission Failed")
        }
      };

  return (
    <Container>
        <Row ref={aboutRef} className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <section className='d-flex flex-column gap-1'>
                    <p className='fw-bold profile-text'>Hi. I am a</p>
                    <p className='fw-bold profile-text stylish'>frontend developer</p>
                    <p className='fw-bold profile-text'>based in amalapuram</p>
                    <p className='aboutme'>
                    Experienced Frontend Developer adept at crafting responsive and visually appealing web applications using HTML, CSS, and
                    JavaScript. Proficient in React and Nextjs, with a strong eye for design. Collaborative team player committed to staying current with
                    industry trends.
                    </p>
                </section>
            </Col>

            <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <img className='banner-img' src={BannerImage} alt='banner'/>
            </Col>
        </Row>

        <Row ref={skillsRef} className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            {
                skillset?.map((item, index)=>{
                    return(
                        <Col xs={6} sm={6} md={4} lg={3} xl={3} xxl={3} key={index}>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <img className='w-25 h-25' src={item.icon} alt='icon'/>
                            <p className='text-center skill-text'>{item.name}</p>
                        </div>
                        </Col>
                    )
                })
            }
        </Row>

        <Row ref={projectsRef} className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            {
                projectOne?.map((item, index)=>{
                    return(
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} key={index}>
                            <Card className={`w-75 bg-transparent ${index === projectOne.length-1 ? 'up-card' : ''}`}>
                            <a className='text-decoration-none' href={item.preview} target='_blank'>
                                <Card.Img src={item.icon} alt='image'/>
                            </a>
                            <Card.Footer className='d-flex flex-column'>
                                <Card.Text className='fs-3 fw-bold info-text'>{item.name}</Card.Text>
                                <section className='d-flex justify-content-start align-items-start gap-4'>
                                    <a className='text-decoration-none' href={item.code} target='_blank'>
                                    <div className='d-flex justify-content-start align-items-start gap-1'>
                                        <div><img src={CodeIcon} alt='code'/></div>
                                        <Card.Link role='button' className='text-decoration-none pointer-event info-text'>code</Card.Link>  
                                    </div>
                                    </a>

                                    <a className='text-decoration-none' href={item.preview} target='_blank'>
                                    <div className='d-flex justify-content-start align-items-start gap-1'>
                                        <div><img src={PreviewIcon} alt='preview'/></div>
                                        <Card.Link role='button' className='text-decoration-none info-text'>preview</Card.Link>
                                    </div>
                                    </a>
                                </section>
                            </Card.Footer>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>

        <Row className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            {
                projectTwo?.map((item, index)=>{
                    return(
                        <Col className='d-flex justify-content-center align-items-center' xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} key={index}>
                        <Card className={`w-75 h-100 bg-transparent ${index === projectOne.length-1 ? 'up-card' : ''}`}>
                            <Card.Img className='w-100 h-100' src={item.icon} alt='image'/>
                            <Card.Footer className='d-flex flex-column'>
                                <Card.Text className='fs-3 fw-bold info-text'>{item.name}</Card.Text>
                                <section className='d-flex justify-content-start align-items-start gap-4'>
                                    <div className='d-flex justify-content-start align-items-start gap-1'>
                                        <div><img src={CodeIcon} alt='code'/></div>
                                        <Card.Link role='button' className='text-decoration-none info-text'>code</Card.Link>  
                                    </div>

                                    <div className='d-flex justify-content-start align-items-start gap-1'>
                                        <div><img src={PreviewIcon} alt='preview'/></div>
                                        <Card.Link role='button' className='text-decoration-none info-text'>preview</Card.Link>
                                    </div>
                                </section>
                            </Card.Footer>
                        </Card>
                        </Col>
                    )
                })
            }
        </Row>

        <Row ref={contactRef} className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            <Col className='d-flex justify-content-center align-items' xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <p className='fs-2 info-text'>
                        Let's discuss your project, brand, business goals and objectives
                        </p>
                    </Col>

                    <Col className='d-flex flex-column gap-3' xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <section className='d-flex justify-content-start align-items-start gap-2'>
                            <div><img src={MailIcon} alt='icon'/></div>
                            <p className='fs-6 info-text'>laxmankamisetty1@gmail.com</p>
                        </section>

                        <section className='d-flex justify-content-start align-items-start gap-2'>
                            <div><img src={Callicon} alt='icon'/></div>
                            <p className='fs-6 info-text'>+91 7095773657</p>
                        </section>

                        <section className='d-flex justify-content-start align-items-start gap-4'>
                            <NavLink href='https://www.linkedin.com/in/lakshman-kamisetty-774006208/' target='_blank'><img src={LinkedinIcon} alt='icon'/></NavLink>
                            <NavLink href='https://twitter.com/LaxmanKamisetty' target='_blank'><img src={TwitterIcon} alt='icon'/></NavLink>
                            <NavLink href='https://www.instagram.com/lakshmanmurthy_k/' target='_blank'><img src={InstagramIcon} alt='icon'/></NavLink>
                        </section>

                        <section className='d-flex justify-content-center align-items-center'>
                            <a href={Resume} download='Lakshman_Resume'>
                            <Button className='form-button fs-6 p-3 border-0 info-text'>Download Resume</Button>
                            </a>
                        </section>
                    </Col>
                </Row>
            </Col>

            <Col className='d-flex justify-content-center align-items' xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                <Form onSubmit={handleFormSubmit} className='w-100 h-100 p-4'>
                    <Form.Group className='mb-4'>
                        <Form.Control type='text' name='fullname' className='bg-dark text-white p-3 border-0' placeholder='Full name*'/>
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Control type='email' name='email' className='bg-dark text-white p-3 border-0' placeholder='Email address*'/>
                    </Form.Group>
                    
                    <Form.Group className='mb-4'>
                        <Form.Control as='textarea' name='message' className='bg-dark text-white p-3 border-0' placeholder='Your message*'/>
                    </Form.Group>
                    <Button type='submit' className='form-button fs-6 p-3' variant='btn-btn-outline-secondary'>Submit</Button>
                    {formMessage && <Alert className='w-100 mt-2 bg-transparent text-success border border-success' variant={`${formMessage.includes('Successfully') ? 'success' : 'danger'}`}>{formMessage}</Alert>}
                </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Body