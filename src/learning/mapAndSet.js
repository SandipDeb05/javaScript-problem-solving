// TODO: MAP
const map = new Map([["a", 1]]);

map.set("b", 2);
map.set("c", 3);

console.log("get=>", map.get("c"));
console.log("has=>", map.has("b"));
console.log("entries=>", map.entries());
console.log("values=>", map.values());
console.log("keys=>", map.keys());
console.log("size=>", map.size);
console.log("delete=>", map.delete("c"));
console.log("clear=>", map.clear());
console.log("map=>", map);

// TODO: SET
const set = new Set(["a"]);

set.add("b");
set.add("c");

console.log("has=>", set.has("c"));
console.log("delete=>", set.delete("c"));
console.log("size=>", set.size);
console.log("clear=>", set.clear());

console.log("set =>", set);
