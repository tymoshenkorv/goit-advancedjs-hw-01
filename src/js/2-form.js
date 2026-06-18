console.log('Form');
let formData = {
  email: '',
  message: '',
};

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
};

console.log(refs);

const onFeedbackFormFieldInput = ({ target: formFieldEl }) => {
  try {
    console.log(formFieldEl);
    console.log('input event');
    const formFieldName = formFieldEl.name;
    const formFieldValue = formFieldEl.value;
    formData[formFieldName] = formFieldValue;
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (err) {
    console.log(err);
  }
};
refs.feedbackForm.addEventListener('input', onFeedbackFormFieldInput);

const fillFeedbackFormFields = () => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (formDataFromLS === null) {
      return;
    }

    console.log(formDataFromLS);
    formData = formDataFromLS;

    const formDataFromLSKeys = Object.keys(formDataFromLS);
    console.log(formDataFromLSKeys);
    console.dir(refs.feedbackForm);
    console.log(refs.feedbackForm.elements);

    formDataFromLSKeys.forEach(key => {
      refs.feedbackForm.elements[key].value = formDataFromLS[key];
    });
  } catch (err) {
    console.log(err);
  }
};
fillFeedbackFormFields();

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  console.log('submit event');
  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('Please fill all the fields!');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  refs.feedbackForm.reset();
  formData = {
    email: '',
    message: '',
  };
};
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
