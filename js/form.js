const requiredMsg = 'Заполните все необходимые поля'
const phoneRegExp = /^\+[0-9]{1,4}[0-9]{3,14}$/

const SERVICE_ID = 'service_b9tp2ru';
const TEMPLATE_ID = 'template_ek51xq8';
const USER_ID = 'j-kpXsvTRcviF6iSe';

const notRequiredFields = ['comment'];

const validateForm = form => {
  let isValid = true;

  const fields = Object.entries(form)
    .filter(([field]) => !notRequiredFields.includes(field))
    .reduce((prev, [key, value]) => {
      if (!validator.isEmpty(value)) return {...prev, [key]: [] }

      isValid = false
      return {...prev, [key]: [requiredMsg] };
    }, {})

  if (!validator.isEmail(form.email)) {
    isValid = false
    fields.email.push('Неправильный формат электронной почты')
  }

  if (!validator.matches(form.phone, phoneRegExp)) {
    isValid = false
    fields.phone.push('Телефон должен быть в формате +XXXXXXXXXXX')
  }

  if (form.isSubmitted !== 'on') {
    isValid = false

    fields.isSubmitted = ['Заполните все необходимые поля']
  }

  console.log(form)

  return { isValid, fields }
}

const showErrors = (form, errors) => {
  let firstError = null

  Object.entries(errors).forEach(([key, value]) => {
    const field = form.querySelector(`[name=${key}]`)

    if (!field || !value?.length) return

    field.classList.add('field-error')
    if (!firstError) firstError = value[0]
  })

  return firstError
}

const clearErrors = form => {
  form.querySelectorAll('input, textarea')
    .forEach(field => {
      field.classList.remove('field-error')
    })
}


const setDisabledAllInputs = (form, value = true) => {
  form.querySelectorAll('input, textarea').forEach(input => input.disabled = value)

  form.querySelector('button').disabled = value
}

const clearInputs = form => {
  form.querySelectorAll('input, textarea').forEach(input => input.value = '')

  form.querySelectorAll('input[type=checkbox]').forEach(input => {
    input.checked = false
  })
}

const handleFormSubmit = async event => {
  event.preventDefault()

  const form = event.target;
  const errorMsg = form.querySelector('.error-msg')

  try {
    const formData = Object.fromEntries(new FormData(form).entries());

    clearErrors(form)

    const { isValid, fields } = validateForm(formData)

    if (!isValid) {
      const shownError = showErrors(form, fields)

      errorMsg.textContent = shownError
      errorMsg.style.display = ''

      return console.error(shownError)
    }

    const data = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: USER_ID,
      template_params: formData
    };

    errorMsg.style.display = 'none'

    setDisabledAllInputs(form, true)

    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    clearInputs(form)
    setDisabledAllInputs(form,false)
  } catch (e) {
    errorMsg.style.display = ''
    errorMsg.textContent = 'Что-то пошло не так...'
    console.error(e)
  }
}

document.querySelectorAll('[name=phone]').forEach(input => {
  input.addEventListener('input', (e) => {
    if (!e.target.value.startsWith('+')) {
      e.target.value = '+' + e.target.value.replace(/\+/g, '');
    }

    if (e.target.value.length > 13) {
      e.target.value = e.target.value.slice(0, 13);
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.target.selectionStart === 0 && (e.key === 'Backspace' || e.key === 'Delete')) {
      e.preventDefault();
    }
  });
})

document.querySelectorAll('form input, form textarea').forEach(input => {
  input.addEventListener('input', (e) => {
    e.target.classList.remove('field-error')
  })
})

document.querySelectorAll('form').forEach(item => {
  item.addEventListener('submit', handleFormSubmit);
})
