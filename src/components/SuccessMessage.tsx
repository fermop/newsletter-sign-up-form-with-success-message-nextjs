import Image from 'next/image'
import Button from '@/components/Button'

interface SuccessMessageProps {
  email: string;
  dismissMessage?: () => void;
}

export default function SuccessMessage({ email, dismissMessage}: SuccessMessageProps) {
  return (
    <div className='min-h-dvh lg:max-w-126 lg:min-h-fit lg:max-h-130 flex flex-col justify-between gap-6 px-6 py-10 lg:p-16 text-neutral-blue-700 bg-white lg:rounded-4xl animate-fade-in-up'>
      <section className='flex flex-col gap-6 mt-40 lg:mt-0'>
        <Image 
          src='/images/icon-success.svg'
          alt=''
          width={44}
          height={44}
          className='w-16 h-16'
        />
        
        <h2 className='font-bold text-neutral-blue-800 text-4xl lg:text-5xl'>Thanks for subscribing!</h2>

        <p>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
      </section>

      <Button
        ariaLabel='Dismiss message'
        type='button'
        value='Dismiss Message'
        handleAction={dismissMessage}
      />
    </div>
  )
}
