export const formatName = (name: string): string => {
  const newNames: string[] = name.split('/');
  let newName: string = newNames[0];
  return newName;
}
