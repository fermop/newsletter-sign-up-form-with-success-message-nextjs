import { describe, it, expect } from "vitest"
import { validateEmail } from "./validations"

describe('validateEmail', () =>  {
  it("should return false if email is empty", () => {
    expect(validateEmail('')).toBe(false)
  })

  it("should return false if at symbol (@) is missing", () => {
    expect(validateEmail('emailgmail.com')).toBe(false)
  })

  it("should return false if the domain is missing", () => {
    expect(validateEmail('email@gmailcom')).toBe(false)
  })

  it("should return false for emails with invalid caracters", () => {
    expect(validateEmail('em ail@gmail.com')).toBe(false)
    expect(validateEmail('em..ail@gmail.com')).toBe(false)
  })

  it("should return true if email is valid", () => {
    expect(validateEmail('email@gmail.com')).toBe(true)
    expect(validateEmail('email.edu@gmail.com')).toBe(true)
  })
})