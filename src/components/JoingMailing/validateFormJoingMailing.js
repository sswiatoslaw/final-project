
/* eslint-disable no-template-curly-in-string */
const validateFormJoingMailing = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
  /* eslint-disable no-template-curly-in-string */

export default validateFormJoingMailing
