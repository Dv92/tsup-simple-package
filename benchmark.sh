#!/bin/bash

# Run tsup:build and capture the real time
tsup_time=$( (time -p npm run tsup:build) 2>&1 | grep real | awk '{print $2}' )

# Run microbundle:build and capture the real time
microbundle_time=$( (time -p npm run microbundle:build) 2>&1 | grep real | awk '{print $2}' )

# Calculate the percentage difference
percentage_diff=$( echo "scale=2; (($tsup_time - $microbundle_time) / $microbundle_time) * 100" | bc )

echo "The execution time of tsup:build is $tsup_time seconds"
echo "The execution time of microbundle:build is $microbundle_time seconds"
echo "tsup:build is faster by $percentage_diff%"