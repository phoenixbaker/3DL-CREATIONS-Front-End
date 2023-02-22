import React, { useEffect, useRef, useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

import useLogIn from "../../hooks/useLogIn";

export default function AddressInput() {
  const { setAuth, auth, error, setError } = useLogIn();

  const ref = useRef<HTMLInputElement>(null);
  const [border, setBorder] = useState<boolean>();
  const [display, setDisplay] = useState<boolean>(false);

  const { placesService, placePredictions, getPlacePredictions } =
    usePlacesService({
      apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      debounce: 300,
    });

  useEffect(() => {
    if (placePredictions.length)
      placesService?.getDetails({
        placeId: placePredictions[0].place_id,
      });
  }, [placePredictions]);

  return (
    <div className="flex flex-col text-start w-4/5 pt-8">
      <label className="text-xl mb-1 mx-1">
        Address{" "}
        {error.address?.length && (
          <span className="text-red-500 text-sm px-4">{error.address} </span>
        )}{" "}
      </label>
      <input
        ref={ref}
        className={`shadow-md rounded-full p-2 px-4 focus:outline focus:border-none capitalize focus:outline-secondary-blue ${
          error.address
            ? "border border-red-500"
            : border
            ? "border border-green-400"
            : ""
        }`}
        placeholder="Enter Your Address"
        value={auth.address?.description}
        onFocus={() => setDisplay(!!placePredictions.length)}
        onChange={(e) => {
          setDisplay(!!placePredictions.length);
          setError((prev) => ({
            ...prev,
            address: undefined,
          }));
          setAuth((prev) => ({
            ...prev,
            address: undefined,
          }));
          getPlacePredictions({ input: e.target.value });
        }}
        onBlur={() => {
          setBorder(
            auth.address?.types.includes("premise") ||
              auth.address?.types.includes("street_address")
          );
        }}
      />
      <div className="bg-white mt-2 shadow-md rounded-md flex w-full flex-col  font-light max-h-36 overflow-y-scroll">
        {display &&
          placePredictions.map((item, i) => {
            return (
              <button
                key={i}
                className="hover:bg-gray-300 p-4 px-6 w-full text-start"
                onClick={() => {
                  setAuth((prev) => ({
                    ...prev,
                    address: item,
                  }));
                  setBorder(
                    item.types.includes("premise") ||
                      item.types.includes("street_address")
                  );
                  setDisplay(false);
                }}
              >
                {item.description}
              </button>
            );
          })}
      </div>
    </div>
  );
}
