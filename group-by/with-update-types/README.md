# group-by/with-update-types

Tests `group-by: dependency-name` combined with an `update-types` filter (`minor` + `patch` only).

## Config highlights

- **Directories:** root + `components/*` (glob)
- **Group rule:** one PR per dependency name, minor/patch version-updates only
- **Major updates** are excluded from the group and should appear as individual PRs

## Expected Dependabot behaviour

- For each dependency with an available **minor or patch** update, Dependabot opens a **single grouped PR** that bumps that dependency across all three directories where it appears.
- Any available **major** update is **not** included in the group and instead produces a separate, ungrouped PR.
