import { IconeContainer, InputContainer, InputText} from './styles'

const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
        {leftIcon ? (<IconeContainer>{leftIcon}</IconeContainer>):null}
        <InputText { ...rest }/>
    </InputContainer>
  )
}

export { Input };
