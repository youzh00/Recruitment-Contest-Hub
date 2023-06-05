export default function Question({
  question,
  options,
  idx,
  selectedOptions,
  setSelectedOptions,
}) {
  return (
    <div className="mt-10">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm font-bold text-gray-500">
            Question {idx}
          </span>
        </div>
      </div>
      <fieldset>
        <legend className="text-lg font-medium text-gray-900">
          {question}
        </legend>

        <div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
          {options.map((option, sideIdx) => (
            <div key={sideIdx} className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm">
                <label
                  htmlFor={`side-${option.optionText}`}
                  className="select-none font-medium text-gray-700"
                >
                  {option.optionText}
                </label>
              </div>
              <div className="ml-3 flex h-5 items-center">
                <input
                  id={`side-${option.optionText}`}
                  name={question}
                  type="radio"
                  defaultChecked={false}
                  onChange={(e) => {
                    setSelectedOptions((prev) => {
                      const newSelectedOptions = [...prev];
                      newSelectedOptions[idx - 1] = sideIdx;
                      return newSelectedOptions;
                    });
                  }}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
