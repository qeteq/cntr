export const idGenerator = () => {
    let id = 1;
    return () => id++;
};
