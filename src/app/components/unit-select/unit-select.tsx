import "./unit-select.css";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeUnitPrecipitation, changeUnitTemperature, changeUnitWindSpeed, precipitationUnitSelector, temperatureUnitSelector, windSpeedUnitSelector } from "../../redux/slices/settingsSlice";
import IconUnits from "../../assets/icons/utility/icon-units.svg";
import IconDropdown from "../../assets/icons/utility/icon-dropdown.svg";
import IconCheckmark from "../../assets/icons/utility/icon-checkmark.svg";

const UnitSelect = () => {
    const temperatureUnit = useSelector(temperatureUnitSelector);
    const windSpeedUnit = useSelector(windSpeedUnitSelector);
    const precipitationUnit = useSelector(precipitationUnitSelector);
    const dispatch = useDispatch();

    const values = [temperatureUnit, windSpeedUnit, precipitationUnit];

    const handleChange = (newValues: typeof values) => {
        const changedValue = newValues.find(val => !values.includes(val));

        if(changedValue === 'celsius' || changedValue === 'fahrenheit')
            dispatch(changeUnitTemperature(changedValue));
        else if(changedValue === 'km/h' || changedValue === 'mph')
            dispatch(changeUnitWindSpeed(changedValue));
        else if(changedValue === 'millimeters' || changedValue === 'inches')
            dispatch(changeUnitPrecipitation(changedValue));
    }

    return (
        <Listbox value={values} onChange={handleChange} multiple>
            <ListboxButton className="select__unit">
                <img src={IconUnits} className="unit__icon" />
                Units
                <img src={IconDropdown} className="unit__icon" />
            </ListboxButton>
            <ListboxOptions anchor="bottom end" className="unit__options">
                <ListboxOption 
                    value="switch"
                    onClick={() => {
                        if(temperatureUnit === 'celsius') {
                            dispatch(changeUnitTemperature('fahrenheit'));
                            dispatch(changeUnitWindSpeed('mph'));
                            dispatch(changeUnitPrecipitation('inches'));
                        }
                        else {
                            dispatch(changeUnitTemperature('celsius'));
                            dispatch(changeUnitWindSpeed('km/h'));
                            dispatch(changeUnitPrecipitation('millimeters'));
                        }
                    }}
                    className="unit__option"
                >
                    {
                        temperatureUnit === 'celsius' ?
                        "Switch to Imperial" : "Switch to Metric"
                    }
                </ListboxOption>
                
                <span className="unit__category">Temperature</span>
                <ListboxOption
                    value="celsius"
                    className="unit__option"
                >
                    {"Celsius"+' (\u00B0C)'}
                    {temperatureUnit === 'celsius' && <img src={IconCheckmark} className="unit__checkmark"/>}
                </ListboxOption>
                <ListboxOption 
                    value="fahrenheit"
                    className="unit__option"
                >
                    {"Fahrenheit"+' (\u00B0F)'}
                    {temperatureUnit === 'fahrenheit' && <img src={IconCheckmark} className="unit__checkmark"/>}
                </ListboxOption>
                <span className="unit__divider"></span>

                <span className="unit__category">Wind Speed</span>
                <ListboxOption 
                    value="km/h"
                    className="unit__option"
                >
                    km/h
                    {windSpeedUnit === 'km/h' && <img src={IconCheckmark} className="unit__checkmark"/>}
                </ListboxOption>
                <ListboxOption 
                    value="mph"
                    className="unit__option"
                >
                    mph
                    {windSpeedUnit === 'mph' && <img src={IconCheckmark} className="unit__checkmark"/>}
                </ListboxOption>
                <span className="unit__divider"></span>

                <span className="unit__category">Precipitation</span>
                <ListboxOption 
                    value="millimeters"
                    className="unit__option"
                >
                    Millimeters (mm)
                    {precipitationUnit === 'millimeters' && <img src={IconCheckmark} className="unit__checkmark"/>}
                </ListboxOption>
                <ListboxOption 
                    value="inches"
                    className="unit__option"
                >
                    Inches (in)
                    {precipitationUnit === 'inches' && <img src={IconCheckmark} className="unit__checkmark"/>}
                </ListboxOption>
            </ListboxOptions>
        </Listbox>
    );
}

export default UnitSelect;