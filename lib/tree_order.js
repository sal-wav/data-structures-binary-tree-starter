

function inOrderArray(root, arr = []) {
  // if the root is null, return an empty array
    if (!root) {
        return arr;
    }
    if (root.left) {
      inOrderArray(root.left, arr);
    }
    arr.push(root.val)
    if (root.right) {
      inOrderArray(root.right, arr);
    }
    return arr;
  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the root value
  //   concatenated with the right array
}


function postOrderArray(root) {
  // if the root is null, return an empty array

  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the right array
  //   concatenated with the root value
}


module.exports = {
  inOrderArray,
  postOrderArray
};
