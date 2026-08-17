TwoSum2.js (optimized approach)
We mark the place where we found the previous number and the current number, previous doesn't mean the last element. We are using a simple formula, current element + previous element = target. We mark the current elements index at every iteration.
So, we use a hashmap, if target - current element is already there. That means we have the two indexes. We return the values.
AI made it very easy in explaining this formula. AI gave me the formula , which made understanding it very easy and the marking the index of current element inside the hashmap made it very easy as well.
