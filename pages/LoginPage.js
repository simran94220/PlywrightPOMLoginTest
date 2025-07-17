exports.LoginPage=class LoginPage{

    constructor(page){
        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Username' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: ' Login' });
    }
    
  async gotoLoginPage(){
     await page.goto('https://the-internet.herokuapp.com/login');
  }
    async login(user,pwd){
        await this.username_textbox.click();
        await this.username_textbox.fill(usr);
        await this.password_textbox.click();
        await this.password_textbox.fill(pwd);
        await this.login_button.click();
    }
}