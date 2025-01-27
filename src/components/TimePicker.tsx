import React from 'react'

interface TimePickerProps {
  value: string
  onChange: (time: string) => void
  className?: string
}

export const TimePicker: React.FC<TimePickerProps> = ({ value, onChange, className = '' }) => {
  const generateTimeOptions = () => {
    const times = []
    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        const hour = hours.toString().padStart(2, '0')
        const minute = minutes.toString().padStart(2, '0')
        times.push(`${hour}:${minute}`)
      }
    }
    return times
  }

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${className}`}
    >
      {generateTimeOptions().map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
  )
} 