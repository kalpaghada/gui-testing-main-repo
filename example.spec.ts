import { test, expect } from '@playwright/test';

// Test suite for the simple HTML page
test.describe('Simple Test Page Validation', () => {

  // This test case navigates to our local HTML file and checks its content.
  test('should display the correct title, heading, paragraph, and button', async ({ page }) => {
    
    // Step 1: Navigate to the local HTML file.
    // Make sure 'index.html' is in the root of your project or provide the correct path.
    await page.goto('file://' + process.cwd() + '/index.html');

    // Step 2: Verify the page title is correct.
    await expect(page).toHaveTitle('Simple Test Page');

    // Step 3: Verify the main heading is visible and has the correct text.
    await expect(page.getByRole('heading', { name: 'Welcome to the Test Page' })).toBeVisible();

    // Step 4: Verify the paragraph content is correct.
    await expect(page.getByText('This is a simple paragraph for testing purposes.')).toBeVisible();

    // Step 5: Verify the button is visible and has the correct text.
    await expect(page.getByRole('button', { name: 'Click Me!' })).toBeVisible();
  });

});
