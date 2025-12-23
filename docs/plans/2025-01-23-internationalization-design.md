# Internationalization (i18n) Design

## Overview

Add multi-language support for Croatian (hr), English (en), German (de), and Spanish (es) with browser detection and user preference persistence.

## Languages

| Code | Language |
|------|----------|
| en   | English (fallback) |
| hr   | Hrvatski (Croatian) |
| de   | Deutsch (German) |
| es   | Español (Spanish) |

## Technical Stack

- `i18next` - Core i18n framework
- `react-i18next` - React bindings
- `i18next-browser-languagedetector` - Auto-detect browser language

## Language Detection Priority

1. localStorage (user's previous selection)
2. Browser language settings
3. Fallback to English

## File Structure

```
src/
├── i18n/
│   ├── index.ts              # i18n configuration
│   └── locales/
│       ├── en.json           # English (source)
│       ├── hr.json           # Croatian
│       ├── de.json           # German
│       └── es.json           # Spanish
```

## Translation JSON Structure

```json
{
  "common": {
    "siteTitle": "Upanishad",
    "contact": "Contact",
    "learnMore": "Learn More"
  },
  "nav": {
    "hub": "Hub",
    "hubSubtitle": "Return to center",
    "offerings": "Offerings",
    "offeringsSubtitle": "Sacred medicines & ceremonies",
    "events": "Events",
    "eventsSubtitle": "Upcoming gatherings",
    "journey": "Journey",
    "journeySubtitle": "The path walked"
  },
  "hub": { ... },
  "offerings": {
    "tobacco": {
      "title": "...",
      "subtitle": "...",
      "description": "...",
      "details": ["...", "..."]
    }
  },
  "events": { ... },
  "journey": { ... },
  "newsletter": { ... },
  "contact": { ... }
}
```

## Language Picker

**Location:** Navigation bar (right side)

**Design:**
- Compact dropdown showing current language code (EN, HR, DE, ES)
- Dropdown with full language names on click
- Matches existing aesthetic (gold accent, cream text)

**Component:** `src/components/LanguageSwitcher.tsx`

## Migration Steps

1. Install i18next packages
2. Create i18n configuration (`src/i18n/index.ts`)
3. Extract English content to `en.json`
4. Generate translated versions (hr, de, es) - initial auto-translation
5. Update components to use `t()` function
6. Add LanguageSwitcher to Navigation
7. Initialize i18n in `main.tsx`

## Components to Update

- `main.tsx` - Import i18n config
- `Navigation.tsx` - Add language switcher
- `Hub.tsx` - Use `t()` for portal text
- `Offerings.tsx` - Use `t()` for all offerings content
- `Events.tsx` - Use `t()` for event content
- `Journey.tsx` - Use `t()` for journey sections
- `Newsletter.tsx` - Use `t()` for labels
- `Contact.tsx` - Use `t()` for labels

## Notes

- Initial translations are auto-generated and require manual review
- English serves as the source/fallback language
- All text content will be centralized in translation files
