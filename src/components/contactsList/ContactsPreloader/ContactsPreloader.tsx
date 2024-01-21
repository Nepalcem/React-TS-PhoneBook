import { LoaderWrapper } from "./ContactsPreloader.styled";
import { Hourglass } from "react-loader-spinner";
import { burgundyRed } from "utils/globalVariables";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Hourglass
        height="40"
        width="40"
        colors={[burgundyRed, "#770012"]}
        ariaLabel="loader"
      />
    </LoaderWrapper>
  );
};
