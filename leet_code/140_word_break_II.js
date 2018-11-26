// Given a non - empty string s and a dictionary wordDict containing a list of non - empty words, add spaces 
// in s to construct a sentence where each word is a valid dictionary word.Return all such possible sentences.

// Note:
// - The same word in the dictionary may be reused multiple times in the segmentation.
// - You may assume the dictionary does not contain duplicate words.

// Example 1:
// Input:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//     "cats and dog",
//     "cat sand dog"
// ]

// Example 2:
// Input:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// Output:
// [
//     "pine apple pen apple",
//     "pineapple pen apple",
//     "pine applepen apple"
// ]
// Explanation: Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input:
// s = "catsandog"
// wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output:
// []

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

 // Alvin's Solution
var wordBreak = function (s, wordDict, memo = {}) {
    if (!s.length) return [''];

    if (s in memo) return memo[s];

    let all = [];

    for (let i = 0; i < s.length; i++) {
        let left = s.slice(0, i + 1);
        let right = s.slice(i + 1);
        if (wordDict.includes(left)) {
            let rest = wordBreak(right, wordDict, memo);
            all.push(...rest.map(sent => [left, ...sent.split(' ')].filter(word => word).join(' ')));
        }
    }

    memo[s] = all;
    return memo[s];
};



console.log(wordBreak("a", ["a"]));