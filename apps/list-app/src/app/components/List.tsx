// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useThemeContext } from 'MainApp/theme';
import styled from 'styled-components';

type ListProps = {
  list: string[];
};

const StyledList = styled.ul`
  li {
    list-style-type: circle;
  }
`;
export default function List(props: ListProps) {
  const { theme } = useThemeContext();

  return (
    <div>
      <StyledList>
        {props.list.map((item) => (
          <li>{item}</li>
        ))}
      </StyledList>
    </div>
  );
}
