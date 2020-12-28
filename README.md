# Quick Sort
## divide and conquer
## also called partition exchange sort
## recursive

# Pseudo Code
## choose Pivot at middle
## find el larger than pivot from left and smaller from right, swap them
## left++, right-- and continue
## break loop when left==right(or when index of larger from left>index of smaller from right)
## at that time, replace pivot el with larger from left
## divide list by the pivot that was placed into the list
## process left list and right by recursion
## join them to get the sorted list
