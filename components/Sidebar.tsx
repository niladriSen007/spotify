import {usePathname} from 'next/navigation'

const Sidebar = ({children} : React.ReactNode) => {

  const pathname = usePathname();
  return (
    <div>{children}</div>
  )
}

export default Sidebar