import * as React from "react"
import DatePicker from "react-datepicker"
import type { ReactDatePickerProps } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

interface CalendarProps extends Omit<ReactDatePickerProps, 'onChange'> {
  selected: Date | null
  onChange: (date: Date | null) => void
  className?: string
}

const Calendar = React.forwardRef<DatePicker, CalendarProps>(
  ({ selected, onChange, className, ...props }, ref) => {
    return (
      <DatePicker
        selected={selected}
        onChange={(date: Date | null, event: React.SyntheticEvent<any> | undefined) => {
          onChange(date)
        }}
        inline
        className={className}
        {...props}
      />
    )
  }
)
Calendar.displayName = "Calendar"

export { Calendar, type CalendarProps }