// Node class for each character in the Trie
class TrieNode {
  constructor() {
    this.children = {};   // Stores child nodes (each character)
    this.isWord = false;  // Marks the end of a complete word
  }
}

// Trie class to handle insert, search, and prefix checking
class Trie {
  constructor() {
    this.root = new TrieNode();  // Start from an empty root node
  }

  // Insert a word into the trie
  insert(word) {
    let current = this.root;
    for (let ch of word) {
      // If the character doesn't exist, create a new node
      if (!current.children[ch]) {
        current.children[ch] = new TrieNode();
      }
      // Move to the next node
      current = current.children[ch];
    }
    // After all characters, mark the node as a complete word
    current.isWord = true;
  }

  // Check if a word exists in the trie
  search(word) {
    let current = this.root;
    for (let ch of word) {
      // If the character path doesn't exist, word is not found
      if (!current.children[ch]) return false;
      current = current.children[ch];
    }
    // Return true only if it's marked as a complete word
    return current.isWord;
  }

  // Check if any word starts with the given prefix
  startsWith(prefix) {
    let current = this.root;
    for (let ch of prefix) {
      // If any character in the prefix is missing, return false
      if (!current.children[ch]) return false;
      current = current.children[ch];
    }
    // All characters in the prefix are found
    return true;
  }
}

// Example input simulation
const actions = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
const values = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];
const result = [];

let trie;

for (let i = 0; i < actions.length; i++) {
  if (actions[i] === "Trie") {
    trie = new Trie();
    result.push(null); // Constructor doesn't return anything
  } else if (actions[i] === "insert") {
    trie.insert(values[i][0]);
    result.push(null); // insert also doesn't return anything
  } else if (actions[i] === "search") {
    result.push(trie.search(values[i][0]));
  } else if (actions[i] === "startsWith") {
    result.push(trie.startsWith(values[i][0]));
  }
}

console.log(result); // Expected output: [null, null, true, false, true, null, true]
