# Typography & Spacing Scale (Frappe Parity)

This document defines the canonical design system for the FlexiRule Hugo theme, reverse-engineered from the Frappe Framework documentation.

## Typography Scale

Base font: **Inter** (Variable)
Base size: **14px**
Line height: **1.6**
Letter spacing: **0.015em** (Positive tracking for density)

| Level | Font Size | Weight | Line Height | Letter Spacing | Margin (Bottom) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | 32px | 700 | 1.2 | -0.01em | 12px |
| **H2** | 24px | 650 | 1.3 | -0.01em | 12px |
| **H3** | 18px | 650 | 1.4 | -0.01em | 12px |
| **H4** | 15px | 650 | 1.4 | -0.01em | 12px |
| **Body** | 14px | 420 | 1.6 | 0.015em | 16px |
| **Lead** | 18px | 420 | 1.5 | 0.015em | 16px |
| **Small/UI** | 13px | 450 | 1.4 | 0.02em | - |
| **Tiny/Label**| 11px | 600 | 1.2 | 0.05em | - |
| **Code** | 13px | 450 | 1.6 | 0.02em | - |

## Spacing Scale (4px Base Grid)

| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--space-1` | 4px | Micro adjustments |
| `--space-2` | 8px | Item gaps, small padding |
| `--space-3` | 12px | Secondary margins, sidebar gaps |
| `--space-4` | 16px | Standard padding, paragraph bottom |
| `--space-5` | 20px | Major component padding |
| `--space-6` | 24px | Standard vertical block rhythm |
| `--space-8` | 32px | Section spacing, H2 top margin |
| `--space-10`| 40px | Large component separation |
| `--space-12`| 48px | Home page hero spacing |
| `--space-16`| 64px | Page-level layout gaps |

## Layout Constants

- **Max Content Width**: 820px (~80 characters per line)
- **Sidebar Width**: 260px
- **TOC Width**: 220px
- **Header Height**: 56px
- **Border Radius**: 8px (Canonical for Frappe/FlexiRule components)

## Navigation Ergonomics

1. **Sidebar**: Uses high-density 13px text with optimized weight (450) for scanning. Active items use 600 weight with a subtle 8% background tint.
2. **Mobile**: Implements a bottom-sheet pattern (85vh height) with a top grabber handle, moving navigation closer to the user's thumb.
3. **Table of Contents**: Right-aligned, fixed position, using micro-typography (13px/11px) to avoid distracting from the main content.
