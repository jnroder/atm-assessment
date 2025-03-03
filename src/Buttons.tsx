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
          <Link key={index} to={navItem.path} onClick={navItem.onClick}>
            {navItem.text}
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Buttons
