import "./day-select.css";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import type { DaySelectProps } from "./types";
import IconDropdown from "../../assets/icons/utility/icon-dropdown.svg";
import IconCheckmark from "../../assets/icons/utility/icon-checkmark.svg";

const DaySelect = (props: DaySelectProps) => {
    const { days, value, onChange, loading, ...rest } = { ...props }

    const formatter = new Intl.DateTimeFormat("en-US", {
        weekday: 'long'
    });

    return (
        <Listbox value={value} onChange={onChange} {...rest}>
            <ListboxButton 
                className={`select__day ${loading ? 'select__day--loading' : ''}`}
                disabled={loading}
            >
                {value && !loading ? formatter.format(new Date(value)) : '---'}
                <img src={IconDropdown} />
            </ListboxButton>
            <ListboxOptions anchor="bottom" className="day__options">
                {days.map(day => (
                    <ListboxOption 
                        key={day} 
                        value={day} 
                        className="day__option"
                    >
                        {formatter.format(new Date(day))}
                        {value === day && <img src={IconCheckmark} className="day__checkmark"/>}
                    </ListboxOption>
                ))}
            </ListboxOptions>
    </Listbox>
    )
}

export default DaySelect;