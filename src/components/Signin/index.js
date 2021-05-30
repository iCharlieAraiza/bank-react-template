import React from 'react'
import { Container, Form, FormWrap, FormContent, FormCutton, FormH1, Forminput, FormLabel, Icon, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        dolla
                    </Icon>
                    <FormContent>
                        <Form actions="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <Forminput type='email' required />
                            <FormLabel htmlFor='for'> Password </FormLabel>
                            <Forminput type="password" required/>
                            <FormCutton type='submit'>Continue</FormCutton>
                            <Text>Forgor password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
