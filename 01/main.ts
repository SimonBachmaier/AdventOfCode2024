if (import.meta.main) {
  const inputFile = 'input.txt';
  console.log(`Input file: ${inputFile}`);
  const distances = task1(inputFile);
  console.log(`Task 1 Result: ${distances}`);
  const similarity = task2(inputFile);
  console.log(`Task 2 Result: ${similarity}`);
}

export function task1(file: string) {
  const input = readInput(file);
  const idLists = getListOfIds(input);
  return calculateDistances(idLists);
}

export function task2(file: string) {
  const input = readInput(file);
  const idLists = getListOfIds(input);

  return calculateSimilarity(idLists);
}

function readInput(file: string) {
  const decoder = new TextDecoder("utf-8");
  const fileData = Deno.readFileSync(file);
  return decoder.decode(fileData);
}

function getListOfIds(input: string) {
  const lists: (number[])[] = [[], []];
  const lines = input.split('\n').slice(0, -1);

  lines.forEach(line => {
    const ids = line.split('   ');
    for (let i = 0; i < ids.length; i++) {
      lists[i].push(Number(ids[i]));
    }
  });

  return lists;
}

function calculateDistances(idLists: (number[])[]) {
  idLists.forEach(list => list.sort());
  
  let distances = 0;
  for (let i = 0; i < idLists[0].length; i++) {
    distances += Math.abs(idLists[0][i] - idLists[1][i]);
  }

  return distances;
}

function calculateSimilarity(idLists: (number[])[]) {
  let similarity = 0;
  for (const id of idLists[0]) {
    const duplicateIds = idLists[1].filter((element) => id === element);
    similarity += id * duplicateIds.length;
  }

  return similarity;
}