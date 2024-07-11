import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
    isGuestsInputOpen: boolean
    closeGuestInput: () => void
    openGuestInput: () => void
}

export function DestinationAndDateStep({
    closeGuestInput,
    isGuestsInputOpen,
    openGuestInput,
}: DestinationAndDateStepProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400'/>
              <input disabled={isGuestsInputOpen} type="text" id='cidade' placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" /> 
            </div>
          
            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400'/>
              <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 outline-none w-40"/>
            </div>

            <div className='w-px h-6 bg-zinc-800'></div>
           
            {isGuestsInputOpen ? (

              <Button onClick={closeGuestInput} variant="secondary">
                Alterar local/data 
                <Settings2 />
              </Button>
            ) : (
            
              <Button onClick={openGuestInput}  variant="primary">
                  Continuar 
                  <ArrowRight className='size-5'/>
              </Button>
            )}
          </div>
    )
}