import { Link } from 'react-router'

interface NavItem {
  text: string
  path: string
  onClick?: () => void
}

interface ButtonProps {
  navItem: NavItem | null
}

const Button = ({ navItem }: ButtonProps) => {
  return (
    <div className="button flex items-center py-2">
      <Link
        to={navItem ? navItem.path : '#'}
        onClick={navItem ? navItem.onClick : () => {}}
        className="flex relative bg-[#C1C1C1] w-20 h-10 border-top-[#D9D9D4] rounded"
      />
      {/* Gray line */}
      <span className="w-6 h-[6px] bg-[#9B9B9B]" />
      {navItem ? (
        <>
          {/* White line */}
          <span className="w-[26px] h-[6px] mx-[10px] bg-[#fff]" />
          {/* Button text */}
          <span className="text-lg text-nowrap">{navItem.text}</span>
        </>
      ) : null}
    </div>
  )
}

export default Button
