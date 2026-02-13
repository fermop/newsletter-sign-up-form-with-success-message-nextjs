'use client'
import React, { useState } from 'react'
import Form from '@/components/Form'
import SuccessMessage from '@/components/SuccessMessage'
import Loader from '@/components/Loader'
import { validateEmail } from '@/utils/validations'

export default function Card() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setError(false)
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setError(true)
      return
    }
    
    setLoading(true)
    setSuccess(true)

    await new Promise(resolve => setTimeout(resolve, 1500));

    setLoading(false)
  }

  const dismissMessage = async () => {
    setEmail('')
    setLoading(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSuccess(false)
    setLoading(false)
  }

  return (
    <div className=''>
      {!success &&
        (
          <Form
            email={email}
            error={error}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )
      }

      {loading && 
        (
          <Loader />
        )
      }

      {(success && !loading ) &&
        (
          <SuccessMessage
            email={email}
            dismissMessage={dismissMessage}
          />
      )}
    </div>
  )
}
