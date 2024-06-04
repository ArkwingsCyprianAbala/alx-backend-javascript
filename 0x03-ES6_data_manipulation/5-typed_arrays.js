/**
 * Creates Int8Array with the specified length,sets the value,returns a DataView ArrayBuffer.
 *
 * @param {number} length - The length of the Int8Array to create.
 * @param {number} position - The position at which to set the value.
 * @param {number} value - The value to set at the specified position.
 * @returns {DataView} - A DataView of the underlying ArrayBuffer.
 * @throws {Error} - If the position is outside the range of the Int8Array.
 */
const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  if (position > int8Array.length) throw new Error('Position outside range');
  int8Array[position] = value;
  return new DataView(buffer);
};

export default createInt8TypedArray;
