import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

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

interface INewCycleFormData {
  task: string
  minutesAmount: number
}

// type INewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface

export function Home() {
  const [] = useState()

  const { register, handleSubmit, watch, reset } = useForm<INewCycleFormData>({
    // resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: INewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestions"
            placeholder="De um nome para o seu projeto"
            {...register('task')} // pega o que foi retornado e acopla no input
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
