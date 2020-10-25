import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/core";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./styles.module.css";

interface IsValidated {
  fullName: boolean;
  phoneOrEmail: boolean;
  password: boolean;
  passwordConfirm: boolean;
}

interface FormFields {
  fullName: string;
  phoneOrEmail: string;
  password: string;
  passwordConfirm: string;
}

const signup: React.FC = () => {
  const [isInvalid, setIsValid] = useState<IsValidated>({
    fullName: false,
    phoneOrEmail: false,
    password: false,
    passwordConfirm: false,
  });
  const [formFields, setFormFields] = useState<FormFields>({
    fullName: "",
    phoneOrEmail: "",
    password: "",
    passwordConfirm: "",
  });

  const handleEdit = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    const validate = isInvalid;

    if (value.trim() === "") validate[name] = true;
    else validate[name] = false;

    setFormFields({
      ...formFields,
      [name]: value,
    });
    setIsValid(validate);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validate = isInvalid;
    let invalid = false;
    for (let field in formFields) {
      if (formFields[field].trim() === "") {
        invalid = true;
        validate[field] = true;
      }
    }
    if (invalid) {
      setIsValid(validate);
      return;
    }
    const { floor, random } = Math;
    const user = JSON.stringify({
      id: floor(random() * 100 + 1),
      ...formFields,
    });
    sessionStorage.setItem("user", user);
    window.location.replace("/")

  };
  return (
    <Flex
      height="100vh"
      width="100vw"
      className={styles.container}
      justifyContent="center"
    >
      <form
        onSubmit={handleSubmit}
        style={{
          height: "100%",
          width: "27%",
          paddingTop: "8rem",
          backgroundColor: "white",
        }}
      >
        <Heading
          as="h6"
          fontSize="1.5rem"
          fontFamily="Roboto"
          marginBottom="2rem"
          textAlign="center"
          color="gray.900"
        >
          Sign Up
        </Heading>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <FormControl width="90%" margin="1rem" isInvalid={isInvalid.fullName}>
            <Input
              name="fullName"
              value={formFields.fullName}
              onChange={handleEdit}
              textAlign="center"
              backgroundColor="gray.300"
              color="gray.900"
              placeholder="Full name"
              _placeholder={{ color: "gray.600" }}
            />
            <FormErrorMessage>Your full name is required</FormErrorMessage>
          </FormControl>
          <FormControl
            width="90%"
            margin="1rem"
            isInvalid={isInvalid.phoneOrEmail}
          >
            <Input
              name="phoneOrEmail"
              value={formFields.phoneOrEmail}
              onChange={handleEdit}
              textAlign="center"
              backgroundColor="gray.300"
              color="gray.900"
              placeholder="Phone number or e-mail"
              _placeholder={{ color: "gray.600" }}
            />
            <FormErrorMessage>
              Your phone number, or email, is required
            </FormErrorMessage>
          </FormControl>
          <FormControl width="90%" margin="1rem" isInvalid={isInvalid.password}>
            <Input
              name="password"
              type="password"
              value={formFields.password}
              onChange={handleEdit}
              textAlign="center"
              backgroundColor="gray.300"
              color="gray.900"
              placeholder="Password"
              _placeholder={{ color: "gray.600" }}
            />
            <FormErrorMessage>
              A password for your account is required
            </FormErrorMessage>
          </FormControl>
          <FormControl
            width="90%"
            margin="1rem"
            isInvalid={isInvalid.passwordConfirm}
          >
            <Input
              name="passwordConfirm"
              type="password"
              value={formFields.passwordConfirm}
              onChange={handleEdit}
              textAlign="center"
              backgroundColor="gray.300"
              color="gray.900"
              placeholder="Confirm password"
              _placeholder={{ color: "gray.600" }}
            />
            <FormErrorMessage>You must confirm your password</FormErrorMessage>
          </FormControl>
        </Flex>
        <Flex
          marginTop="4rem"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            type="submit"
            width="90%"
            height="2rem"
            marginBottom="1.5rem"
            borderRadius="2rem"
            backgroundColor="teal.300"
            color="gray.900"
            _hover={{ backgroundColor: "teal.400" }}
          >
            Sign Up
          </Button>
          <Text>
            Already have an account?{" "}
            <Link color="blue.400" fontWeight="700" href="/" >
              Log In
            </Link>
          </Text>
        </Flex>
      </form>
    </Flex>
  );
};

export default signup;
