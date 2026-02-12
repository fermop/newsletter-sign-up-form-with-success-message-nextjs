import Image from 'next/image'
import Button from '@/components/Button'

export default function Form(props) {
  const { email, error, handleChange, handleSubmit } = props

  return (
    <div className='min-h-dvh w-screen lg:max-w-233 lg:min-h-fit lg:max-h-160 flex flex-col justify-between bg-white rounded-4xl lg:flex lg:flex-row-reverse lg:p-6 lg:pl-16 lg:gap-16 animate-fade-in-up'>
      <section>
        <Image
          src='/images/illustration-sign-up-mobile.svg'
          alt=''
          width={44}
          height={44}
          className="w-full h-[40%] md:hidden"
        />

        <Image
          src='/images/illustration-sign-up-tablet.svg'
          alt=''
          width={44}
          height={44}
          className="w-full h-[40%] hidden md:block lg:hidden"
        />

        <Image
          src='/images/illustration-sign-up-desktop.svg'
          alt=''
          width={44}
          height={44}
          className="w-full h-full hidden lg:block"
        />
      </section>

      <section className='lg:max-w-94 flex flex-col gap-6 px-6 lg:px-0 py-10 lg:py-18 text-neutral-blue-700'>
        <h2 className='font-bold text-neutral-blue-800 text-3xl lg:text-5xl'>Stay updated!</h2>

        <p className='text-base'>Join 60,000+ product managers receiving monthly updates on:</p>      

        <ul className='grid gap-2 mb-4'>
          <li className='flex gap-4'>
            <Image
              src='/images/icon-list.svg'
              alt=''
              width={44}
              height={44}
              className='w-6 h-6'
            />

            <p>Product discovery and building what matters</p>
          </li>
          <li className='flex gap-4'>
            <Image
              src='/images/icon-list.svg'
              alt=''
              width={44}
              height={44}
              className='w-6 h-6'
            />

            <p>Measuring to ensure updates are a success</p>
          </li>
          <li className='flex gap-4'>
            <Image
              src='/images/icon-list.svg'
              alt=''
              width={44}
              height={44}
              className='w-6 h-6'
            />

            <p>And much more!</p>
          </li>
        </ul>

        <form 
          className='grid gap-6'
          noValidate
        >
          <div className='relative grid gap-2'>
            <label htmlFor="email" className='text-sm font-bold cursor-pointer'>Email address</label>
            <input 
              id='email'
              type='email'
              inputMode='email'
              placeholder='email@company.com'
              className={`border border-neutral-grey rounded-lg px-6 py-4 outline-0 ${error ? 'focus:outline-primary-red border-primary-red bg-red-100 text-red-500 animate-shake' : 'focus:outline-1 outline-neutral-blue-800'}`}
              value={email}
              onChange={handleChange()}
            />

            {error &&
              (<p className='absolute top-0 right-0 font-bold text-sm text-primary-red animate-shake'>Valid email required</p>)
            }
          </div>

          <Button
            ariaLabel='Submit form'
            type='submit'
            value='Subscribe to monthly newsletter'
            handleAction={handleSubmit}
          />
        </form>
      </section>
    </div>
  )
}
