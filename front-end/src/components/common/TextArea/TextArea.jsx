import { forwardRef } from "react";

const Textarea = forwardRef((props, ref) => {
  return <textarea ref={ref} {...props} style={{ marginTop: "1rem" }} />;
});

export default Textarea;
