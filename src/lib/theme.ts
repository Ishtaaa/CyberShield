import { writable } from 'svelte/store';

// Define available themes that DaisyUI supports
export const themes = {
  valentine: 'valentine',
  cyberpunk: 'cyberpunk'
} as const;

export type Theme = typeof themes[keyof typeof themes];

// Create a simple theme store for UI state management
function createThemeStore() {
  // Get initial theme from localStorage or default to valentine
  const storedTheme = typeof window !== 'undefined' 
    ? localStorage.getItem('cybershield-theme') as Theme 
    : themes.valentine;
  
  const { subscribe, set } = writable<Theme>(storedTheme || themes.valentine);

  return {
    subscribe,
    set: (theme: Theme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cybershield-theme', theme);
        // Set the data-theme attribute for DaisyUI
        document.documentElement.setAttribute('data-theme', theme);
      }
      set(theme);
    },
    toggle: () => {
      subscribe(currentTheme => {
        const newTheme = currentTheme === themes.valentine ? themes.cyberpunk : themes.valentine;
        if (typeof window !== 'undefined') {
          localStorage.setItem('cybershield-theme', newTheme);
          document.documentElement.setAttribute('data-theme', newTheme);
        }
        set(newTheme);
      });
    }
  };
}

export const theme = createThemeStore();

// Initialize theme on page load
if (typeof window !== 'undefined') {
  const currentTheme = localStorage.getItem('cybershield-theme') as Theme || themes.valentine;
  // Set the data-theme attribute for DaisyUI
  document.documentElement.setAttribute('data-theme', currentTheme);
}
