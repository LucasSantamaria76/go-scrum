import styled from '@emotion/styled';

const SwitchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  button {
    background: transparent;
    border: none;
    margin-top: 2px;
  }
`;

const SwitchBGC = styled.div`
  width: 40px;
  height: 20px;
  position: relative;
  border-radius: 30px;
  background-color: ${({ switchOn }) => (switchOn ? '#CD6155' : '#B3B6B7')};
  transition: all 0.1s ease-in;
  margin-bottom: 16px;
`;
const SwitchSlider = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 2px;
  left: ${({ switchOn }) => (switchOn ? '22px' : '3px')};
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  transition: all 0.2s ease-in;
  outline: none;
`;

const Switch = ({ label, switchOn, setSwitchOn }) => {
  return (
    <>
      <SwitchContainer>
        <SwitchBGC switchOn={switchOn}>
          <SwitchSlider switchOn={switchOn} onClick={() => setSwitchOn(!switchOn)}></SwitchSlider>
        </SwitchBGC>
        <button onClick={() => setSwitchOn(!switchOn)}>{label}</button>
      </SwitchContainer>
    </>
  );
};

export default Switch;
