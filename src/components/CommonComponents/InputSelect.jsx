import { InputSelectStyle, Label, Text } from './commonStyles';

const InputSelect = ({
  error,
  helperText,
  label,
  option,
  optionObj,
  placeholderText,
  ...props
}) => {
  return (
    <>
      <Label>
        {label}
        <InputSelectStyle error={error} {...props} defaultValue={'DEFAULT'}>
          <option value='DEFAULT'>{placeholderText}</option>
          {option &&
            option?.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          {optionObj &&
            Object.keys(optionObj).map((key) => (
              <option key={key} value={key}>
                {optionObj[key]}
              </option>
            ))}
        </InputSelectStyle>
        {error && <Text>{helperText}</Text>}
      </Label>
    </>
  );
};

export default InputSelect;
