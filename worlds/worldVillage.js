// Village World.
let worldVillageTileDictionnary = {};
let worldVillageTileSize = 64;

let worldVillageBoard = [
  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 167, 91, 23, 23, 23, 23, 23, 23, 18, 25, 25, 25, 25, 162, 163, 163, 163, 163, 163, 164, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 172, 16, 23, 23, 23, 23, 23, 23, 18, 25, 25, 25, 25, 167, 23, 28, 23, 23, 82, 18, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 24, 172, 173, 173, 26, 27, 173, 173, 174, 25, 25, 25, 25, 167, 23, 49, 50, 51, 52, 18, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 36, 37, 25, 25, 25, 25, 25, 25, 25, 167, 23, 59, 61, 60, 62, 18, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
  [25, 25, 25, 25, 25, 162, 163, 163, 163, 163, 163, 163, 163, 163, 163, 163, 46, 47, 163, 163, 163, 163, 163, 163, 163, 53, 82, 23, 23, 23, 28, 54, 163, 163, 163, 163, 164, 25, 25, 25, 25, 25],
  [25, 25, 25, 25, 25, 167, 23, 23, 28, 23, 23, 23, 23, 28, 23, 23, 149, 150, 23, 23, 23, 28, 23, 23, 23, 63, 66, 66, 73, 74, 66, 64, 23, 23, 23, 48, 166, 164, 25, 25, 25, 25],
  [163, 164, 25, 25, 25, 167, 23, 23, 23, 23, 23, 58, 23, 23, 23, 100, 149, 150, 23, 79, 80, 81, 23, 23, 23, 23, 23, 58, 149, 150, 23, 23, 23, 79, 80, 81, 23, 18, 25, 25, 25, 25],
  [23, 166, 163, 164, 25, 172, 173, 16, 91, 23, 23, 23, 23, 23, 146, 147, 155, 150, 23, 88, 89, 90, 99, 23, 23, 28, 23, 23, 149, 150, 23, 58, 23, 88, 89, 90, 58, 18, 25, 25, 25, 25],
  [23, 23, 23, 18, 25, 25, 25, 167, 23, 48, 23, 23, 23, 58, 149, 157, 152, 153, 28, 23, 23, 146, 147, 147, 147, 147, 147, 147, 155, 150, 23, 23, 23, 23, 23, 23, 23, 18, 25, 25, 25, 25],
  [23, 23, 23, 18, 25, 25, 25, 167, 23, 23, 58, 23, 23, 23, 149, 150, 23, 91, 23, 23, 38, 149, 157, 152, 152, 152, 152, 152, 152, 153, 23, 23, 23, 28, 23, 23, 17, 174, 25, 25, 25, 25],
  [23, 23, 23, 33, 34, 34, 34, 161, 147, 147, 147, 147, 147, 147, 155, 154, 147, 147, 147, 147, 147, 155, 154, 148, 23, 23, 23, 28, 23, 91, 23, 23, 23, 23, 23, 23, 18, 25, 25, 25, 25, 25],
  [23, 23, 23, 43, 44, 44, 44, 158, 152, 152, 152, 152, 152, 152, 152, 152, 152, 152, 156, 157, 152, 152, 156, 150, 23, 99, 23, 23, 23, 79, 80, 81, 99, 23, 23, 23, 18, 25, 162, 163, 163, 163],
  [23, 23, 23, 18, 25, 25, 25, 167, 82, 23, 58, 23, 79, 80, 81, 23, 23, 23, 149, 150, 23, 23, 149, 154, 147, 147, 148, 23, 28, 88, 89, 90, 23, 23, 23, 17, 174, 25, 167, 23, 23, 23],
  [173, 173, 173, 174, 25, 25, 25, 167, 23, 23, 23, 23, 88, 89, 90, 23, 146, 147, 155, 150, 28, 23, 151, 152, 152, 156, 150, 23, 23, 23, 23, 58, 100, 23, 23, 18, 25, 25, 167, 23, 23, 23],
  [25, 25, 25, 25, 25, 25, 25, 167, 23, 23, 23, 28, 23, 23, 99, 23, 149, 157, 152, 153, 23, 23, 23, 23, 91, 149, 154, 147, 147, 147, 147, 147, 147, 147, 147, 159, 34, 34, 35, 23, 23, 23],
  [25, 25, 25, 25, 25, 25, 25, 167, 68, 23, 23, 23, 23, 23, 23, 91, 149, 150, 79, 80, 81, 48, 23, 23, 23, 149, 157, 152, 152, 152, 152, 152, 152, 152, 152, 160, 44, 44, 45, 23, 23, 23],
  [25, 25, 25, 25, 25, 162, 163, 56, 57, 57, 57, 55, 23, 23, 28, 23, 149, 150, 88, 89, 90, 23, 23, 23, 23, 149, 150, 23, 23, 23, 58, 23, 28, 23, 82, 18, 25, 25, 167, 23, 23, 99],
  [25, 25, 25, 25, 25, 167, 19, 20, 21, 22, 100, 67, 23, 23, 23, 23, 149, 150, 58, 23, 23, 23, 99, 17, 173, 121, 120, 173, 173, 173, 173, 16, 23, 23, 23, 18, 25, 25, 167, 23, 23, 23],
  [25, 25, 25, 25, 25, 167, 29, 30, 31, 32, 23, 76, 147, 147, 147, 147, 155, 150, 23, 23, 23, 82, 23, 18, 25, 122, 125, 25, 25, 25, 25, 167, 23, 23, 68, 18, 25, 25, 172, 16, 23, 23],
  [25, 25, 25, 25, 25, 167, 23, 23, 23, 23, 23, 75, 152, 152, 152, 152, 152, 153, 23, 23, 28, 17, 173, 174, 25, 122, 125, 25, 25, 25, 25, 172, 173, 173, 173, 174, 25, 25, 24, 172, 173, 173],
  [25, 25, 25, 25, 25, 167, 23, 23, 99, 23, 23, 65, 173, 173, 173, 173, 173, 16, 38, 23, 17, 174, 25, 25, 25, 122, 125, 25, 130, 141, 129, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
  [25, 25, 25, 25, 25, 172, 173, 173, 173, 173, 173, 174, 25, 25, 25, 25, 24, 172, 173, 173, 174, 25, 130, 141, 141, 123, 124, 141, 140, 119, 138, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 139, 119, 119, 119, 119, 119, 119, 119, 138, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 139, 119, 119, 119, 119, 119, 119, 119, 138, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
];

let worldVillageDecorationTileDictionnary = {};
let worldVillageDecorationTileSize = 64;

let worldVillageDecorationBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 96, 0, 0, 92, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 105, 0, 0, 101, 105, 0, 0, 0, 0, 0, 0, 0, 39, 40, 41, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 83, 87, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 92, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 69, 70, 0, 0, 83, 87, 0, 0, 0, 0, 0, 0, 0, 0, 69, 70, 0, 0, 0, 0, 0, 0, 0],
  [83, 87, 0, 0, 0, 0, 101, 105, 0, 0, 0, 83, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 96, 0, 0, 97, 0, 0, 83, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [126, 143, 85, 0, 0, 0, 0, 0, 0, 0, 0, 92, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 105, 0, 0, 106, 0, 0, 92, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [92, 137, 94, 95, 0, 0, 0, 0, 0, 0, 0, 101, 105, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 87, 0, 0, 0, 101, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [101, 102, 103, 104, 0, 0, 0, 0, 72, 0, 0, 0, 0, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 96, 0, 0, 0, 0, 0, 0, 0, 83, 87, 0, 0, 0, 0, 0, 0],
  [83, 84, 85, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 87, 0, 0, 0, 0, 0, 0, 0, 101, 105, 0, 0, 69, 70, 0, 0, 0, 92, 96, 0, 0, 0, 83, 84, 85],
  [92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 69, 70, 0, 0, 92, 96, 0, 0, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 105, 0, 0, 0, 126, 127, 128],
  [101, 102, 103, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 105, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 136, 137, 94],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 87, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 0, 0, 0, 0, 0, 72, 0, 0, 0, 0, 101, 102, 103],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 96, 0, 0, 0, 0, 0, 0, 0, 69, 70, 0, 0, 0, 0, 0, 114, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 105, 0, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 110, 111, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 168, 169, 170, 171, 0, 0, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 107, 112, 113, 117, 118, 71, 0, 0, 0, 83, 87, 0, 0, 0, 0, 0, 98, 83, 84],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 92, 96, 0, 0, 0, 0, 0, 107, 92, 93],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101, 105, 0, 0, 0, 0, 0, 0, 101, 102],
  [0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 107, 0, 0, 77, 78, 0, 0, 0, 0, 0, 0, 0, 0, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 87, 0, 0, 83, 84, 85, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 142, 143, 0, 0, 126, 127, 128, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 145, 96, 0, 0, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let worldVillageCollisionBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 100, 100, 2, 2, 2, 0, 0, 0, 0, 13, 5, 5, 5, 5, 5, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 3, 0, 11, 2, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 12, 5, 5, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 13, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 0, 0, 5, 5, 5, 5, 5, 5, 5, 3, 0, 0, 0, 0, 0, 4, 5, 5, 5, 5, 14, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 8, 14, 0, 0, 0, 0],
  [2, 2, 0, 0, 0, 3, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 2, 0, 0, 4, 0, 0, 0, 0],
  [2, 2, 2, 2, 0, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 5, 0, 0, 5, 7, 0, 0, 5, 0, 0, 0, 0, 0, 12, 5, 0, 0, 4, 0, 0, 0, 0],
  [2, 2, 2, 2, 0, 0, 0, 3, 0, 0, 0, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
  [5, 5, 5, 14, 2, 2, 2, 3, 2, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 2, 0, 0, 0, 5, 7, 4, 0, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 11, 2, 0, 0, 5, 7, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 12, 5, 0, 0, 0, 0, 4, 2, 0, 2, 2, 2, 2],
  [2, 2, 2, 2, 0, 0, 0, 3, 0, 0, 0, 0, 12, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 2, 4, 2, 2, 2, 5, 5, 5],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 5, 7, 0, 0, 0, 0, 0, 0, 0, 11, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 15, 6, 6, 6, 6, 5, 0, 0, 0, 0, 0, 12, 5, 0, 0, 0, 5, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 4, 2, 2, 3, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 11, 2, 2, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 2, 2, 2, 2, 3, 0, 0, 0, 4, 0, 0, 2, 5, 5, 5],
  [0, 0, 0, 0, 0, 3, 11, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 2, 0, 0, 0, 3, 5, 7, 0, 4, 0, 0, 2, 2, 2, 2],
  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 2, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2],
  [0, 0, 0, 0, 0, 3, 5, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 5, 4, 2, 0, 0, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];



function setupTileDictionariesVillage() {
  worldVillageTileDictionnary = {

    0: loadImage(''),
    1: loadImage('assets/village/1.png'),
    2: loadImage('assets/village/2.png'),
    3: loadImage('assets/village/3.png'),
    4: loadImage('assets/village/4.png'),
    5: loadImage('assets/village/5.png'),
    6: loadImage('assets/village/6.png'),
    7: loadImage('assets/village/7.png'),
    8: loadImage('assets/village/8.png'),
    9: loadImage('assets/village/9.png'),
    10: loadImage('assets/village/10.png'),
    11: loadImage('assets/village/11.png'),
    12: loadImage('assets/village/12.png'),
    13: loadImage('assets/village/13.png'),
    14: loadImage('assets/village/14.png'),
    15: loadImage('assets/village/15.png'),
    16: loadImage('assets/village/16.png'),
    17: loadImage('assets/village/17.png'),
    18: loadImage('assets/village/18.png'),
    19: loadImage('assets/village/19.png'),
    20: loadImage('assets/village/20.png'),
    21: loadImage('assets/village/21.png'),
    22: loadImage('assets/village/22.png'),
    23: loadImage('assets/village/23.png'),
    24: loadImage('assets/village/24.png'),
    25: loadImage('assets/village/25.png'),
    26: loadImage('assets/village/26.png'),
    27: loadImage('assets/village/27.png'),
    28: loadImage('assets/village/28.png'),
    29: loadImage('assets/village/29.png'),
    30: loadImage('assets/village/30.png'),
    31: loadImage('assets/village/31.png'),
    32: loadImage('assets/village/32.png'),
    33: loadImage('assets/village/33.png'),
    34: loadImage('assets/village/34.png'),
    35: loadImage('assets/village/35.png'),
    36: loadImage('assets/village/36.png'),
    37: loadImage('assets/village/37.png'),
    38: loadImage('assets/village/38.png'),
    39: loadImage('assets/village/39.png'),
    40: loadImage('assets/village/40.png'),
    41: loadImage('assets/village/41.png'),
    42: loadImage('assets/village/42.png'),
    43: loadImage('assets/village/43.png'),
    44: loadImage('assets/village/44.png'),
    45: loadImage('assets/village/45.png'),
    46: loadImage('assets/village/46.png'),
    47: loadImage('assets/village/47.png'),
    48: loadImage('assets/village/48.png'),
    49: loadImage('assets/village/49.png'),
    50: loadImage('assets/village/50.png'),
    51: loadImage('assets/village/51.png'),
    52: loadImage('assets/village/52.png'),
    53: loadImage('assets/village/53.png'),
    54: loadImage('assets/village/54.png'),
    55: loadImage('assets/village/55.png'),
    56: loadImage('assets/village/56.png'),
    57: loadImage('assets/village/57.png'),
    58: loadImage('assets/village/58.png'),
    59: loadImage('assets/village/59.png'),
    60: loadImage('assets/village/60.png'),
    61: loadImage('assets/village/61.png'),
    62: loadImage('assets/village/62.png'),
    63: loadImage('assets/village/63.png'),
    64: loadImage('assets/village/64.png'),
    65: loadImage('assets/village/65.png'),
    66: loadImage('assets/village/66.png'),
    67: loadImage('assets/village/67.png'),
    68: loadImage('assets/village/68.png'),
    69: loadImage('assets/village/69.png'),
    70: loadImage('assets/village/70.png'),
    71: loadImage('assets/village/71.png'),
    72: loadImage('assets/village/72.png'),
    73: loadImage('assets/village/73.png'),
    74: loadImage('assets/village/74.png'),
    75: loadImage('assets/village/75.png'),
    76: loadImage('assets/village/76.png'),
    77: loadImage('assets/village/77.png'),
    78: loadImage('assets/village/78.png'),
    79: loadImage('assets/village/79.png'),
    80: loadImage('assets/village/80.png'),
    81: loadImage('assets/village/81.png'),
    82: loadImage('assets/village/82.png'),
    83: loadImage('assets/village/83.png'),
    84: loadImage('assets/village/84.png'),
    85: loadImage('assets/village/85.png'),
    86: loadImage('assets/village/86.png'),
    87: loadImage('assets/village/87.png'),
    88: loadImage('assets/village/88.png'),
    89: loadImage('assets/village/89.png'),
    90: loadImage('assets/village/90.png'),
    91: loadImage('assets/village/91.png'),
    92: loadImage('assets/village/92.png'),
    93: loadImage('assets/village/93.png'),
    94: loadImage('assets/village/94.png'),
    95: loadImage('assets/village/95.png'),
    96: loadImage('assets/village/96.png'),
    97: loadImage('assets/village/97.png'),
    98: loadImage('assets/village/98.png'),
    99: loadImage('assets/village/99.png'),
    100: loadImage('assets/village/100.png'),
    101: loadImage('assets/village/101.png'),
    102: loadImage('assets/village/102.png'),
    103: loadImage('assets/village/103.png'),
    104: loadImage('assets/village/104.png'),
    105: loadImage('assets/village/105.png'),
    106: loadImage('assets/village/106.png'),
    107: loadImage('assets/village/107.png'),
    108: loadImage('assets/village/108.png'),
    109: loadImage('assets/village/109.png'),
    110: loadImage('assets/village/110.png'),
    111: loadImage('assets/village/111.png'),
    112: loadImage('assets/village/112.png'),
    113: loadImage('assets/village/113.png'),
    114: loadImage('assets/village/114.png'),
    115: loadImage('assets/village/115.png'),
    116: loadImage('assets/village/116.png'),
    117: loadImage('assets/village/117.png'),
    118: loadImage('assets/village/118.png'),
    119: loadImage('assets/village/119.png'),
    120: loadImage('assets/village/120.png'),
    121: loadImage('assets/village/121.png'),
    122: loadImage('assets/village/122.png'),
    123: loadImage('assets/village/123.png'),
    124: loadImage('assets/village/124.png'),
    125: loadImage('assets/village/125.png'),
    126: loadImage('assets/village/126.png'),
    127: loadImage('assets/village/127.png'),
    128: loadImage('assets/village/128.png'),
    129: loadImage('assets/village/129.png'),
    130: loadImage('assets/village/130.png'),
    131: loadImage('assets/village/131.png'),
    132: loadImage('assets/village/132.png'),
    133: loadImage('assets/village/133.png'),
    134: loadImage('assets/village/134.png'),
    135: loadImage('assets/village/135.png'),
    136: loadImage('assets/village/136.png'),
    137: loadImage('assets/village/137.png'),
    138: loadImage('assets/village/138.png'),
    139: loadImage('assets/village/139.png'),
    140: loadImage('assets/village/140.png'),
    141: loadImage('assets/village/141.png'),
    142: loadImage('assets/village/142.png'),
    143: loadImage('assets/village/143.png'),
    144: loadImage('assets/village/144.png'),
    145: loadImage('assets/village/145.png'),
    146: loadImage('assets/village/146.png'),
    147: loadImage('assets/village/147.png'),
    148: loadImage('assets/village/148.png'),
    149: loadImage('assets/village/149.png'),
    150: loadImage('assets/village/150.png'),
    151: loadImage('assets/village/151.png'),
    152: loadImage('assets/village/152.png'),
    153: loadImage('assets/village/153.png'),
    154: loadImage('assets/village/154.png'),
    155: loadImage('assets/village/155.png'),
    156: loadImage('assets/village/156.png'),
    157: loadImage('assets/village/157.png'),
    158: loadImage('assets/village/158.png'),
    159: loadImage('assets/village/159.png'),
    160: loadImage('assets/village/160.png'),
    161: loadImage('assets/village/161.png'),
    162: loadImage('assets/village/162.png'),
    163: loadImage('assets/village/163.png'),
    164: loadImage('assets/village/164.png'),
    165: loadImage('assets/village/165.png'),
    166: loadImage('assets/village/166.png'),
    167: loadImage('assets/village/167.png'),
    168: loadImage('assets/village/168.png'),
    169: loadImage('assets/village/169.png'),
    170: loadImage('assets/village/170.png'),
    171: loadImage('assets/village/171.png'),
    172: loadImage('assets/village/172.png'),
    173: loadImage('assets/village/173.png'),
    174: loadImage('assets/village/174.png'),
  };

  worldVillageDecorationTileDictionnary = {

    0: loadImage(''),
    1: loadImage('assets/village/1.png'),
    2: loadImage('assets/village/2.png'),
    3: loadImage('assets/village/3.png'),
    4: loadImage('assets/village/4.png'),
    5: loadImage('assets/village/5.png'),
    6: loadImage('assets/village/6.png'),
    7: loadImage('assets/village/7.png'),
    8: loadImage('assets/village/8.png'),
    9: loadImage('assets/village/9.png'),
    10: loadImage('assets/village/10.png'),
    11: loadImage('assets/village/11.png'),
    12: loadImage('assets/village/12.png'),
    13: loadImage('assets/village/13.png'),
    14: loadImage('assets/village/14.png'),
    15: loadImage('assets/village/15.png'),
    16: loadImage('assets/village/16.png'),
    17: loadImage('assets/village/17.png'),
    18: loadImage('assets/village/18.png'),
    19: loadImage('assets/village/19.png'),
    20: loadImage('assets/village/20.png'),
    21: loadImage('assets/village/21.png'),
    22: loadImage('assets/village/22.png'),
    23: loadImage('assets/village/23.png'),
    24: loadImage('assets/village/24.png'),
    25: loadImage('assets/village/25.png'),
    26: loadImage('assets/village/26.png'),
    27: loadImage('assets/village/27.png'),
    28: loadImage('assets/village/28.png'),
    29: loadImage('assets/village/29.png'),
    30: loadImage('assets/village/30.png'),
    31: loadImage('assets/village/31.png'),
    32: loadImage('assets/village/32.png'),
    33: loadImage('assets/village/33.png'),
    34: loadImage('assets/village/34.png'),
    35: loadImage('assets/village/35.png'),
    36: loadImage('assets/village/36.png'),
    37: loadImage('assets/village/37.png'),
    38: loadImage('assets/village/38.png'),
    39: loadImage('assets/village/39.png'),
    40: loadImage('assets/village/40.png'),
    41: loadImage('assets/village/41.png'),
    42: loadImage('assets/village/42.png'),
    43: loadImage('assets/village/43.png'),
    44: loadImage('assets/village/44.png'),
    45: loadImage('assets/village/45.png'),
    46: loadImage('assets/village/46.png'),
    47: loadImage('assets/village/47.png'),
    48: loadImage('assets/village/48.png'),
    49: loadImage('assets/village/49.png'),
    50: loadImage('assets/village/50.png'),
    51: loadImage('assets/village/51.png'),
    52: loadImage('assets/village/52.png'),
    53: loadImage('assets/village/53.png'),
    54: loadImage('assets/village/54.png'),
    55: loadImage('assets/village/55.png'),
    56: loadImage('assets/village/56.png'),
    57: loadImage('assets/village/57.png'),
    58: loadImage('assets/village/58.png'),
    59: loadImage('assets/village/59.png'),
    60: loadImage('assets/village/60.png'),
    61: loadImage('assets/village/61.png'),
    62: loadImage('assets/village/62.png'),
    63: loadImage('assets/village/63.png'),
    64: loadImage('assets/village/64.png'),
    65: loadImage('assets/village/65.png'),
    66: loadImage('assets/village/66.png'),
    67: loadImage('assets/village/67.png'),
    68: loadImage('assets/village/68.png'),
    69: loadImage('assets/village/69.png'),
    70: loadImage('assets/village/70.png'),
    71: loadImage('assets/village/71.png'),
    72: loadImage('assets/village/72.png'),
    73: loadImage('assets/village/73.png'),
    74: loadImage('assets/village/74.png'),
    75: loadImage('assets/village/75.png'),
    76: loadImage('assets/village/76.png'),
    77: loadImage('assets/village/77.png'),
    78: loadImage('assets/village/78.png'),
    79: loadImage('assets/village/79.png'),
    80: loadImage('assets/village/80.png'),
    81: loadImage('assets/village/81.png'),
    82: loadImage('assets/village/82.png'),
    83: loadImage('assets/village/83.png'),
    84: loadImage('assets/village/84.png'),
    85: loadImage('assets/village/85.png'),
    86: loadImage('assets/village/86.png'),
    87: loadImage('assets/village/87.png'),
    88: loadImage('assets/village/88.png'),
    89: loadImage('assets/village/89.png'),
    90: loadImage('assets/village/90.png'),
    91: loadImage('assets/village/91.png'),
    92: loadImage('assets/village/92.png'),
    93: loadImage('assets/village/93.png'),
    94: loadImage('assets/village/94.png'),
    95: loadImage('assets/village/95.png'),
    96: loadImage('assets/village/96.png'),
    97: loadImage('assets/village/97.png'),
    98: loadImage('assets/village/98.png'),
    99: loadImage('assets/village/99.png'),
    100: loadImage('assets/village/100.png'),
    101: loadImage('assets/village/101.png'),
    102: loadImage('assets/village/102.png'),
    103: loadImage('assets/village/103.png'),
    104: loadImage('assets/village/104.png'),
    105: loadImage('assets/village/105.png'),
    106: loadImage('assets/village/106.png'),
    107: loadImage('assets/village/107.png'),
    108: loadImage('assets/village/108.png'),
    109: loadImage('assets/village/109.png'),
    110: loadImage('assets/village/110.png'),
    111: loadImage('assets/village/111.png'),
    112: loadImage('assets/village/112.png'),
    113: loadImage('assets/village/113.png'),
    114: loadImage('assets/village/114.png'),
    115: loadImage('assets/village/115.png'),
    116: loadImage('assets/village/116.png'),
    117: loadImage('assets/village/117.png'),
    118: loadImage('assets/village/118.png'),
    119: loadImage('assets/village/119.png'),
    120: loadImage('assets/village/120.png'),
    121: loadImage('assets/village/121.png'),
    122: loadImage('assets/village/122.png'),
    123: loadImage('assets/village/123.png'),
    124: loadImage('assets/village/124.png'),
    125: loadImage('assets/village/125.png'),
    126: loadImage('assets/village/126.png'),
    127: loadImage('assets/village/127.png'),
    128: loadImage('assets/village/128.png'),
    129: loadImage('assets/village/129.png'),
    130: loadImage('assets/village/130.png'),
    131: loadImage('assets/village/131.png'),
    132: loadImage('assets/village/132.png'),
    133: loadImage('assets/village/133.png'),
    134: loadImage('assets/village/134.png'),
    135: loadImage('assets/village/135.png'),
    136: loadImage('assets/village/136.png'),
    137: loadImage('assets/village/137.png'),
    138: loadImage('assets/village/138.png'),
    139: loadImage('assets/village/139.png'),
    140: loadImage('assets/village/140.png'),
    141: loadImage('assets/village/141.png'),
    142: loadImage('assets/village/142.png'),
    143: loadImage('assets/village/143.png'),
    144: loadImage('assets/village/144.png'),
    145: loadImage('assets/village/145.png'),
    146: loadImage('assets/village/146.png'),
    147: loadImage('assets/village/147.png'),
    148: loadImage('assets/village/148.png'),
    149: loadImage('assets/village/149.png'),
    150: loadImage('assets/village/150.png'),
    151: loadImage('assets/village/151.png'),
    152: loadImage('assets/village/152.png'),
    153: loadImage('assets/village/153.png'),
    154: loadImage('assets/village/154.png'),
    155: loadImage('assets/village/155.png'),
    156: loadImage('assets/village/156.png'),
    157: loadImage('assets/village/157.png'),
    158: loadImage('assets/village/158.png'),
    159: loadImage('assets/village/159.png'),
    160: loadImage('assets/village/160.png'),
    161: loadImage('assets/village/161.png'),
    162: loadImage('assets/village/162.png'),
    163: loadImage('assets/village/163.png'),
    164: loadImage('assets/village/164.png'),
    165: loadImage('assets/village/165.png'),
    166: loadImage('assets/village/166.png'),
    167: loadImage('assets/village/167.png'),
    168: loadImage('assets/village/168.png'),
    169: loadImage('assets/village/169.png'),
    170: loadImage('assets/village/170.png'),
    171: loadImage('assets/village/171.png'),
    172: loadImage('assets/village/172.png'),
    173: loadImage('assets/village/173.png'),
    174: loadImage('assets/village/174.png'),
  };
};