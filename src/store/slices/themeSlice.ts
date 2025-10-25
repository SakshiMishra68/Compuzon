import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark' | 'system';
type AccentColor = 'blue' | 'purple' | 'green' | 'red' | 'yellow' | 'pink';

interface ThemeState {
  theme: Theme;
  accentColor: AccentColor;
  isDark: boolean;
}

const initialState: ThemeState = {
  theme: 'light',
  accentColor: 'blue',
  isDark: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
      themeSlice.caseReducers.updateDarkMode(state);
    },
    setAccentColor: (state, action: PayloadAction<AccentColor>) => {
      state.accentColor = action.payload;
      localStorage.setItem('accentColor', action.payload);
      themeSlice.caseReducers.updateCSSVariables(state);
    },
    updateDarkMode: (state) => {
      let shouldBeDark = false;
      
      if (state.theme === 'dark') {
        shouldBeDark = true;
      } else if (state.theme === 'system') {
        shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      
      state.isDark = shouldBeDark;
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    updateCSSVariables: (state) => {
      const root = document.documentElement;
      const accentColors = {
        blue: '59 130 246',
        purple: '147 51 234',
        green: '34 197 94',
        red: '239 68 68',
        yellow: '234 179 8',
        pink: '236 72 153'
      };
      
      root.style.setProperty('--color-primary', accentColors[state.accentColor]);
    },
    initializeTheme: (state) => {
      const savedTheme = localStorage.getItem('theme') as Theme;
      const savedAccentColor = localStorage.getItem('accentColor') as AccentColor;
      
      if (savedTheme) {
        state.theme = savedTheme;
      }
      
      if (savedAccentColor) {
        state.accentColor = savedAccentColor;
      }
      
      themeSlice.caseReducers.updateDarkMode(state);
      themeSlice.caseReducers.updateCSSVariables(state);
    },
  },
});

export const { 
  setTheme, 
  setAccentColor, 
  updateDarkMode, 
  updateCSSVariables, 
  initializeTheme 
} = themeSlice.actions;

export default themeSlice.reducer;