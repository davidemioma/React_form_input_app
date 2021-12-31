import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameInput,
    isValid: firstNameIsValid,
    isInvalid: firstNameIsInvalid,
    onChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameInput,
    isValid: lastNameIsValid,
    isInvalid: lastNameIsInvalid,
    onChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: enteredEmailIsValid,
    isInvalid: emailInputIsInvalid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formisValid = false;

  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formisValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!formisValid) {
      return;
    }

    const firstName = firstNameInput;

    const lastName = lastNameInput;

    const email = emailInput;

    console.log(firstName, lastName, email);

    resetFirstNameInput();

    resetLastNameInput();

    resetEmailInput();
  };

  const firstNameInputClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstNameInput}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameIsInvalid && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastNameInput}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          type="email"
          id="email"
          value={emailInput}
          onBlur={emailBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email address</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
