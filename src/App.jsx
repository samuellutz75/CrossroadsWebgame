import { useState } from "react";
import puzzles from "./puzzles";

// Disabled puzzle-style button for tutorial terms
const TutorialButton = ({ label }) => (
  <button
    className="bg-gray-200 text-black font-bold py-2 px-4 rounded-lg shadow-md cursor-default opacity-70"
    disabled
  >
    {label.toUpperCase()}
  </button>
);


export default function App() {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [solvedCategories, setSolvedCategories] = useState([]);
  const [disabledTerms, setDisabledTerms] = useState([]);
  const [unifierGuess, setUnifierGuess] = useState("");
  const [flashWrong, setFlashWrong] = useState(false);
  const [wrongSelection, setWrongSelection] = useState([]);
  const [unifierSolved, setUnifierSolved] = useState(false);
  const [guessHistory, setGuessHistory] = useState([]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  
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
      const categoryIndex = puzzle.categories.findIndex(
        (c) => c.name === match.name
      ) + 1;

      setGuessHistory((prevHistory) => [...prevHistory, `${categoryIndex}️⃣`]);
    } else {
      setWrongSelection(selected);
      setTimeout(() => setWrongSelection([]), 500);
      setGuessHistory((prevHistory) => [...prevHistory, "⬜"]);
    }
    

    setSelected([]);
  }

  function handleUnifierSubmit(e) {
    e.preventDefault();
    if (unifierGuess.trim().toLowerCase() === puzzle.unifier.toLowerCase()) {
      setUnifierSolved(true);
      setFlashWrong(false);
      setGuessHistory([...guessHistory, "✅"]); // log success
    } else {
      setFlashWrong(true);
      setTimeout(() => setFlashWrong(false), 500); // flash for 0.5s
      setGuessHistory([...guessHistory, "⚪"]); // log failure
    }
  }

  async function handleShare() {
    const timeline = guessHistory.join("");
    const text = `Crossroads #${currentPuzzleIndex + 1}: ${timeline}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }


  function resetPuzzle(index) {
    setCurrentPuzzleIndex(index);
    setSelected([]);
    setSolvedCategories([]);
    setDisabledTerms([]);
    setUnifierGuess("");
    setUnifierSolved(false);
    setGuessHistory([]);   // reset timeline
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
            {/*
            <label className="block mb-2 font-semibold">Unifier:</label>
            */}
            <div className="flex gap-2">
              <input
              type="text"
              value={unifierGuess}
              onChange={(e) => setUnifierGuess(e.target.value)}
              placeholder="Enter Unifier..."
              className={`w-40 sm:w-120 border px-3 py-2 rounded transition-colors duration-300 
                ${unifierSolved ? "border-green-500" : ""} 
                ${unifierGuess && !unifierSolved && flashWrong ? "border-red-500 bg-red-100" : ""}`}
              disabled={unifierSolved}
              />
              <button
                type="submit"
                disabled={unifierSolved}
                className="px-3 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleShare}
                disabled={!(unifierSolved && solvedCategories.length === 4)}
                className="flex-1 px-3 py-2 bg-green-500 text-white rounded disabled:opacity-50"
              >
                Share
              </button>

            </div>
            {unifierSolved && (
              <>
                <p className="mt-2 text-green-600 font-bold">
                  Correct! The Unifier is {puzzle.unifier}.
                </p>
                {copySuccess && (
                  <p className="mt-2 text-green-600 font-bold">Result Copied!</p>
                )}
              </>
            )}
          </form>

          {/* 3×4 Button Grid */}
          <div className="bg-white p-3 rounded shadow ">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {allTerms.map((term) => {
                const isSelected = selected.includes(term);
                const isDisabled = disabledTerms.includes(term);
                return (
                  <button
                    key={term}
                    onClick={() => toggleSelect(term)}
                    disabled={isDisabled}
                    className={`h-20 rounded shadow text-center flex items-center justify-center border transition-colors duration-300
                      ${
                        isDisabled
                          ? "bg-gray-300 text-gray-500"
                          : wrongSelection.includes(term)
                          ? "bg-red-400 text-white"
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
        
          <div className="mt-4 text-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setShowTutorial(true)}
            >
              Tutorial
            </button>
          </div>
        </div>
      </div>

      {showTutorial && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-start p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Crossroads Tutorial</h1>
            <p className="mb-4">
              Crossroads is a linguistic puzzle game played with two key features: <b>Categories</b>, and the <b>Unifier</b>. 
              To complete a Crossroads puzzle, the player must organize all 4 Categories, and identify the Unifier.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Categories:</h2>
            <p className="mb-4">
              In each Crossroads puzzle, the player is given a bank of 12 Terms. Terms can be words, word fragments, names, titles, brands, phrases, acronyms, etc.
            </p>

            <p className="mb-2">Example Term Bank:</p>
            <div className="grid grid-cols-3 w-120 gap-2 mb-4">
            <TutorialButton label="CRUSH" />
            <TutorialButton label="HOME DEPOT" />
            <TutorialButton label="JACK" />
            <TutorialButton label="KING" />
            <TutorialButton label="LOWE’S" />
            <TutorialButton label="MENARDS" />
            <TutorialButton label="MYSTIC" />
            <TutorialButton label="NAIL" />
            <TutorialButton label="QUEEN" />
            <TutorialButton label="ROCK" />
            <TutorialButton label="SPARK" />
            <TutorialButton label="VALKYRIE" />
            </div>

          <p className="mb-4">
            To complete the Categories section, the player must sort the Terms into Categories of 3 Terms each. 
            The player must select 3 Terms they believe to share a Category and submit their guess. 
            If correct, the selected Terms will be removed from the bank and the Category description will be revealed.
          </p>

          <p className="mb-2">Example Category:</p>
          <p className="font-semibold">Playing Cards</p>
          <div className="grid grid-cols-3 w-120 gap-2 mb-4">
            <TutorialButton label="KING" />
            <TutorialButton label="QUEEN" />
            <TutorialButton label="JACK" />
          </div>

          <p className="mb-4">
            All 4 Categories must be sorted to complete the section. More than 3 Terms may fit a Category’s description, 
            but not all will be part of the correct selection. Each Crossroads puzzle has 1 unique solution in which all 
            12 Terms are sorted into 4 Categories of 3 Terms each.
          </p>

          <p className="mb-2">Completed Category Section:</p>
          <p className="font-semibold">Playing Cards</p>
          <div className="grid grid-cols-3 w-120 gap-2 mb-4">
            <TutorialButton label="KING" />
            <TutorialButton label="QUEEN" />
            <TutorialButton label="JACK" />
          </div>

          <p className="font-semibold">Hardware Store Brands</p>
          <div className="grid grid-cols-3 w-120 gap-2 mb-4">
            <TutorialButton label="HOME DEPOT" />
            <TutorialButton label="LOWE’S" />
            <TutorialButton label="MENARDS" />
          </div>

          <p className="font-semibold">Member of a WNBA Team</p>
          <div className="grid grid-cols-3 w-120 gap-2 mb-4">
           <TutorialButton label="MYSTIC" />
           <TutorialButton label="SPARK" />
           <TutorialButton label="VALKYRIE" />
          </div>

          <p className="font-semibold">To Do Well at Something</p>
          <div className="grid grid-cols-3 w-120 gap-2 mb-4">
           <TutorialButton label="NAIL" />
           <TutorialButton label="CRUSH" />
           <TutorialButton label="ROCK" />
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-2">Unifier:</h2>
          <p className="mb-4">
            Each Crossroads puzzle is built around a single word called the Unifier. This word is not provided to the player. 
            Instead, they must identify what word exhibits the following behavior: The Unifier fits all Category descriptions simultaneously. 
            If the Unifier were provided as a Term, it could be rationally sorted into any of the 4 Categories.
          </p>

          <p className="mb-2">Unifier Example: <b>ACE</b></p>
          <p>An Ace is a Playing Card</p>
          <div className="grid grid-cols-4 w-160 gap-2 mb-4">
            <TutorialButton label="KING" />
            <TutorialButton label="QUEEN" />
            <TutorialButton label="JACK" />
            <TutorialButton label="ACE" />
          </div>

          <p>Ace Hardware is a Hardware Store Brand</p>
          <div className="grid grid-cols-4 w-160 gap-2 mb-4">
            <TutorialButton label="HOME DEPOT" />
            <TutorialButton label="LOWE’S" />
            <TutorialButton label="MENARDS" />
            <TutorialButton label="ACE" />
          </div>

          <p>An Ace is a Member of the Las Vegas Aces WNBA Team</p>
          <div className="grid grid-cols-4 w-160 gap-2 mb-4">
            <TutorialButton label="MYSTIC" />
            <TutorialButton label="SPARK" />
            <TutorialButton label="VALKYRIE" />
            <TutorialButton label="ACE" />
          </div>

          <p>To Ace something is to do well: “I aced that test!”</p>
          <div className="grid grid-cols-4 w-160 gap-2 mb-4">
            <TutorialButton label="NAIL" />
            <TutorialButton label="CRUSH" />
            <TutorialButton label="ROCK" />
            <TutorialButton label="ACE" />
          </div>

          <p className="mb-6">
            Once the player has sorted the Categories and identified the Unifier, they have completed the Crossroads puzzle. 
            Although the Unifier is typically discovered last, Crossroads puzzles can be completed in any order. 
            Upon completion, a SHARE button will enable the player to copy their score to their clipboard. 
            The score features a timeline of correct and incorrect guesses.
          </p>

          <button
            className="mt-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => setShowTutorial(false)}
          >
            Back to Game
          </button>
        </div>
      )}
    </div>
  );
}
