export function isValidInput(strs) {
  if (!Array.isArray(strs) || strs.length < 1 || strs.length > 200) {
    alert(
      "Invalid input: strs must be an array with length between 1 and 200."
    );
    return false;
  }

  for (let i = 0; i < strs.length; i++) {
    if (
      typeof strs[i] !== "string" ||
      strs[i].length < 0 ||
      strs[i].length > 200 ||
      !/^[a-z]*$/.test(strs[i])
    ) {
      alert(
        "Invalid input: Each element in strs must be a string with length between 0 and 200, and consists of only lowercase English letters."
      );
      return false;
    }
  }

  return true;
}
