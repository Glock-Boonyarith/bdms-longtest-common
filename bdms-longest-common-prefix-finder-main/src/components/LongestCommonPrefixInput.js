import React from 'react';

function LongestCommonPrefixInput({ onChange }) {
  return (
    <textarea
      className="input w-300 border-gray border-2 mb-4 text-lg p-2"
      placeholder="Enter strings separated by commas"
      rows="5"
      onChange={onChange}
    ></textarea>
  );
}

export default LongestCommonPrefixInput;