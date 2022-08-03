import { InputStyled, Label, Text } from './commonStyles';

export const Input = ({ error, helperText, label, type, placeholder, ...props }) => {
  return (
    <>
      <Label>
        {label}
        <InputStyled type={type} error={error} {...props} placeholder={placeholder} />
        {error && <Text>{helperText}</Text>}
      </Label>
    </>
  );
};
