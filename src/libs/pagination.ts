export function getPaginationOptions(page: number, itemsPerPage: number) {
  const skip = (page - 1) * itemsPerPage;
  const take = itemsPerPage;
  return { skip, take };
}