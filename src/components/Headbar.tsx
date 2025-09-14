interface HeadbarProps{
 firstname: string
 badgeNo:  string
 fullname: string
}

const Headbar = ({ firstname, badgeNo, fullname }: HeadbarProps) => {
  return (
    <section>
       <div className="flex justify-between items-center px-4 py-2">
          <span className="inline-block">Hi, {firstname}</span>
          
           <div className="flex gap-2.5 items-center">
             <div className="relative">
              <img src="assets/si_notifications-line.png" alt="bell-icon" className="w-8"/>
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-md text-[12px] px-1.5 py-0.5">{badgeNo}</span>
             </div>

             <div className="initials-placeholder">AM</div>
             <span className="inline-block">{fullname}</span>
          </div>

       </div>

       <hr />
    </section>
  )
}

export default Headbar