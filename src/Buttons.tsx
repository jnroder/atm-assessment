import { Link } from 'react-router'

interface NavItem {
  text: string
  path: string
}

interface ButtonsProps {
  navItems: NavItem[]
}

const Buttons = ({ navItems }: ButtonsProps) => {
  return (
    <>
      <nav className="buttons">
        {navItems.map((navItem, index) => (
          <Link key={index} to={navItem.path}>
            {navItem.text}
          </Link>
        ))}
      </nav>
    </>
  )
}

export default Buttons
