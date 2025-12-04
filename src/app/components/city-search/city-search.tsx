import "./city-search.css";
import { useEffect, useRef, useState } from "react";
import getGeocodingData from "../../api/get-geocoding-data/get-geocoding-data";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import type { GeocodingData } from "./types";
import { useDispatch } from "react-redux";
import { changeGeolocationCoordinates, changeGeolocationName } from "../../redux/slices/geolocationSlice";
import IconSearch from "../../assets/icons/utility/icon-search.svg";

const CitySearch = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [searchResults, setSearchResults] = useState<GeocodingData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const comboboxRef = useRef<null|HTMLButtonElement>(null);
    const dispatch = useDispatch();

    const fetchCities = async () => {
        try {
            setLoading(true);
            const response = await getGeocodingData({ name: searchText.trim() });
            const data = response.results ?? [];
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSearchResults(data);
        } catch (e: unknown) {
        } finally {
            setLoading(false);
        }
    }

    // This ensures that options are only open when needed
    useEffect(() => {
        comboboxRef.current?.click();
    }, [searchResults, searchText]);

    return (
        <Combobox 
            immediate
            as='div'
            onChange={(city: GeocodingData|null) => {
                if(city) {
                    dispatch(changeGeolocationName(city.name + ", " + city.country));
                    dispatch(changeGeolocationCoordinates({ latitude: city.latitude, longitude: city.longitude }));
                }
            }}
            onKeyDown={(e) => {
                if(!loading && searchText && e.key === 'Enter')
                    fetchCities();
            }}
            className="search__container"
        >
            <div className="search__wrapper">
                <img src={IconSearch} className="search__icon" />
                <ComboboxInput
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search for a place..."
                    className="search__input"
                />
            </div>
            {
                searchText &&
                <ComboboxOptions 
                    anchor="bottom"
                    className="search__options"
                >
                    {searchResults.map((city) => (
                        <ComboboxOption
                            key={city.id}
                            value={city}
                            className="search__option"
                        >
                            {city.name + (city.admin1 ? ', '+city.admin1 : '') + ', '+city.country}
                        </ComboboxOption>
                    ))}
                    {
                        searchResults.length === 0 &&
                        <div
                            className="search__option search__option--noresult"
                        >
                            No matching results
                        </div>
                    }
                </ComboboxOptions>
            }
            <ComboboxButton ref={comboboxRef} hidden></ComboboxButton>
            <button
                type="button"
                title='Search'
                onClick={fetchCities}
                disabled={loading || !searchText}
                className="search__button"
            >
                Search
            </button>
        </Combobox>
    );
}

export default CitySearch;