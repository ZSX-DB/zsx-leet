import topKFrequent from '../347';
import { detectItems } from '../utils/detect';

test("347", () => {
    expect(detectItems<number>(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2])).toBe(true)
    expect(detectItems<number>(topKFrequent([1], 1), [1])).toBe(true)
})
