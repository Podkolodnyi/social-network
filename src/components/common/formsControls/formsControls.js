import classes from "./formsControls.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${classes.formControl} ${hasError ? classes.error : ""}`}>
      <div>{props.children}</div>
      <div>{hasError && <span>`${meta.error}`</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restprops } = props;
  return (
    <FormControl {...props}>
      <textarea {...restprops} {...input} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restprops } = props;
  return (
    <FormControl {...props}>
      <input {...restprops} {...input} />
    </FormControl>
  );
};
