import { useState } from "react";

export function useForm(initialFValues, onValidate) {
  const [formValues, setformValues] = useState(initialFValues);
  const [errors, seterrors] = useState(onValidate);

  const handleInputChange = (eventTarget) => {
    const {required = false, name, value, validation = true, validationType = true} = eventTarget
    if (value) {
      setformValues({
        ...formValues,
        [name]: validation ? value : formValues[name],
      });
      if (validationType) {
        delete errors[`${name}`]
        seterrors({ ...errors })
      } else {
        seterrors({ ...errors, [`${name}`]: `${name.replace(/_/g, " ")} is not Valid` })
      }
    } else {
      setformValues({
        ...formValues,
        [name]: typeof value === "boolean" ? false : "",
      })
      if (required) {
        seterrors({
          ...errors,
          [`${name}`]: `${name.replace(/_/g, " ")} is required`
        })
      } else {
        delete errors[`${name}`]
        seterrors({ ...errors })
      }
    }
  };

  const resetForm = () => {
    setformValues(initialFValues);
    seterrors(onValidate)
  }

  const updateForm = (updatedValues, error) => {
    setformValues(updatedValues);
    seterrors(error)
  }

  const handleError = (name) => {
    delete errors[`${name}`]
    seterrors({ ...errors })
  }

  const handleSubmit = (e, onsubmit) => {
    e.preventDefault()
    if (Object.entries(errors).length === 0) {
      onsubmit()
    } else {
      Object.keys(errors).forEach(res => {
        // if (errors[res]) {
        //   if (Array.isArray(errors[res])) {
        //     if (errors[res].every(error => Object.entries(error).length === 0)) {
        //       onsubmit()
        //     } else {
        //       errors[res].forEach(error => {
        //         Object.keys(error).forEach(errorkeys =>
        //           error[errorkeys] = error[errorkeys] ? error[errorkeys] :
        //             `${(errorkeys.substring(0, errorkeys.length - 5)).replace(/_/g, " ")}is required`)
        //       })
        //     }
        //   }
        // } else {
          errors[res] = `${(res.replace(/_/g, " "))} is required`
        // }
      })
      seterrors({
        ...errors,
      })
    }
  }

  return {
    formValues,
    updateForm,
    errors,
    handleError,
    handleInputChange,
    handleSubmit,
    resetForm
  };
}
