"use client"
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const BookingChoice = () => {
    const router = useRouter()

    const handleFlash = () => {
        router.push("/booking/flash")
        toast.info("Tu as choisis un flash, remplis le formulaire pour réserver !")
    }
    const handleRegular = () => {
        router.push("/booking/regular")
        toast.info("Tu as choisis un tatouage perso, remplis le formulaire pour réserver et avoir un rendez vous avec Merikos !")
    }
    
  return (
    <>
        <div className='flex flex-col gap-4 py-10'>
        <button onClick={handleFlash} className="bg-neutral-700 w-[60%] shadow-md self-center py-5 transition ease-in-out duration-75 rounded-lg active:scale-95 hover:bg-neutral-600"> Je veux un flash !</button>
        <button onClick={handleRegular} className="bg-neutral-700 w-[60%] shadow-md self-center py-5 transition ease-in-out duration-75 rounded-lg active:scale-95 hover:bg-neutral-600"> Je veux un tatouage perso !</button>
        </div>

    </>
  )
}

export default BookingChoice