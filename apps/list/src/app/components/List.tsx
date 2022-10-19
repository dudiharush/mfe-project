// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useThemeContext } from 'ShellApp/theme';

export default function List() {
  const { theme } = useThemeContext();

  return <div>List.</div>;
}
