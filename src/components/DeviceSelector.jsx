import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";

const iphoneModels = [
  "iPhone 8", "iPhone 8 Plus", "iPhone X", "iPhone XR", "iPhone XS", "iPhone XS Max",
  "iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max",
  "iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max",
  "iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max",
  "iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max",
  "iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"
];

export default function DeviceSelector({ selectedModel, setSelectedModel }) {
  const [deviceType, setDeviceType] = useState("iPhone"); // ou "iPad"
  const [customModel, setCustomModel] = useState("");

  const handleDeviceChange = (e) => {
    const type = e.target.value;
    setDeviceType(type);
    setSelectedModel(""); // limpa o modelo anterior
  };

  const handleCustomModelChange = (e) => {
    setCustomModel(e.target.value);
    setSelectedModel(e.target.value);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Qual dispositivo você quer consertar?</h2>

      {/* Seletor de tipo de aparelho */}
      <div className="flex gap-4 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="deviceType"
            value="iPhone"
            checked={deviceType === "iPhone"}
            onChange={handleDeviceChange}
          />
          iPhone
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="deviceType"
            value="iPad"
            checked={deviceType === "iPad"}
            onChange={handleDeviceChange}
          />
          iPad
        </label>
      </div>

      {/* Se iPhone, mostra dropdown */}
      {deviceType === "iPhone" && (
        <Listbox value={selectedModel} onChange={setSelectedModel}>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-pointer rounded-xl bg-white py-3 pl-4 pr-10 text-left shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-base">
              <span className="block truncate">
                {selectedModel || "Escolha o modelo do iPhone"}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {iphoneModels.map((model) => (
                  <Listbox.Option
                    key={model}
                    value={model}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                        >
                          {model}
                        </span>
                        {selected ? (
                          <span className="absolute left-2 inset-y-0 flex items-center text-blue-600">
                            <CheckIcon className="h-5 w-5" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      )}

      {/* Se iPad, mostra campo de texto */}
      {deviceType === "iPad" && (
        <input
          type="text"
          value={customModel}
          onChange={handleCustomModelChange}
          placeholder="Digite o modelo do iPad (ex: iPad 9ª geração)"
          className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-xl bg-white text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      )}
    </div>
  );
}
