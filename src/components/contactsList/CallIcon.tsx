import React, {FC} from "react";
import { StyledCallIcon } from "./TrashIcon.styled";

const CallIcon: FC<{href: string}>= ({ href }) => {
  return (
    <a href={`tel:${href}`}>
      <StyledCallIcon />
    </a>
  );
}

export default CallIcon;