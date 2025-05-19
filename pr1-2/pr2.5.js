function formatName(name) {
  if (!name) return "";
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

console.log(formatName("aLiCe"));
console.log(formatName("BOB"));
console.log(formatName("john"));
