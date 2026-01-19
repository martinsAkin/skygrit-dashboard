interface CardsProps { 
 value: number;
 value_color: string;
 Text: string;
}

export const Cards = ({value, value_color, Text}:CardsProps) => {
  return (
    <section className="bg-gray-200 rounded-lg text-center w-70 py-3">
      <div className="flex items-center gap-1.5 flex-col">
       <span className={`${value_color} text-2xl inline-block`}>
        {value}
       </span>
       <span className="text-[13px] inline-block">
        {Text}
       </span>
      </div>
    </section>
  )
}


interface RefundCardProps {
 value: string;
 value_color: string;
 purpose: string;
 rate: string;
}

export const RefundCard = ({value, value_color, purpose, rate}:RefundCardProps) => {
 return(
  <section className="bg-gray-200 rounded-lg w-70 py-3 pl-4">
      <div className="flex items-left gap-1 flex-col text-gray-600">
       <span className={`${value_color} text-2xl inline-block`}>
        {value}
       </span>
       <span className="text-[13px] inline-block">
        {purpose}
       </span>
       <span className="text-[13px] inline-block">
        {rate} of total
       </span>
      </div>
    </section>
 )
}