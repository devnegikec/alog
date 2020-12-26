var rotate = function(matrix) {
    const size = matrix.length - 1;
 
   for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
     for (let i = layer; i < size - layer; i++) {
       const topFence = matrix[layer][i];                  // starts at top left of layer
       const rightFence = matrix[i][size - layer];         // starts at top right of layer
       const bottomFence = matrix[size - layer][size - i]; // starts at bottom right of layer
       const leftFence = matrix[size - i][layer];          // starts at bottom left of layer
 
       // rotate 90 degrees clockwise element by element
       matrix[layer][i] = leftFence;                     // set value walking top fence
       matrix[i][size - layer] = topFence;               // set value walking right fence
       matrix[size - layer][size - i] = rightFence;      // set value walking bottom fence
       matrix[size - i][layer] = bottomFence;            // set value walking left fence
     }
   }
 
   return matrix;
 };