import type { ModulesBtnSetProps } from "../../interface"

const ModulesBtnSet = ({text1 = "Cancel", text2 = "Add Category", onCancel}: ModulesBtnSetProps) => {
  return (
     <div className="w-full h-[44px] flex gap-[10px] mt-8">
        <button className="w-[218px] h-[44px] border-2 border-[#E8E8E8] rounded-[4px] text-[16px] text-[#121212] font-medium" onClick={onCancel}>
          {text1}
        </button>
        <button 
          className="w-[218px] h-[44px] bg-[#0D47A1] rounded-[4px] text-[16px] text-white font-medium hover:bg-[#1565C0] transition"
          type="submit"
        >
          {text2}
        </button>
      </div>
  )
}

export default ModulesBtnSet