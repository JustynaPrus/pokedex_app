import { ThemeContext } from "./theme";
import { useContext } from "react";
import { Wrapper } from "./App.styles";
import DataComponent from "./components/DataComponent";

const App = () => {
  const [{ theme }] = useContext(ThemeContext);

  return (
    <Wrapper
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <DataComponent />
    </Wrapper>
  );
};

export default App;
