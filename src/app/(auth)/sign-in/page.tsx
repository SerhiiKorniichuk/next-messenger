'use client'

import { DividerWithContent } from '@/components/DividerWithContent/DividerWithContent'
import { InputPassword } from '@/components/InputPassword/InputPassword'
import { InputValidation } from '@/components/InputValidation/InputValidation'
import { SocialButton } from '@/components/SocialButton/SocialButton'
import { Box, Button, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log({ data })
  }

  return (
    <Box width="full">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5}>
          <InputValidation
            type="email"
            placeholder="Email"
            isValid={!Boolean(errors['email']?.message) && dirtyFields['email']}
            {...register('email')}
          />

          <InputPassword {...register('password')} />

          <Button type="submit" width="full">
            <Text fontSize="md">Sign In</Text>
          </Button>
        </VStack>
      </form>

      <DividerWithContent>continue with</DividerWithContent>

      <SimpleGrid columns={2} spacing={5} width="full">
        <SocialButton icon={AiFillGithub} />
        <SocialButton icon={AiOutlineGoogle} />
      </SimpleGrid>

      <DividerWithContent>or</DividerWithContent>

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
