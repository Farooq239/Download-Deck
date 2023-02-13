export const phoneFormat = /^\d{11}$/
export const cnicFormat = /^\d{13}$/

export const emailFormat =

  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const passwordFormat =

  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,24}$/

export const postalCodeFormat = /^\d{2,6}$/

export const phoneVerifyCodeFormat = /^\d{4}$/

export const nameFormat = /^.{1,30}$/

export const zipCodeFormat = /^.{1,10}$/

export const defaultTextFormat = /^.{1,30}$/

export const whiteSpaces = /\s/g

export const inputLength = 15

export const phoneInputLength = 14