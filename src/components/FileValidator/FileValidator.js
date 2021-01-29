import React, {Component} from "react";
import { ValidatorComponent } from 'react-form-validator-core';

class FileValidator extends ValidatorComponent {
  renderValidatorComponent() {
    const { errorMessages, validators, requiredError, validatorListener, value, ...rest } = this.props;
    return (
      <div>
        <input type="file" {...rest}/>
        {this.errorText()}
      </div>
    )
  }
  errorText() {
    const { isValid } = this.state;
    if (isValid) {
      return null;
    }
    return <div style={{ color: "red" }}>{this.getErrorMessage()}</div>;
  }
}
export default FileValidator;