'use client'

import { DividerWithContent } from '@/app/components/DividerWithContent/DividerWithContent'
import { InputPassword } from '@/app/components/InputPassword/InputPassword'
import { InputValidation } from '@/app/components/InputValidation/InputValidation'
import { SocialButton } from '@/app/components/SocialButton/SocialButton'
import {
  Box,
  Button,
  SimpleGrid,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai'
import * as yup from 'yup'

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required()

const SignIn = () => {
  const router = useRouter()
  const toast = useToast()

  const [isLoading, setIsLoading] = useState(false)

  const goToSignUpPage = () => {
    router.push('/sign-up')
  }

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FieldValues> = async ({ email, password }) => {
    setIsLoading(true)
    try {
      await signIn('credentials', { email, password, redirect: false })
        .then((response) => {
          if (response?.error) {
            toast({
              title: response?.error,
              status: 'error',
            })
          }
        })
        .finally(() => {
          setIsLoading(false)
        })
    } catch (error) {
      console.error(error)
      toast({
        title: `Something went wrong with credential sign in!`,
        status: 'error',
      })
      setIsLoading(false)
    }
  }

  const socialSignInAction = async (name: 'github' | 'google') => {
    setIsLoading(true)
    try {
      await signIn(name, { redirect: false, callbackUrl: '/sign-in' })
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      toast({
        title: `Something went wrong with ${name} sign in!`,
        status: 'error',
      })
      setIsLoading(false)
    }
  }

  return (
    <Box width="full">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5}>
          <InputValidation
            {...register('email')}
            type="email"
            placeholder="Email"
            isValid={!Boolean(errors['email']?.message) && dirtyFields['email']}
            isDisabled={isLoading}
          />

          <InputPassword {...register('password')} isDisabled={isLoading} />

          <Button type="submit" width="full" isLoading={isLoading}>
            <Text fontSize="md">Sign In</Text>
          </Button>
        </VStack>
      </form>

      <DividerWithContent>continue with</DividerWithContent>

      <SimpleGrid columns={2} spacing={5} width="full">
        <SocialButton
          icon={AiFillGithub}
          onClick={() => socialSignInAction('github')}
        />
        <SocialButton
          icon={AiOutlineGoogle}
          onClick={() => socialSignInAction('google')}
        />
      </SimpleGrid>

      <DividerWithContent>Don`t have an account yet?</DividerWithContent>

      <Button
        type="button"
        variant="outline"
        width="full"
        size="md"
        onClick={goToSignUpPage}
      >
        Sign Up
      </Button>
    </Box>
  )
}

export default SignIn
