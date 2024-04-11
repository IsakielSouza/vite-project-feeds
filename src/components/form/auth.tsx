import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '../ui/button'
import { Input } from './Input'
type FormValue = {
    email: string
    password: string
}
const siginFormSchema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
})
export function SiginForm(){
    const {register, handleSubmit, formState:{errors},control} = useForm<FormValue>({
        resolver: yupResolver(siginFormSchema), 
        defaultValues:{
            email: '',
            password: '',
        }

    })
    async function handleSignIn({email,password}: FormValue) {
        console.log(email, password)
        }
    return(
        <form onSubmit={handleSubmit(handleSignIn)}>
        <Input
          type="email"
          name="email"
          placeholder="Digite email"
          required
          control={control}
          className="mt-6"
          // disabled={loading}
        />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          required
          control={control}
          className="mt-6"
          // disabled={loading}
        />
        <Button
          className="mt-4 w-full py-3 "
          type="submit"
          disabled={false || !errors}
        >
          {/* {false ? <LoadingSpinner className="mx-auto" /> : ' Sign in'} */}
          Login
        </Button>
      </form>
    )
}