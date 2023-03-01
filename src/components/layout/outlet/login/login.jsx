import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../../common/formsControls/formsControls";
import { required } from "../../../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import classes from "../../../common/formsControls/formsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {props.error && (
          <div className={classes.formSummaryError}>{props.error}</div>
        )}
        <Field
          component={Input}
          name={"email"}
          placeholder={"email"}
          validate={required}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"password"}
          placeholder={"password"}
          validate={required}
          type={"password"}
        />
      </div>
      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />
        remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = React.memo((props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
});
const mapStateToProps = (state) => {
  return { isAuth: state.auth.isAuth, loginError: state.auth.loginError };
};
export default connect(mapStateToProps, { login })(Login);
