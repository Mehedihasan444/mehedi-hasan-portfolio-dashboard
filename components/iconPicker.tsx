// First, import the icon library at the top
import * as Fa from 'react-icons/fa'
import { useState } from 'react'
import { Input } from './ui/input'

interface IconPickerProps {
    selectedIcon: string
    onSelect: (icon: string) => void
}
// Add this component above your main form component
const IconPicker = ({ selectedIcon, onSelect }: IconPickerProps) => {
  const [search, setSearch] = useState('')
  
  const icons = Object.entries(Fa)
    .filter(([name]) => name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 20) // Limit displayed icons for performance

  return (
    <div className="space-y-2">
      <Input
        type="text"
        placeholder="Search icons..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-8 gap-2 p-2 border rounded-md max-h-[200px] overflow-y-auto">
        {icons.map(([name, Icon]) => (
          <button
            key={name}
            className={`p-2 rounded hover:bg-gray-100 ${
              selectedIcon === name ? 'bg-gray-200' : ''
            }`}
            onClick={() => onSelect(name)}
            type="button"
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  )
}


export default IconPicker