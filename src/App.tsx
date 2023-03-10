import React, { useState } from "react"
import { GiLightBulb } from "react-icons/gi"
import { motion } from "framer-motion"

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  // function to toggle darkmode
  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      localStorage.setItem("theme", "dark-mode")
    } else {
      localStorage.setItem("theme", "light-mode")
    }
  }

  let getTheme = (): string => {
    let theme = localStorage.getItem("theme")
    return theme as string
  }

  return (
    <main className={getTheme()}>
      <motion.button
        onClick={toggleDarkMode}
        initial={{ rotate: 180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 8,
        }}
      >
        <GiLightBulb className={!darkMode ? "dark-mode-button" : ""} />
      </motion.button>
      <motion.div animate={{ y: 50 }} transition={{ delay: 0.2 }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae quidem voluptatem quibusdam
          doloremqu.
        </p>
      </motion.div>
    </main>
  )
}

export default App
