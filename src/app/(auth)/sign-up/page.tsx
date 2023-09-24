'use client'

import { DividerWithContent } from '@/components/DividerWithContent/DividerWithContent'
import { InputPassword } from '@/components/InputPassword/InputPassword'
import { InputValidation } from '@/components/InputValidation/InputValidation'
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  })
  .required()

const SignUp = () => {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)

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
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log({ data })
  }

  return (
    <Box width="full">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5}>
          <Input placeholder="First name" {...register('firstName')} />
          <Input placeholder="Last name" {...register('lastName')} />

          <InputValidation
            type="email"
            placeholder="Email"
            isValid={!Boolean(errors['email']?.message) && dirtyFields['email']}
            {...register('email')}
          />

          <InputPassword
            {...register('password')}
            passwordVisibility={showPassword}
            onPasswordVisibilityChange={handlePasswordVisibility}
          />

          <InputPassword
            {...register('confirmPassword')}
            placeholder="Confirm password"
            passwordVisibility={showPassword}
            onPasswordVisibilityChange={handlePasswordVisibility}
            hideIcon
          />

          <Button type="submit" width="full">
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
        Sign In
      </Button>
    </Box>
  )
}

export default SignUp
