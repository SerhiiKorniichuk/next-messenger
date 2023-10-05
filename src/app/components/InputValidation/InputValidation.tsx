import { CheckIcon } from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/input'
import { FC, forwardRef } from 'react'

interface InputValidationProps extends InputProps {
  isValid?: boolean
  hideValidationView?: boolean
}

export const InputValidation: FC<InputValidationProps> = forwardRef(
  ({ isValid = false, hideValidationView = false, ...props }, ref) => {
    return (
      <InputGroup>
        <Input {...props} ref={ref} />
        {isValid && !hideValidationView && (
          <InputRightElement>
            <CheckIcon color="green.500" />
          </InputRightElement>
        )}
      </InputGroup>
    )
  },
)

InputValidation.displayName = 'InputValidation'
