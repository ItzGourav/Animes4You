import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import "./../../globals.css"

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='max-w-[1440px] mx-auto px-2'>
      <div className='flex flex-col xl:flex-row gap-2 pt-10 pb-14'>
        <div className='flex-1 xl:max-w-[75%]'>
          {children}
        </div>
        <div className='w-full xl:max-w-[28%] min-w-[25%]'>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
