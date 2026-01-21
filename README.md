# QA Automation Playground (Playwright + TypeScript)

## Overview
This repository is a lightweight QA automation project built to demonstrate core UI test automation skills using Playwright and TypeScript.  
The focus is on creating small, fast, and reliable smoke tests that validate critical user flows.

This project is intentionally scoped to emphasize test clarity, structure, and maintainability rather than test quantity.

## Tech Stack
- TypeScript
- Playwright
- Node.js / npm

## Test Coverage
Currently included:
- UI smoke tests for core navigation and login flows
- Positive and negative login scenarios
- Assertions focused on user-visible behavior (URLs, elements, error messages)

Out of scope (by design):
- API testing
- Performance testing
- Visual regression testing
- Advanced reporting

These areas can be added later, but are excluded to keep the project focused on UI automation fundamentals.

## Project Structure

```text
/e2e
  homepage.spec.ts                    # Homepage smoke validation
  navigation-login.spec.ts            # Login navigation flow
  interaction-incorrect-login.spec.ts # Negative login scenario
  playwright.config.ts                  # Playwright configuration

