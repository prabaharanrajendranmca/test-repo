# padding-check
You are required to implement a Javascript function that checks for consistent number padding in a sequence of strings. The purpose is to determine if the numbers are consistently left-padded with "0" characters to a specified length, if the numbers are unpadded, or if there is padding but it is inconsistent.

# Run
node paddingCheck.js

 # Test Cases Explained
Consistent Padding: ["001", "002"]

The first two strings are padded (length 3), and 9999 is unpadded but does not contradict the padding found.
The function returns 3 because it only considers the padded numbers.
Consistent Padding with Mixed: ["01", "02", "003"]

Both strings are padded with leading zeros and have a length of 3.
The function finds consistent padding and returns 3.
Consistent Padding with Longer Number: ["001", "002", "9999"]

The first two strings have lengths 2 (unpadded) and the last has length 3 (padded).
The function finds consistent padding (length 3) and returns 1.
No Padding Observed: ["1", "2", "999"]

All strings are unpadded and have lengths of 1.
Since there are no padded numbers, but valid observations exist, it returns -3 for inconsistent padding.
Inconclusive Padding: ["999", "9999"]

The strings are both unpadded with lengths of 3 and 4.
Since there's no padding observed, but valid lengths are found, the smallest non-padded length is 2, and it returns -2.
Inconclusive Padding: ["99", "999", "9999"]

The strings have lengths ["01", "002"].
The function returns -1 

The strings have lengths [].
The function returns 0 


The input is empty, so there are no observations at all.
The function correctly returns 0 to indicate that no input was provided.
