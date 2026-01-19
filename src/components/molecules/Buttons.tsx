
interface ButtonProps {
 text: string;
 iconPath?: string;
 bgColor: string;
 textColor: string;
}

export const Button = ({text, iconPath, bgColor, textColor}: ButtonProps) => {
  return (
    <button className={`${bgColor} ${textColor} rounded-lg py-2 px-3 text-center border border-gray-300 w-max`}>
      <div className='flex gap-2'>
        {iconPath}
        <span className="inline-block">{text}</span>
      </div>
    </button>
    
  )
}