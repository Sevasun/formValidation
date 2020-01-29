document.addEventListener('DOMContentLoaded', () => {
  formValidation({
    formClass: 'form',
    errorClass: 'input-error'
  });
});

function formValidation(options) {
  this.forms = [...document.getElementsByClassName(options.formClass)];
  this.errorClass = options.errorClass;

  let regEmail = '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$';

  this.forms.forEach((form) => {
    let inputs = [...form.getElementsByTagName('input')];
    let requiredInputs = inputs.filter((input) => input.hasAttribute('required'));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      validate(requiredInputs);
    });
  });

  function validate(items) {
    items.forEach((el) => {
      if (!el.value.match(regEmail)) {
        setError();
      }
    });
  };

  function setError() {
    console.log(this);
  }

};


