import { InputContainer } from "./styles";

function Input(props) {
  return (
    <InputContainer>
      <input value={props.value} onChange={props.onChange} />
    </InputContainer>
  );
}

export default Input;
