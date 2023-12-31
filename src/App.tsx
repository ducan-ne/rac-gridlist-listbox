import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Divider } from 'antd'
import ListBox from './ListBox.tsx'
import GridList from './GridList.tsx'
import { RouterProvider } from 'react-aria-components'

function App() {
  return (
    <RouterProvider
      navigate={path => {
        console.log('navigate', path)
      }}
    >
      <div className="flex flex-col gap-2 items-center">
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <Divider />
      <h1>Listbox</h1>
      <ListBox />
      <Divider />
      <h1>GridList</h1>
      <GridList />
    </RouterProvider>
  )
}

export default App
