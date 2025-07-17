import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('test', async ({ page }) => {
  const login = new LoginPage(page);
  login.gotoLoginPage();
  login.login('tomssmith', 'SuperSecretPassword!');
  
});