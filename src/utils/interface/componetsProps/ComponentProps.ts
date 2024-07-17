import { ReactNode } from "react";

export default interface ComponentProps {
  children?: ReactNode,
  func1?: () => void,
  func2?: () => void,
  func3?: () => void,
  data?: any,
}