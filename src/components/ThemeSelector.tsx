import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { PiPalette } from 'react-icons/pi';

export default function ThemeSelector() {
  const { theme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [customColor, setCustomColor] = useState('#0284c7');

  const themeNames = {
    'default': 'General Hospital (Blue)',
    'st-marys': "St. Mary's Hospital (Red)",
    'city-general': 'City General (Green)',
    'royal-hospital': 'Royal Hospital (Purple)',
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme({
      ...theme,
      theme: newTheme,
      hospitalName: themeNames[newTheme as keyof typeof themeNames] || newTheme,
    });
    setIsOpen(false);
  };

  const handleCustomColorChange = () => {
    setTheme({
      ...theme,
      primaryColor: customColor,
      hospitalName: 'Custom Hospital',
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-surface-100 hover:bg-surface-200 rounded-lg transition-colors border border-surface-200"
      >
        <PiPalette className="text-lg" />
        <span className="text-sm font-medium">Hospital Theme</span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-surface-200 min-w-[280px] z-50">
          <div className="p-4 border-b border-surface-200">
            <h3 className="font-semibold text-surface-900">Select Hospital Theme</h3>
            <p className="text-sm text-surface-600 mt-1">Choose a pre-configured theme or set a custom color</p>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-surface-700">Preset Themes</label>
              {availableThemes.map((themeOption) => (
                <button
                  key={themeOption}
                  onClick={() => handleThemeChange(themeOption)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    theme.theme === themeOption
                      ? 'bg-primary text-white'
                      : 'hover:bg-surface-100 text-surface-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{themeNames[themeOption as keyof typeof themeNames]}</span>
                    <div className={`w-4 h-4 rounded-full ${
                      themeOption === 'st-marys' ? 'bg-red-600' :
                      themeOption === 'city-general' ? 'bg-green-600' :
                      themeOption === 'royal-hospital' ? 'bg-purple-600' :
                      'bg-blue-600'
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-surface-200">
              <label className="text-sm font-medium text-surface-700 block mb-2">Custom Primary Color</label>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                  className="w-10 h-8 rounded border border-surface-300"
                />
                <input
                  type="text"
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                  className="flex-1 px-3 py-1.5 border border-surface-300 rounded text-sm"
                  placeholder="#0284c7"
                />
                <button
                  onClick={handleCustomColorChange}
                  className="px-3 py-1.5 bg-primary text-white rounded text-sm hover:bg-primary-700 transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 bg-surface-50 border-t border-surface-200 rounded-b-lg">
            <p className="text-xs text-surface-600">
              Current: <span className="font-medium">{theme.hospitalName}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
