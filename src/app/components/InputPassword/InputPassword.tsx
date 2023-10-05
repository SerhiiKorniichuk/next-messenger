'use client'

import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/input'
import { Button, Icon } from '@chakra-ui/react'
import { FC, forwardRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface InputPasswordProps extends Omit<InputProps, 'type'> {
  passwordVisibility?: boolean
  onPasswordVisibilityChange?: (value: boolean) => void
  hideIcon?: boolean
}

export const InputPassword: FC<InputPasswordProps> = forwardRef(
  (
    {
      placeholder,
      passwordVisibility,
      onPasswordVisibilityChange,
      hideIcon,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledShowPassword, setUncontrolledShowPassword] =
      useState(false)

    const showPassword = passwordVisibility || uncontrolledShowPassword

    const setShowPassword =
      onPasswordVisibilityChange || setUncontrolledShowPassword

    const handlePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    return (
      <InputGroup>
        <Input
          pr={hideIcon ? '0' : '2.75rem'}
          {...props}
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder ?? 'Password'}
        />
        {!hideIcon && (
          <InputRightElement w="2.75rem" px={2}>
            <Button
              h="1.75rem"
              w="1.75rem"
              size="sm"
              variant="ghost"
              onClick={handlePasswordVisibility}
            >
              <Icon as={showPassword ? AiOutlineEyeInvisible : AiOutlineEye} />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    )
  },
)

InputPassword.displayName = 'InputPassword'
