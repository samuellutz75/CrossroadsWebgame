import { useState } from "react";

const initialTerms = [
  "ANT", "BUTTON", "DOPE",
  "GROUND", "LIT", "POCKET",
  "RAD", "ROACH", "SEAM",
  "STRIKE", "TAG", "WASP"
];

const categories = [
  {
    name: "Household Pests",
    terms: ["ANT", "ROACH", "WASP"],
    keywords: ["BUG", "BUGS", "INSECT", "INSECTS", "PEST", "PESTS"],
  },
  {
    name: "Slang for Cool",
    terms: ["DOPE", "LIT", "RAD"],
    keywords: ["SLANG", "COOL", "SYNONYM", "SYNONYMS"],
  },
  {
    name: "Parts of Pants",
    terms: ["BUTTON", "POCKET", "SEAM"],
    keywords: ["CLOTHING", "CLOTHES", "SHIRT", "SHIRTS", "PANT", "PANTS"],
  },
  {
    name: "Outs in Baseball",
    terms: ["GROUND", "STRIKE", "TAG"],
    keywords: ["SPORT", "SPORTS", "BASEBALL", "SOFTBALL", "OUT", "OUTS"],
  },
];

const UNIFIER = "FLY";

export default function CrossroadsGame() {
  const [selected, setSelected] = useState([]);
  const [solved, setSolved] = useState([]);
  const [categoryInputs, setCategoryInputs] = useState(Array(4).fill(""));
  const [revealedCategories, setRevealedCategories] = useState(Array(4).fill(false));
  const [flash, setFlash] = useState(null);
  const [unifierGuess, setUnifierGuess] = useState("");
  const [gameWon, setGameWon] = useState(false);

  const toggleSelect = (term) => {
    if (selected.includes(term)) {
      setSelected(selected.filter((t) => t !== term));
    } else if (selected.length < 3) {
      setSelected([...selected, term]);
    }
  };

  const handleSubmit = () => {
    if (selected.length !== 3) return;

    const foundCategory = categories.find((cat) =>
      cat.terms.every((t) => selected.includes(t))
    );

    if (foundCategory) {
      setSolved([...solved, ...foundCategory.terms]);
      setFlash("correct");
      const index = categories.indexOf(foundCategory);
      setRevealedCategories((prev) => {
        const copy = [...prev];
        copy[index] = true; // enable input
        return copy;
      });
    } else {
      setFlash("wrong");
    }

    setSelected([]);
    setTimeout(() => setFlash(null), 800);
  };

  const handleCategoryInput = (value, index) => {
    setCategoryInputs((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });

    const cat = categories[index];
    if (cat.keywords.includes(value.trim().toUpperCase())) {
      setRevealedCategories((prev) => {
        const copy = [...prev];
        copy[index] = cat.name; // reveal true category
        return copy;
      });
    }
  };

  return (
    
    <div className="grid grid-cols-2 gap-4 h-screen p-4">
      {/* Left Column */}
      <div className="grid grid-rows-[auto,1fr] gap-4">
        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className={`p-2 rounded font-bold text-white ${
            flash === "correct"
              ? "bg-green-500"
              : flash === "wrong"
              ? "bg-red-500"
              : "bg-blue-500"
          }`}
        >
          Submit
        </button>

        {/* 3x4 Grid */}
        <div className="grid grid-cols-3 grid-rows-4 gap-2">
          {initialTerms.map((term, i) => (
            <button
              key={i}
              disabled={solved.includes(term)}
              onClick={() => toggleSelect(term)}
              className={`p-4 border rounded text-lg font-semibold ${
                solved.includes(term)
                  ? "bg-gray-300 text-gray-500"
                  : selected.includes(term)
                  ? "bg-yellow-300"
                  : "bg-white"
              }`}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="grid grid-rows-4 gap-4">
        {categories.map((cat, i) => (
          <div key={i} className="grid grid-rows-2 gap-2">
            {/* Category input row */}
            <div className="flex gap-2">
              <input
                type="text"
                value={revealedCategories[i] === true ? categoryInputs[i] : revealedCategories[i] || ""}
                onChange={(e) => handleCategoryInput(e.target.value, i)}
                disabled={!revealedCategories[i] || typeof revealedCategories[i] !== "boolean"}
                placeholder={revealedCategories[i] ? "Enter a keyword..." : ""}
                className="border rounded p-2 flex-1"
              />
              <input
                type="text"
                value="Hint"
                disabled
                className="border rounded p-2 w-24 bg-gray-100 text-gray-500"
              />
            </div>

            {/* Answered terms row */}
            <div className="flex gap-2">
              {cat.terms.map((term, j) => (
                <button
                  key={j}
                  disabled
                  className={`flex-1 p-2 border rounded ${
                    solved.includes(term) ? "bg-green-200" : "bg-gray-100"
                  }`}
                >
                  {solved.includes(term) ? term : ""}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
