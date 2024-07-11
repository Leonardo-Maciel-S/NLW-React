import { ArrowRight, UserRoundPlus} from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './invite-guest-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestStep } from './steps/invite-guest-step'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)


  const [emailsToInvite, setEmailsToInvite] = useState([
    'leonardo@gmail.com',
    'teste@gmail.com'
  ])
  
  function openGuestInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestInput() {
    setIsGuestsInputOpen(false)
  }

  function openGuestModal() {
    setIsGuestsModalOpen(true)
  }
  
  function closeGuestModal() {
    setIsGuestsModalOpen(false)
  }

  
  function openConformTripModal() {
    setIsConfirmTripModalOpen(true)
  }
  
  function closeConformTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    navigate('/trips/123')
  }


  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center  space-y-10">
        <div  className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er"/>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'> 
          <DestinationAndDateStep
            closeGuestInput={closeGuestInput}
            isGuestsInputOpen={isGuestsInputOpen}
            openGuestInput={openGuestInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestStep
              emailsToInvite={emailsToInvite}
              openConformTripModal={openConformTripModal}
              openGuestModal={openGuestModal}
            /> 
          )}

        </div>
          <p className=" text-sm text-zinc-500 ">
            Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
            com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
          </p>
      </div>


      {isGuestModalOpen && (
        <InviteGuestModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestModal={closeGuestModal}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      { isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConformTripModal={closeConformTripModal}
          createTrip={createTrip}/>
      )}
      
      
    </div>
    
    
  )
}