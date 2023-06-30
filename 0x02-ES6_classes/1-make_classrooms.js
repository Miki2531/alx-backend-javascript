import ClassRoom from './0-classroom';
/**
 *
 * @returns  an array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 43].map((size) => new ClassRoom(size));
}
