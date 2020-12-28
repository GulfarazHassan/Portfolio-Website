import React from "react";
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
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>TabeebGhar</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Signin to your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email'></FormInput>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required></FormInput>
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}
