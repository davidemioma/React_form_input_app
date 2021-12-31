import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameInput,
    isValid: enteredNameIsValid,
    isInvalid: nameInputIsInvalid,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    reset: resetNameInput,
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

  if (enteredNameIsValid && enteredEmailIsValid) {
    formisValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    const name = nameInput;

    const email = emailInput;

    console.log(name, email);

    resetNameInput();

    resetEmailInput();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameChangeHandler}
          type="text"
          id="name"
          value={nameInput}
          onBlur={nameBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
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

export default SimpleInput;
