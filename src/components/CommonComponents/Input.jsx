import { InputStyled, Label, Text } from './commonStyles';

export const Input = ({
  error,
  handleDoubleClick,
  helperText,
  label,
  type,
  placeholder,
  ...props
}) => {
  return (
    <>
      <Label>
        {label}
        <InputStyled
          type={type}
          error={error}
          {...props}
          placeholder={placeholder}
          onDoubleClick={handleDoubleClick}
        />
        {error && <Text>{helperText}</Text>}
      </Label>
    </>
  );
};
