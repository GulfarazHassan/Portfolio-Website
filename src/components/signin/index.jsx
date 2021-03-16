import React, { useEffect, useState } from "react";
import makeToast from "./toast";
import emailjs from "emailjs-com";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./signinElements";
export default function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   makeToast("success", "Email recieved thank you");
  // }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setLoading(true);
    if (name == "" || email === "" || number === "" || message === "") {
      makeToast("warning", "Please fill all fields");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "service_g3mu16p",
        "template_05bcobq",
        e.target,
        "user_3Ma7RZI0D4w1n5iYc2mm6"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
          setLoading(false);
          makeToast(
            "success",
            "Email recieved thank you will contact you soon"
          );
        },
        (error) => {
          setLoading(false);
          console.log("This is erroror :: ", error);
          makeToast("warning", "Server Error");
        }
      );
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Gulfaraz Hassan</Icon>
          <FormContent>
            <Form onSubmit={sendMessage}>
              <FormH1>Send me a message</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                name='name'></FormInput>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='email'></FormInput>
              <FormLabel htmlFor='for'>Contact Number</FormLabel>
              <FormInput
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                name='number'></FormInput>
              <FormLabel htmlFor='for'>Message</FormLabel>
              <FormInput
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name='message'></FormInput>
              <FormButton type='submit' disabled={loading}>
                {loading ? (
                  <Loader
                    type='Puff'
                    color='#FFFFFF'
                    height={30}
                    width={30} //3 secs
                  />
                ) : (
                  "Send Message"
                )}
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}
