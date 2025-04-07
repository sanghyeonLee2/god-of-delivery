import { forwardRef } from "react";
import { TextareaTag } from "@components/common/TextArea/TextArea.styles";

const Textarea = forwardRef((props, ref) => {
  return <TextareaTag ref={ref} {...props} />;
});

export default Textarea;
