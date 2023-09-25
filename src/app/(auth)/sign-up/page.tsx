'use client'

import { DividerWithContent } from '@/components/DividerWithContent/DividerWithContent'
import { InputPassword } from '@/components/InputPassword/InputPassword'
import { InputValidation } from '@/components/InputValidation/InputValidation'
import { Box, Button, Input, Text, useToast, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Name is required field'),
    email: yup.string().email().required('Email is required field'),
    password: yup.string().required('Password is required field'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match'),
  })
  .required()

const SignUp = () => {
  const router = useRouter()
  const toast = useToast()

  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePasswordVisibility = (value: boolean) => {
    setShowPassword(value)
  }

  const goToSignInPage = () => {
    router.push('/sign-in')
  }

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async ({
    name,
    email,
    password,
  }) => {
    setIsLoading(true)
    try {
      await axios
        .post('/api/sign-up', { name, email, password })
        .then(() => {
          reset()
        })
        .finally(() => {
          setIsLoading(false)
        })
      toast({
        position: 'top',
        title: `Account created!`,
        status: 'success',
        isClosable: true,
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          position: 'top',
          title: `${error.response?.data}`,
          status: 'error',
          isClosable: true,
        })
      }
      setIsLoading(false)
    }
  }

  return (
    <Box width="full">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5}>
          <Input
            placeholder="Full name"
            {...register('name')}
            isDisabled={isLoading}
          />

          <InputValidation
            {...register('email')}
            type="email"
            placeholder="Email"
            isValid={!Boolean(errors['email']?.message) && dirtyFields['email']}
            isDisabled={isLoading}
          />

          <InputPassword
            {...register('password')}
            passwordVisibility={showPassword}
            onPasswordVisibilityChange={handlePasswordVisibility}
            isDisabled={isLoading}
          />

          <InputPassword
            {...register('confirmPassword')}
            placeholder="Confirm password"
            passwordVisibility={showPassword}
            onPasswordVisibilityChange={handlePasswordVisibility}
            isDisabled={isLoading}
            hideIcon
          />

          <Button type="submit" width="full" isLoading={isLoading}>
            <Text fontSize="md">Sign Up</Text>
          </Button>
        </VStack>
      </form>

      <DividerWithContent>or</DividerWithContent>

      <Button
        type="button"
        variant="outline"
        width="full"
        size="md"
        onClick={goToSignInPage}
      >
        Go back to login
      </Button>
    </Box>
  )
}

export default SignUp
