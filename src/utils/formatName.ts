export const formatName = (name: string) => {
  const newName = name.split('/');
  return newName[0];
}
