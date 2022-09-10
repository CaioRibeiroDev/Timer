import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { useForm, FormProvider } from 'react-hook-form'
import { CyclesContext } from '../../contexts/CyclesContext'
import { useContext } from 'react'

interface INewCycleFormData {
  task: string
  minutesAmount: number
}

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<INewCycleFormData>({
    // resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: INewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}

// type INewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

// interface

/**
 * function register(name: string) {
 *  return {
 *    onChange: () => void,
 *    onBlur: () => void,
 *    onFocus: () => void
 *  }
 * }
 *
 * dependencia hookform é utilizada para integrar react-hook-form com as lib de validação
 *
 */

// const newCycleFormValidationSchema = zod.object({
//   task: zod.string().min(1, 'Informe a tarefa'),
//   MinutesAmountInput: zod
//     .number()
//     .min(5, 'O intervalo precisa ser de no minimo 5 minutos')
//     .max(60, 'O intervalo precisa ser de no maximo 60 minutos'),
// })
