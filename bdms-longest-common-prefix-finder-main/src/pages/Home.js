import React, { useState } from "react";
import LongestCommonPrefixInput from "../components/LongestCommonPrefixInput";
import LongestCommonPrefixButton from "../components/LongestCommonPrefixButton";
import { isValidInput } from "../utils/inputValidation";

function Home() {
  const [inputStrings, setInputStrings] = useState([]);
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInputStrings((event.target.value.split(",")).map(str => str.trim()));
  };

  const findLongestCommonPrefix = () => {
    if ((inputStrings.length === 0) || (!isValidInput(inputStrings))) {
      setResult("");
      return;
    }

    const sortedStrings = inputStrings.sort();
    const firstString = sortedStrings[0];
    const lastString = sortedStrings[sortedStrings.length - 1];
    let i = 0;
    while (
      i < firstString.length &&
      firstString.charAt(i) === lastString.charAt(i)
    ) {
      i++;
    }
    setResult(firstString.substring(0, i));
  };

  return (
    <div className="container flex flex-col w-500 p-4">
      <h1 className="text-3xl font-bold mb-4">Longest Common Prefix Finder</h1>

      <LongestCommonPrefixInput onChange={handleInputChange} />

      <LongestCommonPrefixButton onClick={findLongestCommonPrefix} />

      <h2 className="mb-4 text-xl">
        <strong>Result : </strong>
        <span>{result}</span>
      </h2>
    </div>
  );
}

export default Home;
