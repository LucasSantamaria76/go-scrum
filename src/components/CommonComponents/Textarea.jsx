import { Text, TextareaStyled } from './commonStyles';

export const Textarea = ({ error, helperText, placeholder, ...props }) => {
  return (
    <>
      <TextareaStyled error={error} {...props} placeholder={placeholder} warp='hard' rows='5' />
      {error && <Text>{helperText}</Text>}
    </>
  );
};
