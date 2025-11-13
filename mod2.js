
function yarra() {
  arr = []
  for (let i = 0; i < 5; i++) {
    arr[i] = parseInt(prompt("Gimme a number dweeb")) // Screw the edge case on this one I don't care rn
  }
  //let's try this with only one array in a way that we HAVE the data backwards
  //
  //so if we overwrite the last one with the first we can't set the first. 
  //Shifting the first would suck ass to make and not scale.
  //using xor would work with O(n)
  for (let i = 0; i < Math.round(arr.length / 2.000001); i++) { //hopefully those decimals round down well enough
    arr[i] = arr[arr.length - 1 - i] ^ arr[i]
    arr[arr.length - 1 - i] = arr[i] ^ arr[arr.length - 1 - i]
    arr[i] = arr[arr.length - 1 - i] ^ arr[i]
  }
  console.log(arr)
}
yarra()
// no more modules due to too many due dates on 14th and I love procrastinating 
