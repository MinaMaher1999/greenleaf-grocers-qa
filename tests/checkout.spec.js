import { test, expect } from '@playwright/test'



const GUEST_EMAIL = 'capstone.guest@example.test'

test('guest checkout happy path without expired promo', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('catalog-section')).toBeVisible()

  await page.getByTestId('add-to-cart-btn-p-apples').click()
  await page.getByTestId('nav-cart').click()

  await page.getByTestId('proceed-to-checkout-btn').click()

  await page.getByTestId('checkout-name-input').fill('John Tester')

  await page.getByTestId('checkout-email-input').fill(GUEST_EMAIL)

  await page.getByTestId('checkout-address-input').fill('123 Green Street, Alexandria')

  await page.getByTestId('checkout-submit-btn').click()

  await expect(page.getByTestId('success-section')).toBeVisible()

  await expect(page.getByTestId('success-order-id')).toHaveText(/\S+/)
  
  
})
