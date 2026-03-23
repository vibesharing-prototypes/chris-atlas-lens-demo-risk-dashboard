# Design System Template

## Layout

Use a two-column layout: dark sidebar navigation on the left (280px wide, `--bg-surface` background, full viewport height) and a main content area on the right (`--bg-base` background).

A thin 3px brand strip (`--brand-primary`) runs across the top of the page. Below it, a top bar (`--bg-inset` background) contains the org logo and user avatar.

## Sidebar navigation

The sidebar uses `--bg-surface` background with `--border-default` right border.

Nav items are horizontal rows: 20px icon + label text. 12px vertical padding, 16px horizontal padding.

- **Active item**: `--action-default` background (red), `--text-inverse` text (white), `--radius-md` corners
- **Inactive item**: `--text-secondary` text, no background
- **Hover**: `--bg-elevated` background
- **Section dividers**: `--border-muted` with 8px vertical margin

Nav sections can have headers in `--text-muted`, uppercase, 11px, 1px letter-spacing.

Bottom of sidebar: secondary links (Help & Support, Settings) in `--text-muted`, smaller text.

## Page header

Inside the main content area. Title is 28px, font-weight 300, `--text-primary`. Subtitle below in 14px `--text-secondary`.

Breadcrumbs above the title: 13px `--text-muted`, links in `--link-default`, separated by /.

## Cards

`--bg-surface` background, `--border-default` border, `--radius-lg` corners (12px), `--shadow-low`.

Card header: `--text-primary`, 16px, font-weight 600. Optional status badge on the right.

Card body: `--text-secondary`, 14px, regular weight.

Card padding: 20px.

## Data tables

`--bg-surface` background with `--border-default` border. Header row uses 12px uppercase `--text-muted` with 1px letter-spacing. Data rows separated by `--ui-divider`.

Row padding: 12px vertical, 20px horizontal. Row hover: `--bg-elevated`.

## Status indicators

Pill-shaped badges (`--radius-full`):
- Success: `--status-success` text on `--status-success-muted` background
- Warning: `--status-warning` text on `--status-warning-muted` background
- Error: `--status-error` text on `--status-error-muted` background
- Info: `--status-info` text on `--status-info-muted` background

12px font size, 600 weight. Include a 6px dot before the label.

## Buttons

Primary: `--action-default` background, `--text-inverse` text, `--radius-md` corners, 13px font-weight 600, 6px 16px padding.

Secondary: transparent background, `--border-default` border, `--text-primary` text.

Hover: `--action-hover` for primary, `--bg-elevated` for secondary.

## Typography

Font: Plus Jakarta Sans (`--font-sans`).

- Page title: 28px, weight 300
- Section title: 16px, weight 600
- Body: 14px, weight 400
- Small/meta: 12px, weight 400
- Labels/caps: 11px, weight 600, uppercase, 1px letter-spacing

## Spacing

Use 8px base unit: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40.

Card gap: 16px. Section gap: 24px. Page padding: 24px.

## Don'ts

- Don't use rounded-full on cards or containers — only on avatars and badges
- Don't use shadows on nav items
- Don't use `--action-default` (red) for non-interactive elements — it's exclusively for active states and primary buttons
- Don't hardcode colors — always use var(--variable-name)
