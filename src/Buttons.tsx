import { Link } from 'react-router'

// TODO: Add button styles

interface NavItem {
  text: string
  path: string
  onClick?: () => void
}

interface ButtonsProps {
  navItems: NavItem[]
}

const Buttons = ({ navItems }: ButtonsProps) => {
  return (
    <>
      <nav className="buttons">
        {navItems.map((navItem, index) => (
          <div className="button flex items-center py-2" key={index}>
            <Link
              to={navItem.path}
              onClick={navItem.onClick}
              className="flex relative bg-[#C1C1C1] w-20 h-10 border-top-[#D9D9D4] rounded"
            />
            <span>{navItem.text}</span>
          </div>
        ))}
      </nav>
    </>
  )
}

export default Buttons
