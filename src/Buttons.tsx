import Button from './Button'

interface NavItem {
  text: string
  path: string
  onClick?: () => void
}

interface ButtonsProps {
  navItems: NavItem[]
}

const Buttons = ({ navItems }: ButtonsProps) => {
  const allButtons = [Array(8 - navItems.length).fill(null), ...navItems].flat()

  return (
    <>
      <nav className="buttons absolute bottom-[24px] w-full px-7 flex flex-reverse flex-wrap-reverse">
        {allButtons.map((navItem, index) => (
          <Button key={index} navItem={navItem} />
        ))}
      </nav>
    </>
  )
}

export default Buttons
