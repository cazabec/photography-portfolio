import React from 'react'
import { Textarea, Input, Label } from 'theme-ui'

const LabeledInput = ({ as = Input, label, ...props }) => {
  const name = label.toLowerCase()
  const Component = as
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Component name={name} id={name} {...props} />
    </>
  )
}

const FormInput = ({ ...props }) => (
  <>
    <LabeledInput
      label='Nom'
      type='text'
      required
      placeholder='Entrez votre nom'
      {...props}
    />
    <LabeledInput
      label='Email'
      type='email'
      required
      placeholder='Entrez votre email'
      {...props}
    />
    <LabeledInput
      label='Message'
      as={Textarea}
      required
      minLength={10}
      rows={5}
      placeholder='Laissez votre message ici'
      {...props}
    />
  </>
)

export default FormInput
