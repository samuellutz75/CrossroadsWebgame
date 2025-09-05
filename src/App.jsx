import { useState } from "react";
import puzzles from "./puzzles";

export default function App() {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [solvedCategories, setSolvedCategories] = useState([]);
  const [disabledTerms, setDisabledTerms] = useState([]);
  const [unifierGuess, setUnifierGuess] = useState("");
  const [unifierSolved, setUnifierSolved] = useState(false);

  const puzzle = puzzles[currentPuzzleIndex];
  const allTerms = puzzle?.categories
    ? puzzle.categories.flatMap((c) => c.terms).sort()
    : [];

  function toggleSelect(term) {
    if (disabledTerms.includes(term)) return;
    if (selected.includes(term)) {
      setSelected(selected.filter((t) => t !== term));
    } else if (selected.length < 3) {
      setSelected([...selected, term]);
    }
  }

  function handleSubmit() {
    if (!puzzle || selected.length !== 3) return;

    const match = puzzle.categories.find(
      (cat) => cat.terms.every((t) => selected.includes(t))
    );

    if (match && !solvedCategories.includes(match.name)) {
      setSolvedCategories([...solvedCategories, match.name]);
      setDisabledTerms([...disabledTerms, ...match.terms]);
    }

    setSelected([]);
  }

  function handleUnifierSubmit(e) {
    e.preventDefault();
    if (
      puzzle &&
      unifierGuess.trim().toLowerCase() === puzzle.unifier.toLowerCase()
    ) {
      setUnifierSolved(true);
    }
  }

  function resetPuzzle(index) {
    setCurrentPuzzleIndex(index);
    setSelected([]);
    setSolvedCategories([]);
    setDisabledTerms([]);
    setUnifierGuess("");
    setUnifierSolved(false);
  }

  if (!puzzle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading puzzle…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      {/* Responsive container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Section 1: Navigator + Unifier + Grid */}
        <div className="flex-1 space-y-4">
          {/* Puzzle Navigator */}
          <div className="flex items-center justify-between bg-white p-2 rounded shadow">
            <button
              onClick={() => resetPuzzle(currentPuzzleIndex - 1)}
              disabled={currentPuzzleIndex === 0}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Puzzle {currentPuzzleIndex + 1} of {puzzles.length}
            </span>
             {/* Jump-to box */}
            <input
              type="number"
              min="1"
              max={puzzles.length}
              placeholder="Search Puzzle by Number"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const num = parseInt(e.target.value, 10);
                  if (num >= 1 && num <= puzzles.length) {
                    resetPuzzle(num - 1);
                    e.target.value = "";
                  }
                }
              }}
              className="w-60 border px-2 py-1 rounded text-center"
            />
            <button
              onClick={() => resetPuzzle(currentPuzzleIndex + 1)}
              disabled={currentPuzzleIndex === puzzles.length - 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {/* Unifier input */}
          <form
            onSubmit={handleUnifierSubmit}
            className="bg-white p-3 rounded shadow"
          >
            <label className="block mb-2 font-semibold">Unifier:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={unifierGuess}
                onChange={(e) => setUnifierGuess(e.target.value)}
                placeholder="Enter unifier..."
                className="flex-1 border px-3 py-2 rounded"
                disabled={unifierSolved}
              />
              <button
                type="submit"
                disabled={unifierSolved}
                className="px-3 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Submit
              </button>
            </div>
            {unifierSolved && (
              <p className="mt-2 text-green-600 font-bold">
                Correct! The unifier is {puzzle.unifier}.
              </p>
            )}
          </form>

          {/* 3×4 Button Grid */}
          <div className="bg-white p-3 rounded shadow">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {allTerms.map((term) => {
                const isSelected = selected.includes(term);
                const isDisabled = disabledTerms.includes(term);
                return (
                  <button
                    key={term}
                    onClick={() => toggleSelect(term)}
                    disabled={isDisabled}
                    className={`h-20 rounded shadow text-center flex items-center justify-center border 
                      ${
                        isDisabled
                          ? "bg-gray-300 text-gray-500"
                          : isSelected
                          ? "bg-blue-400 text-white"
                          : "bg-white"
                      }`}
                  >
                    {term.toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* Submit button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={selected.length !== 3}
                className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
              >
                Submit Selection
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Categories */}
        <div className="flex-1 space-y-4">
          {puzzle.categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-3 rounded shadow">
              <div className="font-bold mb-2">
                {solvedCategories.includes(cat.name) ? cat.name : "???"}
              </div>
              <div className="flex gap-2">
                {cat.terms.map((term) => (
                  <button
                    key={term}
                    className="flex-1 h-12 bg-gray-200 rounded disabled:opacity-50"
                    disabled
                  >
                    {disabledTerms.includes(term) ? term.toUpperCase() : "?"}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
