// Define the SearchSuggestionSystem class
class SearchSuggestionSystem {
  // Constructor initializes the system with the list of products
  constructor(products) {
    // Sort the products in lexicographical (alphabetical) order
    this.products = products.sort();
  }

  // Method to get search suggestions based on the searchWord
  getSuggestions(searchWord) {
    let result = [];     // This will hold the final result - list of lists
    let prefix = "";     // This will build up the search prefix character by character

    // Loop through each character in the search word
    for (let char of searchWord) {
      prefix += char;    // Add the current character to the prefix

      // Filter products that start with the current prefix
      let suggestions = this.products.filter(product => product.startsWith(prefix));

      // Add the top 3 matching products to the result
      result.push(suggestions.slice(0, 3));
    }

    // Return the complete result with suggestions for each character typed
    return result;
  }
}

// Example usage:

// List of product names
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];

// Search word being typed
const searchWord = "mouse";

// Create an instance of the suggestion system
const system = new SearchSuggestionSystem(products);

// Get the suggestions for the given search word
const output = system.getSuggestions(searchWord);

// Print the output
console.log(output);

/*
Expected Output:
[
  ["mobile", "moneypot", "monitor"],
  ["mobile", "moneypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/
