import styled from "styled-components";
import { spacing, Breakpoints } from "../../utils/spacing.util";

export const GenericContainer = styled("section")`
  max-width: ${spacing(60)}px;
  width: 100%;
  margin: ${spacing(10)}px auto 0 auto;
  padding: 0;

  @media (min-width: ${Breakpoints.Mobile}px) {
    margin-top: ${spacing(17)}px;
  }
`;
