import { assertEquals } from "@std/assert";
import { task1, task2 } from "./main.ts";

Deno.test('Task1 with example data', function fn() {
  const inputFile = 'example_input.txt';
  const distances = task1(inputFile);
  assertEquals(distances, 11);
});

Deno.test('Task2 with example data', function fn() {
  const inputFile = 'example_input.txt';
  const similarity = task2(inputFile);
  assertEquals(similarity, 31);
});