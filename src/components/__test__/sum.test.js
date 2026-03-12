import { sum } from "../sum";
test("Sum Function Should Calculate the Sum Of Two Numbers", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});
