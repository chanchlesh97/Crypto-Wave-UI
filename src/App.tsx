import { Moon, Sun } from 'lucide-react'
import './App.css'
import { Button } from './components/ui/button'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? <Moon /> : <Sun />}
      </Button>
    </>
  )
}

export default App
