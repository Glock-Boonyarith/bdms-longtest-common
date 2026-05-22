import React from "react";

function LongestCommonPrefixButton({ onClick }) {
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
      Find Longest Common Prefix
    </button>
  );
}

export default LongestCommonPrefixButton;
