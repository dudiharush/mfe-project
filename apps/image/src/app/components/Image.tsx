// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useThemeContext } from 'ShellApp/theme';
import styled from 'styled-components';

const ImageContainer = styled.div`
  overflow: scroll;
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`;

export default function Image() {
  const { theme } = useThemeContext();

  return <ImageContainer><StyledImg src='https://hips.hearstapps.com/vidthumb/images/gettyimages-155696335-1619709287.jpg' alt="Logo" /></ImageContainer>;
}
