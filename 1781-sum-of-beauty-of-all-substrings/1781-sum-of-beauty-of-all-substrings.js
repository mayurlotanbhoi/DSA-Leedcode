/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
     let result = 0;

    for (let i = 0; i < s.length; i++) {

        const freq = {};

        for (let j = i; j < s.length; j++) {

            freq[s[j]] = (freq[s[j]] || 0) + 1;

            let maxFreq = 0;
            let minFreq = Infinity;

            for (const ch in freq) {
                maxFreq = Math.max(maxFreq, freq[ch]);
                minFreq = Math.min(minFreq, freq[ch]);
            }

            result += maxFreq - minFreq;
        }
    }

    return result;
};