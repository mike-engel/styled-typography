import styled from "styled-components";
import { spacing } from "../../utils/spacing.util";
import { getThemeProp } from "../../utils/styles.util";
import { Text } from "styled-typography";
import { light, pSBC } from "./color.component";

export const Callout = styled("div")`
  padding: ${spacing(2)}px;
  background: ${getThemeProp("highlight")};
  margin: ${spacing(2)}px 0;
  border-left: ${spacing(0.75)}px solid ${pSBC(-0.2, light)};

  ul {
    margin: 0;
  }

  ${Text} {
    margin: 0;

    & + & {
      margin-top: ${spacing(2)}px;
    }
  }
`;
