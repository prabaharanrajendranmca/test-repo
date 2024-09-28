function checkPaddingConsistency(strings) {
    const validLengths = new Set();
    let smallestNonPaddedLength = Infinity;
    let hasPadding = false;
    let hasObservations = false;

    strings.forEach(str => {
        const trimmedStr = str.trim();
        const isNumber = !isNaN(Number(trimmedStr));

        if (isNumber) {
            hasObservations = true; // Mark that we have at least one observation
            const length = trimmedStr.length;
            const isPadded = trimmedStr.startsWith("0");

            // Check for padded numbers
            if (isPadded) {
                validLengths.add(length);
                hasPadding = true;
            } else {
                // Track smallest non-padded length
                smallestNonPaddedLength = Math.min(smallestNonPaddedLength, length);
            }
        }
    });

    // If no observations were made
    if (!hasObservations) {
        return 0; // No observations
    }

    // If padding is consistent
    const consistentLengths = Array.from(validLengths).filter(length => length > 1);
    if (consistentLengths.length === 1) {
        return consistentLengths[0];
    }

    // If there are valid lengths, return the minimum one
    if (consistentLengths.length > 0) {
        return -1; // Inconsistent padding found
    }

    // If no padding was found and there were non-padded numbers
    if (!hasPadding && smallestNonPaddedLength !== Infinity) {
        return -smallestNonPaddedLength; // Return negative of smallest non-padded length
    }

    return -1; // Inconsistent padding found (fallback)
}

// Example usage
console.log(` Input Given is ["001", "002"]  => ${checkPaddingConsistency(["001", "002"])}`);          // Output: 3
console.log(` Input Given is ["001", "002", "9999"]  => ${checkPaddingConsistency(["001", "002", "9999"])}`);  // Output: 3
console.log(` Input Given is ["01", "02", "003"]  => ${checkPaddingConsistency(["01", "02", "003"])}`);     // Output: 3
console.log(` Input Given is ["1", "2", "3"]  => ${checkPaddingConsistency(["1", "2", "3"])}`);          // Output: -1
console.log(` Input Given is ["999", "9999"]  => ${checkPaddingConsistency(["999", "9999"])}`);          // Output: -3
console.log(` Input Given is ["99", "999", "9999"]  => ${checkPaddingConsistency(["99", "999", "9999"])}`);    // Output: -2
console.log(` Input Given is ["001", "002"]  => ${checkPaddingConsistency([])}`);                        // Output: 0
