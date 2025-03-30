import { forwardRef } from "react";

const Textarea = forwardRef((props, ref) => {
  return <textarea ref={ref} {...props} />;
});

export default Textarea;
