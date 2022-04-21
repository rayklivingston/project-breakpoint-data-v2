export const loadState = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState && serializedState !== null
      ? JSON.parse(serializedState)
      : undefined;
  } catch (e) {
    return undefined;
  }
};

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
    window.dispatchEvent(new Event('storage'))
  } catch (e) {
    console.error('Could not save the state.', e);
  }
};

export const clearState = () => {
  try {
    localStorage.clear();
    window.dispatchEvent(new Event('storage'))
  } catch (e) {
    console.error('Could not clear the state.', e);
  }
};
